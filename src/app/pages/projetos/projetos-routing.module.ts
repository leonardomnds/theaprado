import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjetosComponent } from './projetos.component';
import { ProjetoDolceVittaComponent } from './projeto-dolce-vitta/projeto-dolce-vitta.component';
import { ProjetoMainComponent } from './projeto-main/projeto-main.component';

const routes: Routes = [
  {
    path: '',
    component: ProjetosComponent,
    children: [
      {
        path: '',
        component: ProjetoMainComponent,
      },
      {
        path: '1',
        component: ProjetoDolceVittaComponent,
        title: 'Projetos | Dolce Vitta'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjetosRoutingModule { }
