import {Injectable} from '@angular/core';
import { HttpClient , HttpHeaders } from '@angular/common/http';
import { opeSubTarea } from '../modelos/opeSubTarea';



 

@Injectable()
export class SubtareaService {
    public _opeSubTarea: opeSubTarea;
    public _opeSubTareas: Array<opeSubTarea> = [];
    public tt_Nuevos: Array<opeSubTarea> = [];


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
        return this._http.get('/taskService/opSubTarea', {observe: 'response', headers: this.headers});
    }

    /**
     * Crear un registro en la base de Datos
     */

     crear(_opeSubTarea: opeSubTarea) {
         var tt_Nuevo =[_opeSubTarea];
         const request = JSON.stringify({
            "request":
            {
               "NuevoSet": {"tt_Nuevo": tt_Nuevo }
            }
         });

         console.log(request);

         return this._http.post('/taskService/opSubTarea', request, {observe: 'response', headers: this.headers});
     }

}