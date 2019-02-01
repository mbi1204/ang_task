import {Injectable} from '@angular/core';
import { HttpClient , HttpHeaders } from '@angular/common/http';





@Injectable()
export class TipoService {

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


         return this._http.get( '/taskService/ctTipoTarea',  {observe: 'response' ,  headers: headers });
    }

}