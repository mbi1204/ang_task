import {Injectable} from '@angular/core';
import { HttpClient , HttpHeaders } from '@angular/common/http';
import {ctCliente} from '../modelos/ctCliente';





@Injectable()
export class ClienteService {
    public _ctCliente:ctCliente;
    public _ctClientes:Array<ctCliente> = []; 
    public tt_Nuevos:Array<ctCliente> = []; 
    
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

         return this._http.get( '/taskService/ctCliente',  {observe: 'response' ,  headers: this.headers });
    }


    /**
     * Crear un registro en la base de Datos
     */
    crear(_ctCliente:  ctCliente) {      
        
        var tt_Nuevo = [_ctCliente];
         const request = JSON.stringify({
            "request":
            {
               "NuevoSet": {"tt_Nuevo": tt_Nuevo }       
            }
         });

         console.log(request);
         
         return this._http.post('/taskService/ctCliente', request  ,{observe: 'response', headers: this.headers});
         

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

    /**
     * Trae Registro de la Base de Datos
     */
    getRegistro(){
        const headers = new HttpHeaders({
            'AuthKey': '',
            'AuthToken': '',
            'Content-Type': 'application/json'
         });

    }



}