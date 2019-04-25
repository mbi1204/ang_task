import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute, Params } from '@angular/router';
import {SubtareaService} from '../../service/subtarea.service';
import { opeSubTarea } from '../../modelos/opeSubTarea';
import {TareaService } from '../../service/tarea.service';
import {opeTarea} from '../../modelos/opetarea';

@Component({
    selector : 'subtarea',
    templateUrl: 'subtarea.component.html',
    styleUrls: ['subtarea.component.css'],
    providers: [SubtareaService, TareaService]

})

export class SubtareaComponent implements OnInit {
    ipcBusqueda: String;
    miopeSubTarea: string;

    public _opeSubTarea: opeSubTarea;
    public _opeSubTareas: Array<opeSubTarea> = [];
    public _nuevo: opeSubTarea;

    public _opeTarea: opeTarea;
    public _opeTareas: Array<opeTarea> = [];


    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private _SubtareaService: SubtareaService,
        private _TareaService: TareaService, ) {

        console.log ('subtarea component');


    }

    ngOnInit(): void {

        console.log('subtarea.component.ts');

        this.route.params.subscribe(params => {
        if (params['iTarea'] != null) {
             this.miopeSubTarea = params['iTarea'];


        }
        // toma el valor miopeSubtarea para que inicialice con el valor de la subtarea
        this._nuevo = new opeSubTarea( Number(this.miopeSubTarea) , 0, '', '', null, null, null);


    });
        console.log(this.miopeSubTarea);
    // Se amnda llmar el metodo lista
        this.lista(this.miopeSubTarea);
    }


    lista(ID: string) {
        console.log('lista()' + ID);

        let respuesta, lista;
        this._opeSubTareas = [];

        this._SubtareaService.getLista(ID).subscribe((result) => {

            // guardo la respuesta en una variable del body
            respuesta = result.body;

            // guardo la lista en una variable
            lista = respuesta.response.tt_opeSubTarea.tt_opeSubTarea;

            lista.forEach(renglon => {

                // crea objeto
                this._opeSubTarea = new opeSubTarea(
                    renglon.iSubTarea,
                    renglon.iTarea,
                    renglon.cDescripcion,
                    renglon.cNotas,
                    renglon.dtCreado,
                    renglon.dtModificado,
                    renglon.dtTerminado

                );
               // guarda objeto en la lista
                this._opeSubTareas.push(this._opeSubTarea);
            });
    }, (error) => {
        // error
        alert(error);

    }); // service

} // lista


    /******Trae un solo registro*******/
    registro(iSubTarea: string) {
        console.log('lee registro' + iSubTarea);

        let respuesta, lista;

        this._SubtareaService.getRegistro(iSubTarea).subscribe((result) => {

            // guardo la respuesta en una variable del body
            respuesta = result.body;

            // guardo la lista en una variable
            lista = respuesta.response.tt_opeSubTarea.tt_opeSubTarea;

            lista.forEach(renglon => {

                // crea objeto
                this._opeSubTarea = new opeSubTarea(
                    renglon.iSubTarea,
                    renglon.iTarea,
                    renglon.cDescripcion,
                    renglon.cNotas,
                    renglon.dtCreado,
                    renglon.dtModificado,
                    renglon.dtTerminado

                );
                    console.log(this._opeSubTarea.iSubTarea);
            });
        });
    }



modificaSub() {
    let respuesta;

    this._SubtareaService.modificaSub(this._opeSubTarea).subscribe((result) => {
        respuesta = result.body;
    });

    console.log('modificar c'  + this._opeSubTarea.iSubTarea);
}


eliminar(iSubTarea: string) {

    let respuesta, Mensage;

    this._SubtareaService.eliminar(iSubTarea).subscribe((result) => {
        respuesta = result.body;
        Mensage = respuesta.response.opcMensage;
        console.log(Mensage);

    }, (error) => {

        alert (error);
    });
}

busqueda() {
    let respuesta, lista;

    this._SubtareaService.busqueda(this.ipcBusqueda).subscribe((result) => {

        respuesta = result.body;
        lista = respuesta.response.tt_opeSubTarea.tt_opeSubTarea;
        this._opeSubTareas = []; // limpia la lista


        lista.forEach(renglon => {

            // crea objeto
            this._opeSubTarea = new opeSubTarea(
                renglon.iSubTarea,
                renglon.iTarea,
                renglon.cDescripcion,
                renglon.cNotas,
                renglon.dtCreado,
                renglon.dtModificado,
                renglon.dtTerminado

            );
           // guarda objeto en la lista
            this._opeSubTareas.push(this._opeSubTarea);
        });

    }, (error) => {

        alert(error);

    }); // service

}



refresh(): void {
    window.location.reload();
    }

}
