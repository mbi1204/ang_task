
import {Component} from '@angular/core';
import {Router } from '@angular/router';
import {TareaService } from '../../service/tarea.service';
import {opTarea} from '../../modelos/optarea';


@Component ({
    // tslint:disable-next-line:component-selector
    selector : 'tarea',
    templateUrl: 'tarea.component.html',
    styleUrls: ['tarea.component.css'],
    providers: [TareaService]



})

export class TareaComponent {

    public _opTarea:opTarea;
    public _opTareas:Array<opTarea> = [];

    constructor( private router: Router,
        private _TareaService: TareaService) {
 console.log("cliente Component");

}

    ngOnInit():void{
        this.lista();
    }

    lista(){
        console.log("lista()");

        var respuesta, lista;
        this._opTareas = [];


        this._TareaService.getLista().subscribe((result) => {
            //resultado


            respuesta = result.body;


            lista = respuesta.response.tt_opTarea.tt_opTarea;


            lista.forEach(renglon => {

                //crea objeto
                this._opTarea = new opTarea(
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
               //guarda objeto en la lista
                this._opTareas.push(this._opTarea);
            });

        }, (error) => { 
            //error

            alert(error);

        }); //service

    } //lista
}
