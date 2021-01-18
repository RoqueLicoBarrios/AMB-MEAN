import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaisesRoutingModule } from './paises-routing.module';
import { PaisesComponent } from './paises.component';
import { MaterialModule } from 'src/app/modules/material.module';
import { NGXBootstrapModule } from 'src/app/modules/bootstrap.module';
import {  AgilisServicesModule } from '@agilis/common';


@NgModule({
  declarations: [PaisesComponent],
  imports: [
    CommonModule,
    PaisesRoutingModule,
    MaterialModule,
    NGXBootstrapModule,
    AgilisServicesModule
  ],
  providers: []
})
export class PaisesModule { }