import {Injectable} from '@angular/core';
import { HttpClient , HttpHeaders } from '@angular/common/http';


@Injectable()
export class UsuarioService {

    constructor(public _http: HttpClient) {
    }

    /*
        getLista
        Notas: Devuelve el listado de los usuarios
    */

    getLista() {
        const headers = new HttpHeaders({
            'AuthKey': '',
            'AuthToken': '',
            'Content-Type': 'application/json'
         });


         return this._http.get( '/taskService/ctUsuario',  {observe: 'response' ,  headers: headers });
    }

}