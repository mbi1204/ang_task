import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

//Componentes

//componentes
import { ClienteComponent } from "../app/component/cliente/cliente.component";
import { EstatusComponent } from './component/estatusTarea/estatus.component';
import { LoginComponent } from '../app/component/login/login.component';
import { MenuComponent } from '../app/component/menu/menu.component';
import {TipoComponent} from "../app/component/tipoTarea/tipo.component";
import {UsuarioComponent} from "../app/component/usuario/usuario.component";

const appRoutes: Routes=[
    {path:'', component : LoginComponent},
    {path:'', redirectTo : 'login', pathMatch: 'full'},
    {path:'cliente', component : ClienteComponent },
    {path: 'estatus', component : EstatusComponent},
    {path:'login', component : LoginComponent},
    {path:'menu' , component : MenuComponent},
    {path:'tipo' , component : TipoComponent},
    {path:'usuario', component:UsuarioComponent},
    {path:'**', component : LoginComponent},
    
];


export const appRoutingProviders: any[] = [];
export const routing : ModuleWithProviders = RouterModule.forRoot(appRoutes);