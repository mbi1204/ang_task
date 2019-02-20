import {Injectable} from '@angular/core';
import { HttpClient , HttpHeaders } from '@angular/common/http';
import {opeTarea} from '../modelos/opeTarea';





@Injectable()
export class TareaService {


    constructor(public _http: HttpClient) {
    }

    headers: HttpHeaders  = new HttpHeaders({
        'AuthKey': '',
        'AuthToken': '',
        'Content-Type': 'application/json'
     });

    /*
        getLista
        Notas: Devuelve el listado de los tareas
    */

    getLista() {


         return this._http.get( '/taskService/opTarea',  {observe: 'response' ,  headers: this.headers });
    }

    crear(_opeTarea: opeTarea ) {
        const tt_Nuevo = [_opeTarea];
        const request = JSON.stringify ( {
            'request':
            {
                'NuevoSet': {'tt_Nuevo': tt_Nuevo }
            }
        });
        console.log(request);

        return this._http.post('/taskService/opTarea', request  , {observe: 'response', headers: this.headers});
    }

}



