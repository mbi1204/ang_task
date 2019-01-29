import {Component} from '@angular/core';
import {Router } from '@angular/router';


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