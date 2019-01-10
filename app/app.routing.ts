import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

//Componentes

import { LoginComponent } from '../app/component/login/login.component';
import { MenuComponent } from '../app/component/menu/menu.component';

const appRoutes: Routes=[
    {path:'', component : LoginComponent},
    {path:'', redirectTo : 'login', pathMatch: 'full'},
    {path:'login', component : LoginComponent},
    {path:'menu' , component : MenuComponent},
    {path:'**', component : LoginComponent},
    
];


export const appRoutingProviders: any[] = [];
export const routing : ModuleWithProviders = RouterModule.forRoot(appRoutes);