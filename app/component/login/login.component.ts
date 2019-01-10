import {Component} from '@angular/core';
import {Router } from '@angular/router';
import { template } from '@angular/core/src/render3';
@Component({
    selector :'login',
    templateUrl:'login.component.html',
    styleUrls: ['login.component.css']

})

export class LoginComponent {

    constructor( private router: Router){

    }



    click(){
        console.log("click en el boton");
        this.router.navigate(['/menu']);
    }
}