//app.module.ts is a typescript file which provide strong typechecking
//everything is a class

//importing core module of angular
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

//whenever cli is used to generate new components and services, it will
//automatically update this file to import and add them here.

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//ngmodule is a decorator,very similar to annotations
//they have additional metadata about the components,services,imports etc..
//decorators are used while processing,instantiation and at run time
@NgModule({

  //components are added here
  declarations: [
    AppComponent
  ],

  //import needed for application are added here
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],

  //typically services like http-services are added to providers
  providers: [],


  bootstrap: [AppComponent]
})
export class AppModule { }
