import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
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

    /*
        getRegistro, devueleve solo un solo regis
    */
    getRegistro(iEstatus: string) {
        const headers: HttpHeaders  = new HttpHeaders({
            'AuthKey': '',
            'AuthToken': '',
            'Content-Type': 'application/json',
         });
          const params = new HttpParams().append('ID', iEstatus);

        return this._http.get('/taskService/ctEstTarea-1/', { headers: headers, observe: 'response', params: params});
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

        console.log('iEstatus' + iEstatus);
        const headers: HttpHeaders = new HttpHeaders({
            'AuthKey': '',
            'AuthToken': '',
            'Content-Type': 'application/json',

         });
         // Se pasan los parametros(progres) por el params
         const params = new HttpParams().append('ID', iEstatus);

         return this._http.delete( '/taskService/ctEstTarea',  {headers: headers, observe: 'response' , params: params});
    }




}
