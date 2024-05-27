import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServicosRoutingModule } from './servicos-routing.module';
import { ServicosComponent } from './servicos.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    ServicosComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ServicosRoutingModule,
  ]
})
export class ServicosModule { }
