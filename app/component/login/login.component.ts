import {Component, OnInit} from '@angular/core';
import {Router } from '@angular/router';
import { UsuarioService } from '../../service/usuario.service';
import { ToastrService } from 'ngx-toastr';



@Component({
    selector :'login',
    templateUrl: 'login.component.html',
    styleUrls: ['login.component.css'],
    providers: [UsuarioService]

})

export class LoginComponent implements OnInit {

    ipcUsuario: String;
    ipcPassword: String;


    constructor( private router: Router,
         private _UsuarioService: UsuarioService,
         private toastr: ToastrService
         ) {

    }

ngOnInit(): void {
   // setTimeout (() => this.toastr.error('Hello world!', 'Toastr fun!'));

}


    click() {

        let respuesta, Mensaje, Error;

        this._UsuarioService.postLogin(this.ipcUsuario, this.ipcPassword ).subscribe((result) => {

            respuesta = result.body;
            Error  = respuesta.response.oplError;
            Mensaje = respuesta.response.opcMessage;


                if (Error === true) {  /// Error
                    // alert('-->' + Mensaje);
                    this.error(); // Manda llamar el metodo error


                } else { /// Si es valido entra al sistema (menu)

                    this.router.navigate
                    (['/menu']);
                    this.success();
                }

        }, (error) => {
            alert('aqui estoy');


            alert (Error);
        });
    }


    success() {
        this.toastr.success('Bienvenido', 'Usuario correcto',
        {positionClass : 'toast-top-center', timeOut: 1800 });
        }
    error() {
        this.toastr.error('Intente nuevamente!', 'Usuario incorrecto',
        {positionClass : 'toast-top-center', timeOut: 1800 });
        }
}
