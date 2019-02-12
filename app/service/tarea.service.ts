import {Injectable} from '@angular/core';
import { HttpClient , HttpHeaders } from '@angular/common/http';
import {opeTarea} from '../modelos/opeTarea';





@Injectable()
export class TareaService {
    public _opeTarea: opeTarea;
    public _opeTareas: Array<opeTarea> = [];
    public tt_Nuevo: opeTarea;
    headers: HttpHeaders | { [header: string]: string | string[]; };

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


         return this._http.get( '/taskService/opeTarea',  {observe: 'response' ,  headers: headers });
    }

    crear(_opeTarea: opeTarea ) {
        var tt_Nuevo = [_opeTarea];
        const request = JSON.stringify ( {
            "request":
            {
                "NuevoSet": {"tt_Nuevo": tt_Nuevo }
            }
        });
        console.log(request);

        return this._http.post('/taskService/opeTarea', request  , {observe: 'response', headers: this.headers});
    }

}



