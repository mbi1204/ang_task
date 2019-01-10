import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routing , appRoutingProviders } from './app.routing'


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//componentes
import { LoginComponent } from '../app/component/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
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
