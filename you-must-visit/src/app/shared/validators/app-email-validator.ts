import { AbstractControl, ValidatorFn } from "@angular/forms";

export function appEmailValidator(formGroup: AbstractControl): ValidatorFn {

    const regExp = new RegExp(`^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$`);

    return (control) => {
        const x = control.value;
        const z = regExp.test(control.value);
        return control.value === "" || regExp.test(control.value)
            ? null
            : { appEmailValidator: true };
    };

}