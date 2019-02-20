
import {Component} from '@angular/core';
import {OnInit} from '@angular/core';
import {Router } from '@angular/router';
import {TareaService } from '../../service/tarea.service';
import {opeTarea} from '../../modelos/opetarea';
import { ClienteService } from '../../service/cliente.service';
import { catCliente } from '../../modelos/catCliente';
import { UsuarioService } from '../../service/usuario.service';
import {catUsuario} from '../../modelos/catUsuario';
import {EstatusService} from '../../service/estatus.service';
import { catEstTarea } from '../../modelos/catEstTarea';
import {TipoService} from '../../service/tipo.service';
import { catTipoTarea } from '../../modelos/catTipoTarea';



@Component ({
    // tslint:disable-next-line:component-selector
    selector : 'tarea',
    templateUrl: 'tarea.component.html',
    styleUrls: ['tarea.component.css'],
    providers: [TareaService, ClienteService, UsuarioService, EstatusService, TipoService]


})

export class TareaComponent implements OnInit {


    public _opeTarea: opeTarea;
    public _opeTareas: Array<opeTarea> = [];
    public _nuevo: opeTarea;
/* Se agregan los objetos utilizados de los otros componentes*/
    public _catCliente: catCliente;
    public _catClientes: Array<catCliente> = [];

    public _catUsuario: catUsuario;
    public _catUsuarios: Array<catUsuario> = [];

    public _catEstTarea: catEstTarea;
    public _catEstTareas: Array<catEstTarea> = [];

    public _catTipoTarea: catTipoTarea;
    public _catTipoTareas: Array<catTipoTarea> = [];

    constructor( private router: Router,
                private _TareaService: TareaService,
                private _ClienteService: ClienteService,
                private _UsuarioService: UsuarioService,
                private _EstatusService: EstatusService,
                private _TipoService: TipoService


                ) {
        console.log('tarea Component');
        this._nuevo = new opeTarea (0, 0, '', '', '', null, null, null, 0 , 0 , 0);


}

    ngOnInit(): void {
        console.log('tarea.component.ts');
        this.lista();

        console.log('foor');
        this.listaClientes();

        console.log('usuarios');
        this.listaUsuarios();

        console.log('estatus');
        this.listaEstatus();

        console.log('tipotarea');
        this.listaTipo();


    }

    lista() {
        console.log('lista()');

        let respuesta, lista;
        this._opeTareas = [];


        this._TareaService.getLista().subscribe((result) => {
            // resultado

            respuesta = result.body;


            lista = respuesta.response.tt_opTarea.tt_opeTarea;


            lista.forEach(renglon => {

                // crea objeto
                this._opeTarea = new opeTarea(
                    renglon.iTarea,
                    renglon.iCliente,
                    renglon.cResponsable,
                    renglon.cDescripcion,
                    renglon.cNota,
                    renglon.dtCreacion,
                    renglon.dtModificacion,
                    renglon.dtTerminado,
                    renglon.iEstatus,
                    renglon.iUsuario,
                    renglon.iTipo

                );
               // guarda objeto en la lista
                this._opeTareas.push(this._opeTarea);
            });

        }, (error) => {
            // error

            alert(error);

        }); // service

    } // lista



    crear() {

        console.log('crear');
        console.log(this._nuevo.cResponsable);

        let respuesta;

        this._TareaService.crear(this._nuevo).subscribe((result) => {
            // guardo la respuesta en una variable del body

            respuesta = result.body;

        }, (error) => {

            alert (error);
        });
    }

    /*Metodo para la lista de clientes en formulario*/
    listaClientes() {
        console.log('listaClientes()');

        let respuesta, lista;
        this._catClientes = [];

        this._ClienteService.getLista().subscribe((result) => {

            respuesta = result.body;

            lista = respuesta.response.tt_ctCliente.tt_catCliente;

            lista.forEach(renglon => {

              //  console.log('renglo->' + renglon.cCliente);
                this._catCliente = new catCliente(
                    renglon.iCliente,
                    renglon.cCliente,
                    renglon.cRazonS,
                    renglon.lActivo
                );
                this._catClientes.push(this._catCliente);
            });

        }, (error) => {
            alert(error);
        });

        // return   this._catClientes;
    }


    listaUsuarios() {
        console.log('lista ()');
        let respuesta, lista;
        this._catUsuarios = [];

        this._UsuarioService.getLista().subscribe((result) => {

            respuesta = result.body;
            lista = respuesta.response.tt_ctUsuario.tt_catUsuario;

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

    listaEstatus () {
        console.log('lista()');

        let respuesta, lista;
        this._catEstTareas = [];

        this._EstatusService.getLista().subscribe((result) => {

            respuesta = result.body;

            lista = respuesta.response.tt_ctEstTarea.tt_catEstTarea;

            lista.forEach(renglon => {

                this._catEstTarea = new catEstTarea(
                    renglon.iEstatus,
                    renglon.cEstatus,
                    renglon.lActivo
                );
                this._catEstTareas.push(this._catEstTarea);
            });
        }, (error) => {
            alert(error);

        }); // service
    } // lista


    listaTipo() {
        console.log('lista()');

        let respuesta, lista;
        this._catTipoTareas = [];

        this._TipoService.getLista().subscribe((result) => {

            respuesta = result.body;
            lista = respuesta.response.tt_ctTipoTarea.tt_catTipoTarea;

            lista.forEach(renglon => {
                // Crea objeto
                this._catTipoTarea = new catTipoTarea (
                    renglon.iTipo,
                    renglon.cTipo,
                    renglon.lActivo
                );
                // guarda el objeto en la lista
                this._catTipoTareas.push(this._catTipoTarea);
                });

            }, (error) => {
                alert(error);
        });
    }


}


