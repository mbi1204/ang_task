import {Component} from '@angular/core';
import {Router } from '@angular/router';
@Component({
    selector :'tipo',
    templateUrl:'tipo.component.html',
    styleUrls: ['tipo.component.css']

})

export class TipoComponent {

    constructor( private router: Router){
        console.log("Tipo Usuario Component");

    }    
}