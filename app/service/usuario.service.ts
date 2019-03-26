import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { catUsuario } from '../modelos/catUsuario';

@Injectable()
export class UsuarioService {
    public _catusuario: catUsuario;
    public _catUsuarios: Array<catUsuario> = [];
    public tt_Nuevos: Array<catUsuario> = [];

    constructor(public _http: HttpClient) {
    }

    headers: HttpHeaders  = new HttpHeaders({
        'AuthKey': '',
        'AuthToken': '',
        'Content-Type': 'application/json'
     });


    postLogin( ipcUsuario, ipcPassword ) {
        const request  =   JSON.stringify({
            'request':
            {
                'ipcUsuario'   : ipcUsuario,
                'ipcPassword'  : ipcPassword
            }
          });

        return this._http.post( '/taskService/acceso', request, { observe: 'response'  , headers: this.headers });
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
    /*
        getRegistro, devueleve solo un solo regis
    */
   getRegistro(iUsuario: string) {
    const headers: HttpHeaders  = new HttpHeaders({
        'AuthKey': '',
        'AuthToken': '',
        'Content-Type': 'application/json',
     });
      const params = new HttpParams().append('ID', iUsuario);

    return this._http.get('/taskService/ctUsuario-1', { headers: headers, observe: 'response', params: params});
    }

    /**
     * Crear un registro en la base de Datos
     */
    crear(_catUsuario: catUsuario) {

        const tt_Nuevo = [_catUsuario];
         const request = JSON.stringify({
             'request':
             {
                 'NuevoSet': {'tt_Nuevo': tt_Nuevo }
             }
         });
         console.log(request);
         return this._http.post('/taskService/ctUsuario', request  , { observe: 'response', headers: this.headers});
    }
     /*
     * Actualiza un registro
     */
    modificar(_catUsuario: catUsuario) {
        const tt_Nuevo = [_catUsuario];
        const request = JSON.stringify({
            'request':
            {
                'NuevoSet': {'tt_Nuevo': tt_Nuevo}
            }
        });
        return this._http.put('/taskService/ctUsuario', request, {observe: 'response', headers: this.headers});

    }


    eliminar(iUsuario: string) {
        console.log('eliminame');

        const headers: HttpHeaders = new HttpHeaders ({
            'AuthKey': '',
            'AuthToken': '',
            'Content-Type': 'application/json'
        });

        const params = new HttpParams().append('ID', iUsuario);


        return this._http.delete( '/taskService/ctUsuario',    { headers: headers  , observe: 'response'  , params: params });
    }

    busqueda( ipcUsuario) {
        const request  =   JSON.stringify({
            'request':
            {
                'ipcBusqueda'   : ipcUsuario
            }
          });

        return this._http.post( '/taskService/ctUsuario-1', request, { observe: 'response'  , headers: this.headers });
        }

}
