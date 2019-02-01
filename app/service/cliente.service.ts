import {Injectable} from '@angular/core';
import { HttpClient , HttpHeaders } from '@angular/common/http';
import {ctCliente} from '../modelos/ctCliente';





@Injectable()
export class ClienteService {
    public _ctCliente:ctCliente;
    public _ctClientes:Array<ctCliente> = []; 
    
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
    crear(){
        const headers = new HttpHeaders({
            'AuthKey': '',
            'AuthToken': '',
            'Content-Type': 'application/json'
         });

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


    eliminar(){
        const headers = new HttpHeaders({
            'AuthKey': '',
            'AuthToken': '',
            'Content-Type': 'application/json'
         });

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