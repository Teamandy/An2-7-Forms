import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
import { Observable } from 'rxjs';

export class CustomValidators {
  static serviceLevel(c: AbstractControl): ValidationErrors | null {
    if (
      c.value !== undefined &&
      (Number.isNaN(c.value) || c.value < 1 || c.value > 5)
    ) {
      return {
        serviceLevel: true,
      };
    }
    return null;
    // next line is for template-driven-form example:
    // return checkServiceLevel(c);
  }
  static serviceLevelRange(min: number, max: number): ValidatorFn {
    return (c: AbstractControl): ValidationErrors | null => {
      if (
        c.value !== undefined &&
        (Number.isNaN(c.value) || c.value < min || c.value > max)
      ) {
        return {
          serviceLevel: true,
        };
      }
      return null;
      // next line is for template-driven-form example:
      // return checkServiceLevel(c);
    };
  }

  static asyncEmailPromiseValidator(
    c: AbstractControl
  ): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> {
    const email = c.value;

    return new Promise((resolve) => {
      setTimeout(() => {
        if (email === 'existsemail@example.com') {
          resolve({
            asyncEmailInvalid: true,
          });
        } else {
          resolve(null);
        }
      }, 2000);
    });
  }

  static emailMatcher(c: AbstractControl): ValidationErrors | null {
    const emailControl = c.get('email');
    const emailConfirmControl = c.get('confirmEmail');

    if (emailControl.pristine || emailConfirmControl.pristine) {
      return null;
    }

    if (emailControl.value === emailConfirmControl.value) {
      return null;
    }

    return { emailMatch: true };
  }
}

export function checkServiceLevel(
  c: AbstractControl,
  min: number = 1,
  max: number = 5
): ValidationErrors | null {
  if (
    c.value !== undefined &&
    (Number.isNaN(c.value) || c.value < min || c.value > max)
  ) {
    return {
      serviceLevel: true,
    };
  }
  return null;
}
