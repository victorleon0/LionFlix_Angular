import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { UserInterface } from 'src/app/models/user.interfaces';
import { comparePassword } from 'src/app/validators/passwordValidator';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  //userForm es de tipo FormGroup porque va a ser una "agrupación" de datos dentro de un formulario. 
  //Es decir, userForm es mi objeto formulario.
  public userForm: FormGroup;
  //La variable opcional submitted me va a permitir volverla true o false y saber como actuar en cada punto de ejecucion en mi formulario
  public submitted: boolean = false;

  //Dentro de los argumentos del constructor almaceno en una variable privada (es privada porque yo no voy a utilizar formBuilder fuera de aqui o pasarlo por Input o cualquier otra cosa). Almaceno mi dependencia FormBuilder en una variable llamada formBuilder para poder utilizarla.
  constructor(private formBuilder: FormBuilder) {
    //formBuilder tiene un metodo llamado group que me permite hacer un formulario con sus campos y validaciones
    this.userForm = this.formBuilder.group({
      //La primera configuracion es el estado inicial del campo, en este caso string vacio, y el segundo array son las validaciones o Validators
      username: ["", [Validators.required, Validators.minLength(3)]],
      password: ["", [Validators.required, Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')]],
      rePassword: ["", [Validators.required, Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')]]
    }, {
      validator: comparePassword('password', 'rePassword')
    })
  }

  //En un objeto aparte en mi formBuilder le podemos aplicar los validadores custom
  ngOnInit(): void {
  }

  //Definimos la función a la hora de ejecutar el submit
  public onSubmit() {
    //Lo primero que voy a hacer es setear submitted a true para saber que el usuario a comenzado con esta ejecución:
    this.submitted = true;
    //Si el fomulario pasa las validaciones que le he indicado:
    if (this.userForm.valid) {
      const user: UserInterface = {
        //Con estos .get recuperamos los campos indicados entre comillas del formulario y su valor. La interrogacion que se le pone entre el valor y el punto es para que en ningún caso llegue null
        username: this.userForm.get('username')?.value,
        password: this.userForm.get('password')?.value,
        rePassword: this.userForm.get('rePassword')?.value
      }
      //Le hacemos un JSON.stringy a user porque es un objeto y lo tenemos que convertir a string para que lo muestre en un alert el navegador
      
      alert(JSON.stringify(user))
      //Reseteamos el formulario al final del submit para que se quede como estaba de nuevo
      this.userForm.reset();
      //Volvemos a setear submitted como false para saber que ya no se está ejecutando mi función submit
      this.submitted = false
    }

  }

}

