import {Component} from '@angular/core';
import {Router } from '@angular/router';
import {EstatusService} from '../../service/estatus.service';
import { catEstTarea } from '../../modelos/catEstTarea';


@Component({
    selector :'estatus',
    templateUrl:'estatus.component.html',
    styleUrls: ['estatus.component.css'],
    providers: [EstatusService]

})

export class EstatusComponent {
    //objetos
    public _catEstTarea: catEstTarea;
    public _catEstTareas: Array<catEstTarea> = [];
    public _nuevo: catEstTarea;

    constructor( private router: Router,
        private _EstatusService: EstatusService) {

        console.log("estatus Component");
        this._nuevo = new catEstTarea(0,"",true);


    }

    ngOnInit(): void {
        this.lista();
    }

    lista() {
        console.log("lista()");

        var respuesta, lista;
        this._catEstTareas= [];

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

        });//service
    }//lista


    crear() {
        console.log("crear");

        var respuesta;

        this._EstatusService.crear(this._nuevo).subscribe((result) =>  {
            respuesta = result.body;

        }, (error) => {

            alert (error);
        });//service
    }

    refresh(): void {
        window.location.reload();
    }
}