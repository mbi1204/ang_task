import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
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

    /*
        getRegistro, devueleve solo un solo regis
    */
   getRegistro(iTipo: string) {
    const headers: HttpHeaders  = new HttpHeaders({
        'AuthKey': '',
        'AuthToken': '',
        'Content-Type': 'application/json',
     });
      const params = new HttpParams().append('ID', iTipo);

    return this._http.get('/taskService/ctTipoTarea-1/', { headers: headers, observe: 'response', params: params});
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
     /*
     * Actualiza un registro
     */
     modificar(_catTipoTarea: catTipoTarea) {
         // Se pasa el parametro
        const tt_Nuevo = [_catTipoTarea];
        const request = JSON.stringify({
            'request':
            {
                'NuevoSet': {'tt_Nuevo': tt_Nuevo}
            }
        });
        return this._http.put('/taskService/ctTipoTarea', request, {observe: 'response', headers: this.headers});

    }


     eliminar(iTipo: string) {

        console.log('iTipo' + iTipo);

        const headers: HttpHeaders = new HttpHeaders({
            'AuthKey': '',
            'AuthToken': '',
            'Content-Type': 'application/json'
        });

        const params = new HttpParams().append('ID', iTipo);

        return this._http.delete('/taskService/ctTipoTarea', {headers: headers, observe: 'response', params: params});
    }

}
