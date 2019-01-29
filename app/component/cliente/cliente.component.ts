import {Component} from '@angular/core';
import {Router } from '@angular/router';
import {ClienteService} from '../../service/cliente.service';


@Component({
    selector :'cliente',
    templateUrl:'cliente.component.html',
    styleUrls: ['cliente.component.css'],
    providers: [ClienteService]

})

export class ClienteComponent {

    constructor( private router: Router,
               private _ClienteService: ClienteService){
        console.log("cliente Component");

    }


    lista(){
        console.log("lista()");

        this._ClienteService.getLista().subscribe((result) => { 
            console.log( "body " + result.body);
          
        }, (error) => { 
            console.log("error");

            alert(error);
            console.log(error);
        }); //service

    } //lista
}