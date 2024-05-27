import { Component, Input, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CustomData, Projeto, TipoProjeto } from '@pages/projetos/types';

@Component({
  selector: 'app-projeto-header',
  templateUrl: './projeto-header.component.html',
  styleUrls: ['./projeto-header.component.scss']
})
export class ProjetoHeaderComponent implements OnInit {

  projeto!: Projeto;
  TipoProjeto = TipoProjeto;

  private route = inject(ActivatedRoute);

  ngOnInit(): void {
    const route = this.route.snapshot;

    this.projeto = {
      path: '',
      nome: route.title!,
      ...route.data as CustomData
    };
  }
}
