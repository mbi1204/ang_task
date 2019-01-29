
import {Component} from '@angular/core';
import {Router } from '@angular/router';

@Component ({
    // tslint:disable-next-line:component-selector
    selector : 'tarea',
    templateUrl: 'tarea.component.html',
    styleUrls: ['tarea.component.css']


})

export class TareaComponent {

    constructor(private router: Router) {
        console.log( "tarea" );
    }

}