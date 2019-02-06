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
    public _nuevo:ctCliente;

    constructor( private router: Router,
               private _ClienteService: ClienteService) {

        console.log("cliente Component");
        this._nuevo = new ctCliente(0,"","",true);

    }

    ngOnInit():void{

       console.log("cliente.component.ts");
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



crear() {

    console.log("crear");  

    var respuesta;
    
    this._ClienteService.crear(this._nuevo).subscribe((result) =>  {          
        //guardo la respuesta en una variable del body
        respuesta = result.body;   

    },(error)=>{

        alert (error);

    });

  
}

    /*
    eliminar(Id) {

        let respuesta;

       this._ClienteService.eliminar(Id).subscribe(response => {
        //respuesta = response.body;
        if(!response.body){
            alert('errorrrr');
        }

       },
       error =>
       
}*/

    }


