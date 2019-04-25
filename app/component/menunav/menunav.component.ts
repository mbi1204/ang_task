import { Component, OnInit, DoCheck } from '@angular/core';
import {Router } from '@angular/router';


@Component({
    selector : 'menunav',
    templateUrl: 'menunav.component.html',
    styleUrls: ['menunav.component.css']


})

export class MenunavComponent implements OnInit {


     user: any ;

    constructor( private router: Router, ) {
        console.log('menunav');
        console.log(this.user);
    }

    ngOnInit(): void {
        // obtiene los datos guardados en la var user
        this.user = JSON.parse(localStorage.getItem('miNombre'));
       /* console.log('miNombre' + this.user.cUsuario); */

        if (this.user == null || this.user === undefined ) {
            this.router.navigate(['/menu']);
            return; // no permite que siga el proceso
        }
    }



    logOut() {
    // Borra todos los datos del localStorage de la web
       localStorage.clear();
       this.user = null;
       this.router.navigate(['/']);
    }


}
