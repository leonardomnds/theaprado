import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EquipeRoutingModule } from './equipe-routing.module';
import { EquipeComponent } from './equipe.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    EquipeComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    EquipeRoutingModule,
  ]
})
export class EquipeModule { }
