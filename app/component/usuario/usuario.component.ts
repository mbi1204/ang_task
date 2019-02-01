import {Component} from '@angular/core';
import {Router } from '@angular/router';
import {UsuarioService} from '../../service/usuario.service';
import {ctUsuario} from '../../modelos/ctUsuario';


@Component({
    selector :'usuario',
    templateUrl:'usuario.component.html',
    styleUrls: ['usuario.component.css'],
    providers: [UsuarioService]
})

export class UsuarioComponent {

    //Objetos
    public _ctUsuario:ctUsuario;
    public _ctUsuarios:Array<ctUsuario> = [];

    constructor( private router: Router,
        private _UsuarioService: UsuarioService) {
    console.log("usuario Component");
 }

    ngOnInit(): void {
        this.lista();
    }


    lista() {
        console.log("lista()");
        var respuesta, lista;
        this._ctUsuarios = [];

        this._UsuarioService.getLista().subscribe((result) => {

            respuesta = result.body;
            lista = respuesta.response.tt_ctUsuario.tt_ctUsuario;

            lista.forEach(renglon => {

                //crea Objeto
                this._ctUsuario = new ctUsuario (
                    renglon.iUsuario,
                    renglon.cUsuario,
                    renglon.cPassword,
                    renglon.cNombre,
                    renglon.dtNacimiento,
                    renglon.lActivo,
                    renglon.cObc
                );
                //guarda objeto en la lista
                this._ctUsuarios.push(this._ctUsuario);
            });

        }, (error) => {

            alert(error);

        });
    }
}
