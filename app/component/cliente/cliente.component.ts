import {Component} from '@angular/core';
import {Router } from '@angular/router';

@Component({
    selector :'cliente',
    templateUrl:'cliente.component.html',
    styleUrls: ['cliente.component.css']

})

export class ClienteComponent {

    constructor( private router: Router){
        console.log("cliente Component");

    }
}