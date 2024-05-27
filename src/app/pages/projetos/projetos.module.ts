import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { RouterModule } from '@angular/router';
import { ProjetoDolceVittaComponent } from './projeto-dolce-vitta/projeto-dolce-vitta.component';
import { ProjetoMainComponent } from './projeto-main/projeto-main.component';
import { ProjetosRoutingModule } from './projetos-routing.module';
import { ProjetosComponent } from './projetos.component';

@NgModule({
  declarations: [
    ProjetosComponent,
    ProjetoMainComponent,
    ProjetoDolceVittaComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ProjetosRoutingModule
  ]
})
export class ProjetosModule { }
