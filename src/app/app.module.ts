import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//RUtas
import { APP_ROUTES } from './app.routes';

//Modulos

import { PagesModule } from './pages/pages.module';

import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './login/register.component';
import { ServiceModule } from './services/service.module';







@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,    
    RegisterComponent 
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    APP_ROUTES,
    PagesModule,
    FormsModule,
    ServiceModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
