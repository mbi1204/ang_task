import {Injectable} from '@angular/core';
import { HttpClient , HttpHeaders, HttpParams  } from '@angular/common/http';
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
        Notas: Devuelve el listado de la subtarea
    */

    getLista(ID) {
        const headers: HttpHeaders  = new HttpHeaders({
            'AuthKey': '',
            'AuthToken': '',
            'Content-Type': 'application/json'
         });


        const params = new HttpParams().append('ID', ID);

        return this._http.get('/taskService/opSubTarea', { headers: headers, observe: 'response', params: params});
    }


    /*
        getRegistro
        Notas: Devuelve el un solo regiistro
    */

    getRegistro(iSubTarea: string) {
        const headers: HttpHeaders  = new HttpHeaders({
            'AuthKey': '',
            'AuthToken': '',
            'Content-Type': 'application/json',
         });
         // Se psan los parametros como en el prog..
         const params = new HttpParams().append('ID', iSubTarea);

        return this._http.get('/taskService/opSubTarea-1/', { headers: headers, observe: 'response', params: params});
    }

    /**
    * Crear un registro en la base de Datos
    */

   crearSub(_opeSubTarea: opeSubTarea) {

    const tt_Nuevo = [_opeSubTarea];
     const request = JSON.stringify({
         'request':
         {
             'NuevoSet': {'tt_Nuevo': tt_Nuevo }
         }
     });
     console.log(request); // imprime el elllenado de la repsuesta
     return this._http.post('/taskService/opSubTarea', request  , { observe: 'response', headers: this.headers});
}

    /**
     * Modifica registro en la base de Datoss
    */
    modificaSub(_opeSubTarea:  opeSubTarea) {
        const tt_Nuevo = [_opeSubTarea];
        const request = JSON.stringify({
            'request':
            {
                'NuevoSet': {'tt_Nuevo': tt_Nuevo}
            }
        });
        return this._http.put('/taskService/opSubTarea', request, {observe: 'response', headers: this.headers});

    }

    /**
     * Elimina registro en la base de Datos
     */

    eliminar(iSubTarea: string) {


        console.log('ID' + iSubTarea);

         const headers: HttpHeaders  = new HttpHeaders({
            'AuthKey': '',
            'AuthToken': '',
            'Content-Type': 'application/json'
         });


        const params = new HttpParams().append('ID', iSubTarea);

         return this._http.delete( '/taskService/opSubTarea',    { headers: headers  , observe: 'response'  , params: params });

    }

    busqueda( ipcDecripcion) {
        const request  =   JSON.stringify({
            'request':
            {
                'ipcBusqueda'   : ipcDecripcion
            }
          });

        return this._http.post( '/taskService/opSubTarea-1', request, { observe: 'response'  , headers: this.headers });
        }



}
