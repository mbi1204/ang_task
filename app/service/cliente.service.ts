import {Injectable} from '@angular/core';
import { HttpClient , HttpHeaders } from '@angular/common/http';





@Injectable()
export class ClienteService {

    constructor(public _http: HttpClient) {
    }

    /*
        getLista  
        Notas: Devuelve el lsitado de los cliente
    */

    getLista(){
        const headers = new HttpHeaders({
            'AuthKey': '',
            'AuthToken': '',
            'Content-Type': 'application/json',
             'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Headers' : 'Origin, X-Requested-With, Content-Type, Accept'

            
         });
       
         
        
         return this._http.get( 'http://192.168.1.50:8810/task/rest/taskService/ctCliente',  {observe: 'response' ,  headers: headers });
                                
    }

}