import {Component} from '@angular/core';
import {Router } from '@angular/router';
import {ClienteService} from '../../service/cliente.service';
import { catCliente } from '../../modelos/catCliente';


@Component({
    selector :'cliente',
    templateUrl:'cliente.component.html',
    styleUrls: ['cliente.component.css'],
    providers: [ClienteService]

})

export class ClienteComponent {   
  
  
    //Objetos
    public _catCliente:catCliente;
    public _catClientes:Array<catCliente> = [];
    public _nuevo:catCliente;

    constructor( private router: Router,
               private _ClienteService: ClienteService) {

        console.log("cliente Component");
        this._nuevo = new catCliente(0,"","",true);

    }

    ngOnInit():void{ 

       console.log("cliente.component.ts");
       this.lista();

       
    }



    lista(){
        console.log("lista()");

        var respuesta, lista;
        this._catClientes = [];

        //servicio rest (resultado , error)
        this._ClienteService.getLista().subscribe((result) => {
            //resultado

            //guardo la respuesta en una variable del body
            respuesta = result.body;          

            //guardo la lista en una variable 
            lista = respuesta.response.tt_catCliente.tt_catCliente;

            // itera la lista del rest para convertir en objetos type script
            lista.forEach(renglon => {

                //crea objeto
                this._catCliente = new catCliente(
                    renglon.iCliente,
                    renglon.cCliente,
                    renglon.cRazonS,
                    renglon.lActivo
                );               
               //guarda objeto en la lista
                this._catClientes.push(this._catCliente);
            });

        }, (error) => { 
            //error

            alert(error);

        }); //service

    } //lista



crear() {

    console.log("crear");  

    var respuesta;
    
    this._ClienteService.crear(this._nuevo).subscribe((result) =>  {
        //guardo la respuesta en una variable del body
        respuesta = result.body;   

    },(error)=>{

        alert (error);

    });//service
}
refresh(): void {
    window.location.reload();
}

    }


