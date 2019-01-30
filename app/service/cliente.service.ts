import {Injectable} from '@angular/core';
import { HttpClient , HttpHeaders } from '@angular/common/http';





@Injectable()
export class ClienteService {

    constructor(public _http: HttpClient) {
    }

    /*
        getLista
        Notas: Devuelve el lsitado de los cliente
    */

    getLista() {
        const headers = new HttpHeaders({
            'AuthKey': '',
            'AuthToken': '',
            'Content-Type': 'application/json'
         });


         return this._http.get( '/taskService/ctCliente',  {observe: 'response' ,  headers: headers });
    }

}