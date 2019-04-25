import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routing , appRoutingProviders } from './app.routing';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { ReactiveFormsModule } from '@angular/forms';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// componentes
import { ClienteComponent } from '../app/component/cliente/cliente.component';
import { EstatusComponent } from './component/estatusTarea/estatus.component';
import { LoginComponent } from '../app/component/login/login.component';
import { MenuComponent } from '../app/component/menu/menu.component';
import {TipoComponent} from '../app/component/tipoTarea/tipo.component';
import {UsuarioComponent} from '../app/component/usuario/usuario.component';
import { TareaComponent} from '..//app/component/tarea/tarea.component';
import { SubtareaComponent} from '..//app/component/subtarea/subtarea.component';
import { MenunavComponent } from '../app/component/menunav/menunav.component';

@NgModule({
  declarations: [
    AppComponent,
    ClienteComponent,
    EstatusComponent,
    LoginComponent,
    MenuComponent,
    TipoComponent,
    UsuarioComponent,
    TareaComponent,
    SubtareaComponent,
    MenunavComponent,
   




  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    routing,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    ReactiveFormsModule


  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
