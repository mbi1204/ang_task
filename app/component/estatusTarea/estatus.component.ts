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
    // atributos

    // crea objetos para la lista
    public _catEstTarea: catEstTarea;
    // lista del modelo
    public _catEstTareas: Array<catEstTarea> = [];
    // guarda la lista nueva
    public _nuevo: catEstTarea;

    constructor( private _EstatusService: EstatusService) {

        console.log('estatus Component');
        // crea la instancia de la lista vacia por defecto
        this._nuevo = new catEstTarea(0 , '' , true);


    }

    ngOnInit (): void {
    console.log('estatus.component.ts');
    this.lista();
    }

    lista() {
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
    }// lista


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


eliminar(iEstatus: string) {
    console.log('yaaa', iEstatus);
    let respuesta;
    this._EstatusService.eliminar(iEstatus).subscribe((result) =>  {
        // guardo la respuesta en una variable del body
        respuesta = result.body;
    }, (error) =>  {

        alert (error);

    }); // service

}

    refresh(): void {
      window.location.reload();
    }
}
