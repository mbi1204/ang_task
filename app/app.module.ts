import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routing , appRoutingProviders } from './app.routing'


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//componentes
import { ClienteComponent } from "../app/component/cliente/cliente.component";
import { EstatusComponent } from './component/estatusTarea/estatus.component';
import { LoginComponent } from '../app/component/login/login.component';
import { MenuComponent } from '../app/component/menu/menu.component';
import {TipoComponent} from "../app/component/tipoTarea/tipo.component";
import {UsuarioComponent} from "../app/component/usuario/usuario.component";


@NgModule({
  declarations: [
    AppComponent,
    ClienteComponent,
    EstatusComponent,    
    LoginComponent,
    MenuComponent,
    TipoComponent,
    UsuarioComponent
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    routing
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
