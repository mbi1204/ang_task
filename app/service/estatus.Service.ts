import {Injectable} from '@angular/core';
import { HttpClient , HttpHeaders } from '@angular/common/http';
import {catEstTarea } from '../modelos/catEstTarea';



@Injectable()
export class EstatusService {

    public _catEstTareas: Array<catEstTarea>  = [];
    public tt_Nuevos: Array<catEstTarea> = [];

    constructor(public _http: HttpClient) {
    }

    headers: HttpHeaders  = new HttpHeaders({
        'AuthKey': '',
        'AuthToken': '',
        'Content-Type': 'application/json'
     });
    /*
        getLista
        Notas: Devuelve el lsitado de los estatus
    */

    getLista() {

         return this._http.get( '/taskService/ctEstTarea',  {observe: 'response' ,  headers: this.headers });
    }

    /**
     * Crear un registro en la base de Datos
     */
    crear(_catEstTarea: catEstTarea) {

        const tt_Nuevo = [_catEstTarea];
        const request = JSON.stringify({
            'request':
            {
                'NuevoSet': {'tt_Nuevo': tt_Nuevo}
            }
        });

        console.log(request);

        return this._http.post('/taskService/ctEstTarea', request, { observe: 'response', headers: this.headers});
    }

    eliminar(iEstatus: string) {
        const headers = new HttpHeaders({
            'AuthKey': '',
            'AuthToken': '',
            'Content-Type': 'application/json',
            'ID': iEstatus,


         });
         return this._http.delete( '/taskService/ctEstTarea',  {observe: 'response' , headers: this.headers });


    }


}
