import {Component} from '@angular/core';
import {Router } from '@angular/router';
import {EstatusService} from '../../service/estatus.service';
import {ctEstTarea} from '../../modelos/ctEstTarea';

@Component({
    selector :'estatus',
    templateUrl:'estatus.component.html',
    styleUrls: ['estatus.component.css'],
    providers: [EstatusService]

})

export class EstatusComponent {
    //objetos
    public _ctEstTarea:ctEstTarea;
    public _ctEstTareas: Array<ctEstTarea> = []

    constructor( private router: Router,
                private _EstatusService: EstatusService) {
        console.log("estatus Component");

    }

    ngOnInit(): void {
        this.lista();
    }

    lista() {
        console.log("lista()");

        var respuesta, lista;
        this._ctEstTareas = [];

        this._EstatusService.getLista().subscribe((result) => {

            respuesta = result.body;

            lista = respuesta.response.tt_ctEstTarea.tt_ctEstTarea;

            lista.forEach(renglon => {

                this._ctEstTarea = new ctEstTarea(
                    renglon.iEstatus,
                    renglon.cEstatus,
                    renglon.lActivo
                );
                this._ctEstTareas.push(this._ctEstTarea);
            });
        }, (error) => {
            alert(error);

        });
    }
}