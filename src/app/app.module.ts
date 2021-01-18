import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ConnectionService } from '@agilis/common';
import { HttpClientModule } from '@angular/common/http';
//import { LocalConnectionService } from './services/agilis/connection.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule
    
  ],
  providers: [
  //  LocalConnectionService,
    //ConnectionService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
