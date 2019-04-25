import {Component, OnInit, DoCheck} from '@angular/core';
import {Router } from '@angular/router';
import { UsuarioService } from '../../service/usuario.service';
import { ToastrService } from 'ngx-toastr';
import { catUsuario } from '../../modelos/catUsuario';




@Component({
    selector : 'login',
    templateUrl: 'login.component.html',
    styleUrls: ['login.component.css'],
    providers: [UsuarioService]

})

export class LoginComponent implements OnInit, DoCheck {

    ipcUsuario: string;
    ipcPassword: string;
    user: any;
    public _catUsuario: catUsuario;
    public _catUsuarios: Array<catUsuario> = [];

    public usserLogged: catUsuario;

    constructor( private router: Router,
         private _UsuarioService: UsuarioService,
         private toastr: ToastrService
         ) {

    }

ngOnInit(): void {
    // Remueve el el objeto al salir de la sesion
  //  localStorage.removeItem('miNombre');
}

ngDoCheck() {

}


    click() {

        let respuesta, Mensaje, Error, valor ;

        this._UsuarioService.postLogin(this.ipcUsuario, this.ipcPassword ).subscribe((result) => {

            respuesta = result.body;
            Error   = respuesta.response.oplError;
            Mensaje = respuesta.response.opcMessage;


                if (Error === true) {  /// Error
                    // alert('-->' + Mensaje);

                    this.error(); // Manda llamar el metodo error

                } else { /// Si es valido entra al sistema (menu)

                    this.router.navigate (['/menu']);
                    this.success();


                // Guarda solo la tabla, no todo el objeto
                valor = respuesta.response.tt_catUsuario.tt_catUsuario;
                // En el objeto guarda el valor
                this._catUsuario = new catUsuario (
                        valor[0].iUsuario,
                        valor[0].cUsuario,
                        valor[0].cPassword,
                        valor[0].cNombre,
                        valor[0].dtNacimiento,
                        valor[0].lActivo,
                        valor[0].cObc
                    );
                    // Se pasa el objeto completo _catUsuario

                // valor.forEach(renglon => {
                    /* crea Objeto
                    this._catUsuario = new catUsuario (
                        renglon.iUsuario,
                        renglon.cUsuario,
                        renglon.cPassword,
                        renglon.cNombre,
                        renglon.dtNacimiento,
                        renglon.lActivo,
                        renglon.cObc
                    );
                        console.log ('aqui esta el usuario---->' +  this._catUsuario);
                });*/

                localStorage.setItem('miNombre', JSON.stringify (this._catUsuario));
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
