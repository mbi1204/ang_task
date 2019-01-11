import {Component} from '@angular/core';
import {Router } from '@angular/router';
@Component({
    selector :'estatus',
    templateUrl:'estatus.component.html',
    styleUrls: ['estatus.component.css']

})

export class EstatusComponent {

    constructor( private router: Router){
        console.log("estatus Component");

    }    
}