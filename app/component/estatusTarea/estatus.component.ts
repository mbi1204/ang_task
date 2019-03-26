import { Component, OnInit } from '@angular/core';
import {Router } from '@angular/router';
import {EstatusService} from '../../service/estatus.service';
import { catEstTarea } from '../../modelos/catEstTarea';


@Component({
    selector : 'estatus',
    templateUrl: 'estatus.component.html',
    styleUrls: ['estatus.component.css'],
    providers: [EstatusService]

})

export class EstatusComponent implements OnInit {
   ipcBusqueda: String;

    // atributos

    // crea objetos para la lista
    public _catEstTarea: catEstTarea;
    // lista del modelo
    public _catEstTareas: Array<catEstTarea> = [];
    // guarda la lista nueva
    public _nuevo: catEstTarea;
    // public _nuevoReg: catEstTarea;

    constructor( private _EstatusService: EstatusService) {

        console.log('estatus Component');
        // crea la instancia de la lista vacia por defecto
        this._nuevo = new catEstTarea(0 , '' , true);
        // this._nuevoReg = new catEstTarea (0, '', true);

    }


    ngOnInit (): void {
    console.log('estatus.component.ts');
    this.lista();
    }

    lista() {
        console.log('lista()');

        let respuesta, lista;
        // limpia al mostrar
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
    }// lista


    /*Trae un solo registro*/
    registro(iEstatus: string)  {
        console.log('leee registro' + iEstatus );

        let respuesta, lista;
      //  this._catEstTareas = [];

        // Se pasa el parametro
        this._EstatusService.getRegistro(iEstatus).subscribe((result) => {

            respuesta = result.body;

            lista = respuesta.response.tt_catEstTarea.tt_catEstTarea;

            lista.forEach(renglon => {

                this._catEstTarea = new catEstTarea(
                    renglon.iEstatus,
                    renglon.cEstatus,
                    renglon.lActivo
                );

                console.log(this._catEstTarea.iEstatus);
                console.log(this._catEstTarea.cEstatus);
               // this._catEstTareas.push(this._catEstTarea);
            });
        }, (error) => {
            alert(error);

        }); // service


        console.log('fin'  + this._catEstTarea.iEstatus);
        console.log(''    +  this._catEstTarea.cEstatus);

    }


    crear() {
        console.log('crear');

        console.log(this._nuevo.cEstatus);

        let respuesta;

        this._EstatusService.crear(this._nuevo).subscribe((result) =>  {
            respuesta = result.body;

        }, (error) => {

            alert (error);
        }); // service
    }

    /* Actualiza los registros del fomulario*/
    modificar () {
        let respuesta;

        this._EstatusService.modificar(this._catEstTarea).subscribe((result) => {
            respuesta = result.body;
        });
        console.log('modificar c'  + this._catEstTarea.iEstatus);
        console.log(''    +  this._catEstTarea.cEstatus);

    }


    eliminar(iEstatus: string) {
        console.log('yaaa', iEstatus);
        let respuesta, Mensage;
        this._EstatusService.eliminar(iEstatus).subscribe((result) =>  {
            // guardo la respuesta en una variable del body
            respuesta = result.body;
            Mensage = respuesta.response.opcMensage;

        }, (error) =>  {

            alert (error);

        }); // service

}

busqueda() {
    let respuesta, lista;

    this._EstatusService.busqueda(this.ipcBusqueda).subscribe((result) => {

        respuesta = result.body;
        lista = respuesta.response.tt_catEstTarea.tt_catEstTarea;
        this._catEstTareas = []; // limpia al mostrar


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
}


    refresh(): void {
      window.location.reload();
    }
}
