
import {Component} from '@angular/core';
import {Router } from '@angular/router';
import {TareaService } from '../../service/tarea.service';
import {opeTarea} from '../../modelos/opetarea';


@Component ({
    // tslint:disable-next-line:component-selector
    selector : 'tarea',
    templateUrl: 'tarea.component.html',
    styleUrls: ['tarea.component.css'],
    providers: [TareaService]


    


})

export class TareaComponent {


    
    public _opeTarea:opeTarea;
    public _opeTareas:Array<opeTarea> = [];
    public _nuevo:opeTarea;


    constructor( private router: Router,
                private _TareaService: TareaService) {
        
        console.log("tarea Component");
        this._nuevo = new opeTarea (0,0,"","","",null,null,null,0,0,0);

}

    ngOnInit():void{
        console.log("tarea.component.ts");
        this.lista();
    }

    lista(){
        console.log("lista()");

        var respuesta, lista;
        this._opeTareas = [];


        this._TareaService.getLista().subscribe((result) => {
            //resultado

            respuesta = result.body;


            lista = respuesta.response.tt_opeTarea.tt_opeTarea;


            lista.forEach(renglon => {

                //crea objeto
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
               //guarda objeto en la lista
                this._opeTareas.push(this._opeTarea);
            });

        }, (error) => {
            //error

            alert(error);

        }); //service

    } //lista

    crear() {

        console.log("crear");

        var respuesta;

        this._TareaService.crear(this._nuevo).subscribe((result) => {
            //guardo la respuesta en una variable del body

            respuesta = result.body;

        }, (error) => {

            alert (error);
        });
    }


}



