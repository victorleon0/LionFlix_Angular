import { FormGroup } from "@angular/forms";

//Declaramos la funcion comparePassword a la que le van a entrar por argumento la password y la rePassword
export function comparePassword(controlName: string, matchingControlName: string) {
    return (formGroup: FormGroup) => {
        //Vamos a almacenar los dos parametros de la funcion con la informacion que le entre desde fuera por los formControlName
        const control = formGroup.controls[controlName];
        const matchingControl = formGroup.controls[matchingControlName];

        //Controlar los errores
        //Si los errores del controlador de coincidencia con los password no es que no coincida (mustMatch) retorno y sigo con la ejecución
        if (matchingControl.errors && !matchingControl.errors["mustMatch"]) {
            return;
        }
        //Si el valor del password no coincide con el valor del repassword seteo los errores a true, es decir, mustMatch seria true
        if (control.value !== matchingControl.value) {
            matchingControl.setErrors({ mustMatch: true })
            //Y en cualquier otro caso no seteo los errores
        } else {
            matchingControl.setErrors(null)
        }
    }
}

