import {Component} from '@angular/core';
import {Router } from '@angular/router';
import {ClienteService} from '../../service/cliente.service';


@Component({
    selector :'cliente',
    templateUrl:'cliente.component.html',
    styleUrls: ['cliente.component.css'],
    providers: [ClienteService]

})

export class ClienteComponent {
    numbers = new Array(5);

    constructor( private router: Router,
               private _ClienteService: ClienteService) {
        console.log("cliente Component");

    }


    lista(){
        console.log("lista()");

        var respuesta, lista;

        this._ClienteService.getLista().subscribe((result) => { 
            console.log( "body " + result.body);
            
            respuesta = result.body;

            console.log( "oplError " +  respuesta.response.oplError);
            console.log( "opcMensage" + respuesta.response.opcMensage);

            lista = respuesta.response.tt_ctCliente.tt_ctCliente;
                    
            lista.forEach(renglon =>{ 
                console.log ("renglon.iCliente" + renglon.iCliente); 
                console.log ("renglon.cCliente" + renglon.cCliente); 
                
                
                /*this._ctGrupo = new ctGrupo(
                item.cCveCia,
                item.iGrupoID,
                item.cDescripcion,
                item.cImagen,
                item.lActivo,
                item.dtCreado,
                item.dtModificado,
                item.cUsuario,
                item.iColor  ); */
            });




        }, (error) => { 
            console.log("error");

            alert(error);
            console.log(error);
        }); //service

    } //lista
}