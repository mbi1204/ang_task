import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

//Componentes

import { LoginComponent } from '../app/component/login/login.component';

const appRoutes: Routes=[
    {path:'', component : LoginComponent},
    {path:'', redirectTo : 'tienda', pathMatch: 'full'},
    {path:'tienda', component : LoginComponent},
    {path:'**', component : LoginComponent},
    
];


export const appRoutingProviders: any[] = [];
export const routing : ModuleWithProviders = RouterModule.forRoot(appRoutes);