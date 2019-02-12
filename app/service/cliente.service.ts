import {Injectable} from '@angular/core';
import { HttpClient , HttpHeaders } from '@angular/common/http';
import {catCliente} from '../modelos/catCliente';



 

@Injectable()
export class ClienteService {
    public _catCliente:catCliente;
    public _catClientes:Array<catCliente> = []; 
    public tt_Nuevos:Array<catCliente> = []; 
    
    constructor(public _http: HttpClient) {
    }

     headers: HttpHeaders  = new HttpHeaders({
        'AuthKey': '',
        'AuthToken': '',
        'Content-Type': 'application/json'
     });

    /*
        getLista
        Notas: Devuelve el lsitado de los cliente
    */

    getLista() {

         return this._http.get( '/taskService/catCliente',  {observe: 'response' ,  headers: this.headers });
    }


    /**
     * Crear un registro en la base de Datos
     */
    crear(_catCliente:  catCliente) {
        
        var tt_Nuevo = [_catCliente];
         const request = JSON.stringify({
            "request":
            {
               "NuevoSet": {"tt_Nuevo": tt_Nuevo }
            }
         });

         console.log(request);
         
         return this._http.post('/taskService/catCliente', request  ,{observe: 'response', headers: this.headers});
         

    }

    
    /**
     * Modifica registro en la base de Batos
     */

    modificar(){
        const headers = new HttpHeaders({
            'AuthKey': '',
            'AuthToken': '',
            'Content-Type': 'application/json'
         });
         return this._http.put( '/taskService/catCliente', {observe: 'response' , headers: this.headers });


    } 

    /**
     * Elimina registro en la base de Datos
     */


    eliminar(Id: number) {
        const headers = new HttpHeaders({
            'AuthKey': '',
            'AuthToken': '',
            'Content-Type': 'application/json'

         });
         return this._http.delete( '/taskService/ctCliente', {observe: 'response' , headers: this.headers });


    }

}