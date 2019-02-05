import {Injectable} from '@angular/core';
import { HttpClient , HttpHeaders } from '@angular/common/http';





@Injectable()
export class TareaService {

    constructor(public _http: HttpClient) {
    }

    /*
        getLista
        Notas: Devuelve el listado de los tareas
    */

    getLista() {
        const headers = new HttpHeaders({
            'AuthKey': '',
            'AuthToken': '',
            'Content-Type': 'application/json'
         });


         return this._http.get( '/taskService/opTarea',  {observe: 'response' ,  headers: headers });
    }

}