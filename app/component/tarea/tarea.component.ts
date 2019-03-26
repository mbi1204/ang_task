
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
import { FormGroup, FormBuilder } from '@angular/forms';



@Component ({
    // tslint:disable-next-line:component-selector
    selector : 'tarea',
    templateUrl: 'tarea.component.html',
    styleUrls: ['tarea.component.css'],
    providers: [TareaService, ClienteService, UsuarioService, EstatusService, TipoService]


})

export class TareaComponent implements OnInit {
    ipcBusqueda: String;

// atributos

    // crea objetos para la lista
    public _opeTarea: opeTarea;
    // lista del modelo
    public _opeTareas: Array<opeTarea> = [];
    // guarda la lista nueva
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
                private _TipoService: TipoService,
              


                ) {
        console.log('tarea Component');
        // Instancia el  objeto
        this._nuevo = new opeTarea (0, 0, '', '', '', null, null, null, 0 , 0 , 0, '', null, null, '', 0  );

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
        // limpia la lista
        this._opeTareas = [];


        this._TareaService.getLista().subscribe((result) => {
            // resultado

            respuesta = result.body;

            lista = respuesta.response.tt_opeTarea.tt_opeTarea;


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
                    renglon.iTipo,
                    renglon.cActividad,
                    renglon.dtSolicitud,
                    renglon.dtInicio,
                    renglon.cSolicitante,
                    renglon.deAvance

                );
               // guarda objeto en la lista
                this._opeTareas.push(this._opeTarea);
            });

        }, (error) => {
            // error

            alert(error);

        }); // service

    } // lista

    /******Trae un solo registro*******/
    registro(iTarea: string) {
        console.log('lee registro' + iTarea);

        let respuesta, lista;

        this._TareaService.getRegistro(iTarea).subscribe((result) => {
            respuesta = result.body;

            lista = respuesta.response.tt_opeTarea.tt_opeTarea;

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
                    renglon.iTipo,
                    renglon.cActividad,
                    renglon.dtSolicitud,
                    renglon.dtInicio,
                    renglon.cSolicitante,
                    renglon.deAvance

                );
                    console.log(this._opeTarea.iTarea);
            });
        });
    }



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

    /********Metodo para la lista de clientes en formulario*********/
    listaClientes() {
        console.log('listaClientes()');

        let respuesta, lista;
        this._catClientes = [];

        this._ClienteService.getLista().subscribe((result) => {

            respuesta = result.body;

            lista = respuesta.response.tt_catCliente.tt_catCliente;

            lista.forEach(renglon => {

              //  console.log('renglon->' + renglon.cCliente);
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

    /*****Metodo para la lista de usuarios en formulario******/
    listaUsuarios() {
        console.log('lista ()');
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

    /*****Metodo para la lista de estatus en formulario********/
    listaEstatus () {
        console.log('lista()');

        let respuesta, lista;
        this._catEstTareas = [];

        this._EstatusService.getLista().subscribe((result) => {

            respuesta = result.body;

            lista = respuesta.response.tt_catEstTarea.tt_catEstTarea;

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

    /*******Metodo para la lista de tipo de tareas en formulario*******/
    listaTipo() {
        console.log('lista()');

        let respuesta, lista;
        this._catTipoTareas = [];

        this._TipoService.getLista().subscribe((result) => {

            respuesta = result.body;
            lista = respuesta.response.tt_catTipoTarea.tt_catTipoTarea;

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

    /*****Actualiza los registros del fomulario******/
    modificar () {
        let respuesta;

        this._TareaService.modificar(this._opeTarea).subscribe((result) => {
            respuesta = result.body;
        });

        console.log('modificar c'  + this._opeTarea.iTarea);
    }


    eliminar(iTarea: string) {

        let respuesta, Mensage;

        this._TareaService.eliminar(iTarea).subscribe((result) => {
            respuesta = result.body;
            Mensage = respuesta.response.opcMensage;
            console.log(Mensage);

        }, (error) => {

            alert (error);
        });
    }


    busqueda() {
        let respuesta, lista;

        this._TareaService.busqueda(this.ipcBusqueda).subscribe((result) => {

            respuesta = result.body;
            lista = respuesta.response.tt_opeTarea.tt_opeTarea;
            this._opeTareas = []; // limpia la lista


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
                    renglon.iTipo,
                    renglon.cActividad,
                    renglon.dtSolicitud,
                    renglon.dtInicio,
                    renglon.cSolicitante,
                    renglon.deAvance

                );
               // guarda objeto en la lista
                this._opeTareas.push(this._opeTarea);
            });

        }, (error) => {

            alert(error);

        }); // service

    }

 

    refresh(): void {
        window.location.reload();
    }
}
