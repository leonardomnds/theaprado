import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LivroRoutingModule } from './livro-routing.module';
import { LivroComponent } from './livro.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    LivroComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    LivroRoutingModule,
  ]
})
export class LivroModule { }
