import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EspacoRoutingModule } from './espaco-routing.module';
import { EspacoComponent } from './espaco.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    EspacoComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    EspacoRoutingModule,
  ]
})
export class EspacoModule { }
