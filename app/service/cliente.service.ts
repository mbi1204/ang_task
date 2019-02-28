import {Injectable, ɵConsole} from '@angular/core';
import { HttpClient , HttpHeaders  , HttpParams} from '@angular/common/http';
import {catCliente} from '../modelos/catCliente';




@Injectable()
export class ClienteService {


    constructor(public _http: HttpClient) {
    }
    public _nuevo: catCliente;

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
    crear(_catCliente:  catCliente) {
        const tt_Nuevo = [_catCliente];
         const request = JSON.stringify({
            'request':
            {
               'NuevoSet': {'tt_Nuevo': tt_Nuevo }
            }
         });

         console.log(request);

         return this._http.post('/taskService/ctCliente', request , {observe: 'response', headers: this.headers});
    }


    /**
     * Modifica registro en la base de Batos
     */

    modificar() {


         return this._http.put( '/taskService/ctCliente',  {observe: 'response' , headers: this.headers });
    }

    /**
     * Elimina registro en la base de Datos
     */

    eliminar(iCliente: string) {

        console.log('eliminar');

        /*const headers = new HttpHeaders({
            'AuthKey': '',
            'AuthToken': '',
            'Content-Type': 'application/json',
            'ID': iCliente
         });*/
         const headers: HttpHeaders  = new HttpHeaders({
            'AuthKey': '',
            'AuthToken': '',
            'Content-Type': 'application/json' ,
         });

         const params = new HttpParams().append('ID', iCliente);


         return this._http.delete( '/taskService/ctCliente',    { headers: headers  , observe: 'response'  , params: params });


    }

}
