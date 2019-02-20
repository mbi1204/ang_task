import {Injectable} from '@angular/core';
import {HttpClient , HttpHeaders } from '@angular/common/http';
import { catTipoTarea } from '../modelos/catTipoTarea';




@Injectable()
export class TipoService {



    constructor(public _http: HttpClient) {
    }

        headers = new HttpHeaders({
        'AuthKey': '',
        'AuthToken': '',
        'Content-Type': 'application/json'
     });
    /*
        getLista
        Notas: Devuelve el lsitado de los cliente
    */

    getLista() {

         return this._http.get( '/taskService/ctTipoTarea',  {observe: 'response' ,  headers: this.headers });
    }

    /**
     * Crear un registro en la base de Datos
     */

     crear(_catTipoTarea: catTipoTarea) {

        const tt_Nuevo = [_catTipoTarea];
        const request = JSON.stringify({
            'request':
            {
                'NuevoSet': {'tt_Nuevo': tt_Nuevo }
            }
        });

        console.log(request);

        return this._http.post('/taskService/ctTipoTarea', request, {observe: 'response', headers: this.headers});
     }

}
