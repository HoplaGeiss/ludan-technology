Personally I have been annoyed more than once at the default way Angular handles form errors. Even if you put a lot of effort fiddling with regex or figuring out how to create an async validator, the error is not displayed until you leave the input field.

However todayI figure out how to solve that! And it was way more easy than I thought.

Source code: [https://github.com/HoplaGeiss/instant-error-matcher](https://github.com/HoplaGeiss/instant-error-matcher)

All you need to do is to use that custom `ErrorStateMatcher`

### InstantErrorMatcher

```ts
import { FormControl } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';

export class InstantErrorMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null): boolean {
    return control !== null && control.invalid && (control.dirty || control.touched);
  }
}
```

Here is an example of how to use it.

### Usage

```ts
// In your component
matcher = new InstantErrorMatcher();
```

```html
// In your template
<input matInput formControlName="name" [errorStateMatcher]="matcher" />
```
