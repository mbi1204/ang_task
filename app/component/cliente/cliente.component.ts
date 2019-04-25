import { Component, OnInit } from '@angular/core';
import {Router } from '@angular/router';
import {ClienteService} from '../../service/cliente.service';
import { catCliente } from '../../modelos/catCliente';
import { catUsuario } from '../../modelos/catUsuario';

@Component({
    // tslint:disable-next-line:component-selector
    selector : 'cliente',
    templateUrl: 'cliente.component.html',
    styleUrls: ['cliente.component.css'],
    providers: [ClienteService]

})

export class ClienteComponent implements OnInit {
    ipcBusqueda: String;
    user: any ;
    ipcUsuario: string;

// atributos

    // crea objetos para la lista
    public _catCliente: catCliente;
    // lista del modelo
    public _catClientes: Array<catCliente> = [];
    // guarda la lista nueva
    public _nuevo: catCliente;

    public _catUsuario: catUsuario;


    constructor(private router: Router,
         private _ClienteService: ClienteService,
        ) {

        console.log('cliente Component');
        this._nuevo = new catCliente(0, '', '' , true);
        
    }

    ngOnInit(): void {

        console.log('cliente.component.ts');
        this.lista();

        /*2 Se guarda la funcion del localStorage en la variable user */
        this.user = JSON.parse(localStorage.getItem('miNombre'));

      /*1 Se trae el nombre del index(etiqueta) de setItem*/
      //  alert('miNombre' + localStorage.getItem('miNombre'));
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
            lista = respuesta.response.tt_catCliente.tt_catCliente;

            // itera la lista del rest para convertir en objetos type script
            lista.forEach(renglon => {

                // crea objeto
                this._catCliente = new catCliente(
                    renglon.iCliente,
                    renglon.cCliente,
                    renglon.cRazonS,
                    renglon.lActivo
                );
               // guarda objeto en la lista(array)
                this._catClientes.push(this._catCliente);
            });

        }, (error) => {
            // error

            alert(error);

        }); // service

    } // lista

    registro(iCliente: string) {
        console.log('lee registro' + iCliente);

        let respuesta, lista;

        this._ClienteService.getRegistro(iCliente).subscribe((result) => {
            respuesta = result.body;

            lista = respuesta.response.tt_catCliente.tt_catCliente;

            lista.forEach(renglon => {

                // crea objeto
                this._catCliente = new catCliente(
                    renglon.iCliente,
                    renglon.cCliente,
                    renglon.cRazonS,
                    renglon.lActivo
                );
                    console.log(this._catCliente.iCliente);
            });
        });
    }

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

    modificar () {
        let respuesta;
        this._ClienteService.modificar(this._catCliente).subscribe((result) => {
            respuesta = result.body;
        });

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

    busqueda() {

        let respuesta, lista;

        this._ClienteService.busqueda(this.ipcBusqueda).subscribe((result) => {

            respuesta = result.body;
            lista = respuesta.response.tt_catCliente.tt_catCliente;
            this._catClientes = []; // limpia la lista


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
        });
    }


    refresh(): void {
        window.location.reload();
        }

    }


