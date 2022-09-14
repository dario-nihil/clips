import { ValidationErrors, AbstractControl, ValidatorFn } from '@angular/forms';

export class RegisterValidator {
  static match(controlName: string, matchingControlName: string): ValidatorFn {
    return (group: AbstractControl): ValidationErrors | null => {
      const control = group.get(controlName);
      const matchingCOntrol = group.get(matchingControlName);

      if (!control || !matchingCOntrol) {
        console.log('Form controls cannot be found in the form group.');
        return { controlNotFound: false };
      }

      const error =
        control.value === matchingCOntrol.value ? null : { noMatch: true };

      matchingCOntrol.setErrors(error);

      return error;
    };
  }
}
