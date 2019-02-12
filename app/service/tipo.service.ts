import {Injectable} from '@angular/core';
import {HttpClient , HttpHeaders } from '@angular/common/http';
import { catTipoTarea } from '../modelos/catTipoTarea';




@Injectable()
export class TipoService {
    public _catTipoTarea: catTipoTarea;
    public _catTipoTareas: Array<catTipoTarea> = [];
    public tt_Nuevos: Array<catTipoTarea> = [];
    headers: HttpHeaders | { [header: string]: string | string[]; };

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


         return this._http.get( '/taskService/catTipoTarea',  {observe: 'response' ,  headers: headers });
    }
 
    /**
     * Crear un registro en la base de Datos
     */

     crear(_catTipoTarea: catTipoTarea) {

        var tt_Nuevo = [_catTipoTarea];
        const request = JSON.stringify({
            "request":
            {
                "NuevoSet": {"tt_Nuevo": tt_Nuevo }
            }
        });

        console.log(request);

        return this._http.post('/taskService/catTipoTarea', request, {observe: 'response', headers: this.headers});
     }

}