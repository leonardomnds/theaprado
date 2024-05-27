import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ProjetoHeaderComponent } from './projeto-header.component';

const COMPONENTS = [
  ProjetoHeaderComponent
];

@NgModule({
  declarations: COMPONENTS,
  imports: [CommonModule],
  exports: COMPONENTS
})
export class ProjetoHeaderModule { }
