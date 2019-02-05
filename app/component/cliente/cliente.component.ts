import {Component} from '@angular/core';
import {Router } from '@angular/router';
import {ClienteService} from '../../service/cliente.service';
import {ctCliente} from '../../modelos/ctCliente';


@Component({
    selector :'cliente',
    templateUrl:'cliente.component.html',
    styleUrls: ['cliente.component.css'],
    providers: [ClienteService]

})

export class ClienteComponent {   

    //Objetos
    public _ctCliente:ctCliente;
    public _ctClientes:Array<ctCliente> = []; 

    constructor( private router: Router,
               private _ClienteService: ClienteService) {
        console.log("cliente Component");

    }

    ngOnInit():void{
        this.lista();
    }



    lista(){
        console.log("lista()");

        var respuesta, lista;
        this._ctClientes = [];

        //servicio rest (resultado , error)
        this._ClienteService.getLista().subscribe((result) => {
            //resultado

            //guardo la respuesta en una variable del body
            respuesta = result.body;          

            //guardo la lista en una variable 
            lista = respuesta.response.tt_ctCliente.tt_ctCliente;

            // itera la lista del rest para convertir en objetos type script
            lista.forEach(renglon => {

                //crea objeto
                this._ctCliente = new ctCliente(
                    renglon.iCliente,
                    renglon.cCliente,
                    renglon.cRazonS,
                    renglon.lActivo
                );               
               //guarda objeto en la lista
                this._ctClientes.push(this._ctCliente);
            });

        }, (error) => { 
            //error

            alert(error);

        }); //service

    } //lista

    

}