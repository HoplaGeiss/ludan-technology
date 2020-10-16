In most application forms are the primary way for users to interact with the data.
Forms often means validation and the most dreaded async validation.
Things get even trickier when you try to add a parameter to a async validator.
Let's have a look how this can be done.

Source code: [https://github.com/HoplaGeiss/ludan-async-validator-with-param](https://github.com/HoplaGeiss/ludan-async-validator-with-param)

### Component

The component just initializes a FormGroup thanks to FormBuilder.
The form has a single field `name` and name is given a synchronous validator `Validators.required` and an asynchronous one `catValidator` which is our custom validator.

```ts
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { CatValidator } from './cat-validator';

@Component({
  selector: 'app-root',
  styleUrls: ['app.component.scss'],
  templateUrl: 'app.html'
})
export class AppComponent {
  form: FormGroup;
  allowedIds = ['2', '1'];

  constructor(private fb: FormBuilder, private catValidator: CatValidator) {
    this.form = this.fb.group({
      name: ['', [Validators.required], [this.catValidator.validate(this.allowedIds)]]
    });
  }

  get name() {
    return this.form.get('name');
  }
}
```

In our html there is no surprise, we just material form-field, input and button with a custom `error-messages` class.

```html
<h1>Name your cat</h1>
<form [formGroup]="form">
  <mat-form-field appearance="standard">
    <mat-label>Name</mat-label>
    <input matInput formControlName="name" />
  </mat-form-field>

  <div class="error-messages">
    <div *ngIf="name.errors && name.errors.duplicateError">This name already exists</div>
  </div>

  <button
    type="submit"
    mat-raised-button
    color="primary"
    aria-label="Save"
    [disabled]="!form.valid"
  >
    Save
  </button>
</form>
```

### Async Validator

Now comes the meaty part! The async validator with params.

Our validator is split in two functions:
- The `validate` functions take the inputs and send the output.
- The logic happens in `valueIsUnique`.

Basically we receive as input a value string which is the name of the cat and an id of allowed duplicate cats.
Which means we need to query the database with `this.apiService.getCats()`, we then filter out the allowed duplicate ids and we then look for duplicate name.

```ts
import { Injectable } from '@angular/core';
import { AbstractControl, AsyncValidatorFn, ValidationErrors } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { debounceTime, distinctUntilChanged, filter, first, map, switchMap } from 'rxjs/operators';

import { ApiService } from './api.service';
import { Cat } from './cat.model';

@Injectable({ providedIn: 'root' })
export class CatValidator {
  constructor(private apiService: ApiService) {}
  validate(catIds: string[]): AsyncValidatorFn {
    return (control: AbstractControl): Observable<ValidationErrors | null> => {
      if (!control.valueChanges) return of(null);
      return control.valueChanges.pipe(
        map((value) => value.trim()),
        filter((value) => value !== ''),
        debounceTime(100),
        distinctUntilChanged(),
        switchMap((value: string) => this.valueIsUnique(value, catIds)),
        map((unique: boolean) => (unique ? null : { duplicateError: true })),
        first()
      );
    };
  }

  private valueIsUnique(value: string, catIds: string[]): Observable<boolean> {
    return this.apiService.getCats().pipe(
      map((cats: Cat[]) => {
        return !cats
          .filter((cat: Cat) => !catIds.includes(cat.id))
          .find((cat: Cat) => cat.name === value);
      })
    );
  }
}
```

Now that you have all code, I will summurize what made this work:
- Create a validator class instead of a function. That's because this way we can instantiate `apiService`
- Don't make the class implement `AsyncValidators` so that we can call directly it's `validate` function with a param from the component as such `this.catValidator.validate(this.allowedIds)`