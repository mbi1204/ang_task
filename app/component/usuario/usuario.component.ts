import {Component} from '@angular/core';
import {Router } from '@angular/router';
@Component({
    selector :'usuario',
    templateUrl:'usuario.component.html',
    styleUrls: ['usuario.component.css']

})

export class UsuarioComponent {

    constructor( private router: Router){
        console.log("Usuario Component");

    }    
}