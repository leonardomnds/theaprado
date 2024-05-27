import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { RouterModule } from '@angular/router';
import { ProjetoDetalhesComponent } from './projeto-detalhes/projeto-detalhes.component';
import { ProjetoMainComponent } from './projeto-main/projeto-main.component';
import { ProjetosRoutingModule } from './projetos-routing.module';
import { ProjetosComponent } from './projetos.component';

@NgModule({
  declarations: [
    ProjetosComponent,
    ProjetoMainComponent,
    ProjetoDetalhesComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ProjetosRoutingModule
  ]
})
export class ProjetosModule { }
