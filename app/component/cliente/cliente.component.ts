import {Component} from '@angular/core';
import {Router } from '@angular/router';
import {ClienteService} from '../../service/cliente.service';
import { catCliente } from '../../modelos/catCliente';


@Component({
    // tslint:disable-next-line:component-selector
    selector : 'cliente',
    templateUrl: 'cliente.component.html',
    styleUrls: ['cliente.component.css'],
    providers: [ClienteService]

})

export class ClienteComponent {
// atributos

    // crea objetos para la lista
    public _catCliente: catCliente;
    // lista del modelo
    public _catClientes: Array<catCliente> = [];
    // guarda la lista nueva
    public _nuevo: catCliente;

    constructor( private _ClienteService: ClienteService) {

        console.log('cliente Component');
        this._nuevo = new catCliente(0, '', '' , true);

    }

    ngOnInit(): void {

       console.log('cliente.component.ts');
       this.lista();

    }



    lista() {
        console.log('lista()');

        let respuesta, lista;
        this._catClientes = [];

        // servicio rest (resultado , error)
        this._ClienteService.getLista().subscribe((result) => {
            // resultado

            // guardo la respuesta en una variable del body
            respuesta = result.body;

            // guardo la lista en una variable y se agrega la respuesta tt_ctCliente del postman
            lista = respuesta.response.tt_ctCliente.tt_catCliente;

            // itera la lista del rest para convertir en objetos type script
            lista.forEach(renglon => {

                // crea objeto
                this._catCliente = new catCliente(
                    renglon.iCliente,
                    renglon.cCliente,
                    renglon.cRazonS,
                    renglon.lActivo
                );
               // guarda objeto en la lista
                this._catClientes.push(this._catCliente);
            });

        }, (error) => {
            // error

            alert(error);

        }); // service

    } // lista



crear() {

    console.log('crear');

    let respuesta;

    this._ClienteService.crear(this._nuevo).subscribe((result) =>  {
        // guardo la respuesta en una variable del body
        respuesta = result.body;
    }, (error) => {

        alert (error);

    }); // service
}


eliminar(iCliente: string) {
    console.log('yaaa', iCliente);

    // tslint:disable-next-line:prefer-const
    let respuesta, Mensage;
    this._ClienteService.eliminar(iCliente).subscribe((result) =>  {
        // guardo la respuesta en una variable del body
        respuesta = result.body;
        Mensage = respuesta.response.opcMensage;

        console.log(Mensage);
    }, (error) =>  {

        alert (error);

    }); // service

}

refresh(): void {
    window.location.reload();
}

    }


