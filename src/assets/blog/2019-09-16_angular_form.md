In this blog post, I found a way to address two of my favourite topics, Angular development and FIRE! FIRE stands for financial independence - retire early.

I am going to show you how to build an Angular reactive form. The end goal is to show how much time you have left until retirement and how much money you need to have saved up.

Source code: [https://github.com/HoplaGeiss/ludan-retirement-calculator](https://github.com/HoplaGeiss/ludan-retirement-calculator)

Demo: [https://ludan.io/library/retirement-calculator](https://ludan.io/library/retirement-calculator)

The first thing to do is to build a nice input field.

### Retirement Calculator Input Field

``` typescript
<div class="input-group">
  <input type="text" formControlName="capitalInvested" />
  <label>Capital currently invested</label>
  <span class="bar"></span>
</div>
```

``` scss
*,
:before,
:after {
  box-sizing: border-box;
}

.input-group {
  position: relative;
  margin-bottom: 20px;
  @include font-family();

  input {
    margin-top: 30px;
    background: none;
    color: $normal-color;
    font-size: 16px;
    padding: 5px;
    display: block;
    width: 100%;
    border: none;
    border-radius: 0;
    border-bottom: 1px solid $muted-color;
    outline: none;

    &.ng-invalid ~ label {
      color: red;
    }

    &.ng-invalid:not(:focus) {
      border-bottom-color: red;
    }

    &.ng-invalid ~ .bar:before {
      background: red;
    }

    &:focus:not(.ng-invalid) ~ label {
      color: $hl-color;
    }
    &:focus ~ .bar:before {
      width: 100%;
    }
  }

  label {
    color: $normal-color;
    font-size: 16px;
    position: absolute;
    top: -20px;
    transition: $transition-time ease all;
  }

  .bar {
    position: relative;
    display: block;
    width: 100%;
    &:before {
      content: '';
      height: 2px;
      width: 0;
      bottom: 0px;
      position: absolute;
      background: $hl-color;
      transition: $transition-time ease all;
      left: 0%;
    }
  }
}
```

I am using animation on the `bar` element to make the input look nicer.

Let's have a look at the complete template now

### Retirement calculator's template

``` typescript
 <section class="retirement-calculator">
  <form [formGroup]="form" class="form">
    <div class="input-group">
      <input type="text" formControlName="capitalInvested" />
      <label>Capital currently invested</label>
      <span class="bar"></span>
    </div>

    <div class="input-group">
      <input type="text" formControlName="investmentPerMonth" />
      <label>Projected investment per month</label>
      <span class="bar"></span>
    </div>

    <div class="input-group">
      <input type="text" formControlName="interestRate" />
      <label>Projected interest rate per year</label>
      <span class="bar"></span>
    </div>

    <div class="input-group">
      <input type="text" formControlName="numberRetirementYears" />
      <label>Life expectancy from retirement time</label>
      <span class="bar"></span>
    </div>

    <div class="input-group">
      <input type="text" formControlName="monthlyDividendGoal" />
      <label>Monthly dividend goal at retirement</label>
      <span class="bar"></span>
    </div>
  </form>

  <div *ngIf="form.invalid">Fix the errors to see the results</div>
  <div *ngIf="!form.invalid" class="result">
    <p>Saving goal before retirement: {{ savingGoal | currency: 'GBP':'symbol':'1.0-0' }}</p>
    <p>
      Time left until retirement: <b>{{ timeLeftUntilRetirement.humanize() }}</b>
    </p>
  </div>
</section>
```

The template is mostly just a form and 2 elements that appear in case the form is invalid or once it's valid. Also, I am using pipes to improve the format of the dates.

All that remains now is the logic of the component.

### Retirement Calculator Logic

``` typescript
form = this.fb.group({
  capitalInvested: [10000, [numberValidator.bind(this)]],
  investmentPerMonth: [1000, [numberValidator.bind(this)]],
  interestRate: [2, [numberValidator.bind(this)]],
  numberRetirementYears: [30, [numberValidator.bind(this)]],
  monthlyDividendGoal: [2000, [numberValidator.bind(this)]]
});
savingGoal: number;
monthLeftUntilRetirement: number;
timeLeftUntilRetirement: moment.Duration;

constructor(private fb: FormBuilder) {}

ngOnInit() {
  this.calculateSavingGoal();
  this.calculateMonthLeftToRetirement();

  this.form.valueChanges.subscribe(val => {
    this.calculateSavingGoal();
    this.calculateMonthLeftToRetirement();
  });
}

calculateSavingGoal = () => {
  const monthlyDividendGoal = this.form.get('monthlyDividendGoal').value;
  const numberRetirementYears = this.form.get('numberRetirementYears').value;
  const interestRate = this.form.get('interestRate').value / 100;

  this.savingGoal =
    (12 * monthlyDividendGoal) / interestRate -
    (12 * monthlyDividendGoal) / (interestRate * Math.pow(1 + interestRate, numberRetirementYears));
}

calculateMonthLeftToRetirement = () => {
  const interestRate = this.form.get('interestRate').value / 100;
  const capitalInvested = this.form.get('capitalInvested').value;
  const investmentPerMonth = this.form.get('investmentPerMonth').value;

  this.monthLeftUntilRetirement =
    Math.log(
      (((this.savingGoal * (1 - (1 + interestRate / 12))) / investmentPerMonth) * (1 + interestRate / 12) - 1) /
        (((capitalInvested * (1 - (1 + interestRate / 12))) / investmentPerMonth) * (1 + interestRate / 12) - 1)
    ) / Math.log(1 + interestRate / 12);

  this.timeLeftUntilRetirement = moment.duration(this.monthLeftUntilRetirement, 'months');
}
```

**Attributes**:
- form - I am using a form to bing all the variables. I am also using it to set the default values and to do validation.
- savingGoal - Number of pounds needed before retirement
- monthLeftUntilRetirement - Number of months left until retirement
- timeLeftUntilRetirement - Uses `moment` to help calculate differences

**Methods**:
- calculateSavingGoal - calculates `savingGoal` based on `monthlyDividendGoal`, `numberRetirementYears`, and `interestRate`.
- calculateMonthLeftToRetirement - calculates `monthLeftUntilRetirement` based on `interestRate`, `capitalInvested`, and `investmentPerMonth`.
- ngOnInit - calls `calculateSavingGoal` and `calculateMonthLeftToRetirement` at init and once again everytime the forms changes.

That's it! Enjoy your Angular Form.