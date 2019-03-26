import {Component} from '@angular/core';
import {Router } from '@angular/router';
import {UsuarioService} from '../../service/usuario.service';
import { catUsuario } from '../../modelos/catUsuario';


@Component({
    selector : 'usuario',
    templateUrl: 'usuario.component.html',
    styleUrls: ['usuario.component.css'],
    providers: [UsuarioService]
})

export class UsuarioComponent {
    ipcBusqueda: String;

    // atributos

    // crea objetos para la lista
    public _catUsuario: catUsuario;
    // lista del modelo
    public _catUsuarios: Array<catUsuario> = [];
    // guarda la lista nueva
    public _nuevo: catUsuario;

    constructor( private router: Router,
        private _UsuarioService: UsuarioService) {

    console.log('usuario Component');
    this._nuevo = new catUsuario(0, '', '', '', null, true, '');
 }

    ngOnInit(): void {
        this.lista();
    }


    lista() {
        console.log('lista()');
        let respuesta, lista;
        this._catUsuarios = [];

        this._UsuarioService.getLista().subscribe((result) => {

            respuesta = result.body;
            lista = respuesta.response.tt_catUsuario.tt_catUsuario;

            lista.forEach(renglon => {

                // crea Objeto
                this._catUsuario = new catUsuario (
                    renglon.iUsuario,
                    renglon.cUsuario,
                    renglon.cPassword,
                    renglon.cNombre,
                    renglon.dtNacimiento,
                    renglon.lActivo,
                    renglon.cObc
                );
                // guarda objeto en la lista
                this._catUsuarios.push(this._catUsuario);
            });

        }, (error) => {

            alert(error);

        }); // service
    }// lista


    /******Trae un solo registro*******/
    registro(iUsuario: string)  {
        console.log('leee registro' + iUsuario );

        let respuesta, lista;

        // Se pasa el parametro
        this._UsuarioService.getRegistro(iUsuario).subscribe((result) => {

            respuesta = result.body;

            lista = respuesta.response.tt_catUsuario.tt_catUsuario;
           

            lista.forEach(renglon => {

                this._catUsuario = new catUsuario (
                    renglon.iUsuario,
                    renglon.cUsuario,
                    renglon.cPassword,
                    renglon.cNombre,
                    renglon.dtNacimiento,
                    renglon.lActivo,
                    renglon.cObc
                );

                console.log(this._catUsuario.iUsuario);
                console.log(this._catUsuario.cUsuario);
               // this._catEstTareas.push(this._catEstTarea);
            });
        }, (error) => {
            alert(error);

        }); // service
    }

    crear() {
        console.log('crear');

        let respuesta;

        this._UsuarioService.crear(this._nuevo).subscribe((result) => {

            respuesta = result.body;
        }, (error) => {
            alert (error);
        }); // service
    }

    /* Actualiza los registros del fomulario*/
    modificar () {
        let respuesta;

        this._UsuarioService.modificar(this._catUsuario).subscribe((result) => {
            respuesta = result.body;
        });
        console.log('modificar c'  + this._catUsuario.iUsuario);
        console.log(''    +  this._catUsuario.cUsuario);

    }



    eliminar(iUsuario: string) {
        console.log('usuario' + iUsuario);
        let respuesta, Mensage;
        this._UsuarioService.eliminar(iUsuario).subscribe((result) => {

            respuesta = result.body;
            Mensage = respuesta.response.opcMensage;

        }, (error) => {

            alert (error);
        }); // service
    }

    busqueda() {
        let respuesta, lista;

        this._UsuarioService.busqueda(this.ipcBusqueda).subscribe((result) => {

            respuesta = result.body;
            lista = respuesta.response.tt_catUsuario.tt_catUsuario;
            this._catUsuarios = [];


            lista.forEach(renglon => {

                // crea Objeto
                this._catUsuario = new catUsuario (
                    renglon.iUsuario,
                    renglon.cUsuario,
                    renglon.cPassword,
                    renglon.cNombre,
                    renglon.dtNacimiento,
                    renglon.lActivo,
                    renglon.cObc
                );
                this._catUsuarios.push(this._catUsuario);


            }); console.log('Entro aquiiiii' + this.ipcBusqueda );


        }, (error) => {

            alert(error);

        }); // service

    }


    refresh(): void {
        window.location.reload();
        }
}
