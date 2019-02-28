import {Component, OnInit} from '@angular/core';
import {Router } from '@angular/router';
import {TipoService} from '../../service/tipo.service';
import { catTipoTarea } from '../../modelos/catTipoTarea';

@Component({
    selector : 'tipo',
    templateUrl: 'tipo.component.html',
    styleUrls: ['tipo.component.css'],
    providers: [TipoService]

 
})

export class TipoComponent {

    // Objetos
    public _catTipoTarea: catTipoTarea;
    public _catTipoTareas: Array<catTipoTarea> = [];
    public _nuevo: catTipoTarea;

    constructor( private router: Router,
            private _TipoService: TipoService) {

        console.log('Tipo Usuario Component');
        this._nuevo = new catTipoTarea(0, '', true);

    }

    ngOnInit (): void {
        this.lista();
    }


    lista() {
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

    crear() {

        console.log('crear');
        console.log(this._nuevo.cTipo);

        let respuesta;

        this._TipoService.crear(this._nuevo).subscribe((result) =>  {
            // guardo la respuesta en una variable del body
            respuesta = result.body;

        }, (error) => {

            alert (error);

        }); // service
    }

    eliminar(iTipo: string) {
        let respuesta, Mensage;

        this._TipoService.eliminar(iTipo).subscribe((result) => {
            respuesta = result.body;
            Mensage = respuesta.response.opcMensage;
            console.log(Mensage);

        }, (error) => {

            alert (error);
        });
    }

    refresh(): void {
        window.location.reload();
    }

}
