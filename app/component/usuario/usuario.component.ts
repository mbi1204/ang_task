import {Component} from '@angular/core';
import {Router } from '@angular/router'; 
import {UsuarioService} from '../../service/usuario.service';
import {catUsuario} from '../../modelos/catUsuario';


@Component({
    selector :'usuario',
    templateUrl:'usuario.component.html',
    styleUrls: ['usuario.component.css'], 
    providers: [UsuarioService]
})

export class UsuarioComponent {

    //Objetos
    public _catUsuario:catUsuario;
    public _catUsuarios:Array<catUsuario> = [];
    public _nuevo:catUsuario;

    constructor( private router: Router,
        private _UsuarioService: UsuarioService) {

    console.log("usuario Component");
    this._nuevo = new catUsuario(0, "","","",null,true,"");
 }

    ngOnInit(): void {
        this.lista();
    }


    lista() {
        console.log("lista()");
        var respuesta, lista;
        this._catUsuarios = [];

        this._UsuarioService.getLista().subscribe((result) => {

            respuesta = result.body;
            lista = respuesta.response.tt_ctUsuario.tt_catUsuario;

            lista.forEach(renglon => {

                //crea Objeto
                this._catUsuario = new catUsuario (
                    renglon.iUsuario,
                    renglon.cUsuario,
                    renglon.cPassword,
                    renglon.cNombre,
                    renglon.dtNacimiento,
                    renglon.lActivo,
                    renglon.cObc
                );
                //guarda objeto en la lista
                this._catUsuarios.push(this._catUsuario);
            });

        }, (error) => {

            alert(error);

        });//service
    }//lista

    crear() {
        console.log("crear");

        var respuesta;

        this._UsuarioService.crear(this._nuevo).subscribe((result) => {

            respuesta = result.body;
        }, (error) => {
            alert (error);
        });//service
    }
}
