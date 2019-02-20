import {Component} from '@angular/core';
import {Router } from '@angular/router';
import {SubtareaService} from '../../service/subtarea.service';
import { opeSubTarea } from '../../modelos/opeSubTarea';


@Component({
    selector :'subtarea',
    templateUrl:'subtarea.component.html',
    styleUrls: ['subtarea.component.css'],
    providers: [SubtareaService] 

})

export class SubtareaComponent {

    public _opeSubTarea: opeSubTarea;
    public _opeSubTareas: Array<opeSubTarea> = [];
    public _nuevo: opeSubTarea;


    constructor( private router: Router,
              private _SubtareaService: SubtareaService) {

        console.log ("subtarea component");
        this._nuevo = new opeSubTarea(0,0,"","",null,null,null);

    }

    ngOnInit(): void {
       
        console.log("subtarea.component.ts");
        this.lista();
    }

 
    lista() {
        console.log("lista()");

        var respuesta, lista;
        this._opeSubTareas = [];

        this._SubtareaService.getLista().subscribe((result) => {

            //guardo la respuesta en una variable del body
            respuesta = result.body;

            //guardo la lista en una variable 
            lista = respuesta.response.tt_opSubTarea.tt_opeSubTarea;

            lista.forEach(renglon => {

                //crea objeto
                this._opeSubTarea = new opeSubTarea(
                    renglon.iSubTarea,
                    renglon.iTarea,
                    renglon.cDescripcion,
                    renglon.cNotas,
                    renglon.dtCreado,
                    renglon.dtModificado,
                    renglon.dtTerminado

                );
               //guarda objeto en la lista
                this._opeSubTareas.push(this._opeSubTarea);
            });
    }, (error) => {
        //error
        alert(error);

    });//service

  }//lista
  



  crear() {

    console.log("crear");  

    var respuesta;
    
    this._SubtareaService.crear(this._nuevo).subscribe((result) =>  {
        //guardo la respuesta en una variable del body
        respuesta = result.body;   

    }, (error) => {

        alert (error);

    });//service
}

refresh(): void {
    window.location.reload();
    }

}
