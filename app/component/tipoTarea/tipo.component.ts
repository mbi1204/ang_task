import {Component} from '@angular/core';
import {Router } from '@angular/router';
import {TipoService} from '../../service/tipo.service';
import {ctTipoTarea} from '../../modelos/ctTipoTarea';

@Component({
    selector :'tipo',
    templateUrl:'tipo.component.html',
    styleUrls: ['tipo.component.css'],
    providers: [TipoService]


})

export class TipoComponent {

    //Objetos
    public _ctTippoTarea:ctTipoTarea;
    public _ctTipoTareas:Array<ctTipoTarea> = [];

    constructor( private router: Router,
            private _TipoService: TipoService) {
        console.log("Tipo Usuario Component");

    }

    ngOnInit():void {
        this.lista();
    }


    lista() {
      /*  console.log("lista()");

        var respuesta, lista;
        this._ctTipoTareas = [];

        this._TipoService.getLista().subscribe((result) => {

            respuesta = result.body;
            lista = respuesta.response.tt_ctTipoTarea.tt_ctTipoTarea;

            lista.forEach(renglon => {
                //Crea objeto
                this._ctTippoTarea = new ctTipoTarea (
                    renglon.iTipo,
                    renglon.cTipo,
                    renglon.lActivo
                );
                //guarda el objeto en la lista
                this._ctTipoTareas.push(this._ctTippoTarea);
                
            }, (error) => {
                alert(error);
            });*/
        }
}
