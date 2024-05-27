import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjetosComponent } from './projetos.component';
import { ProjetoDolceVittaComponent } from './projeto-dolce-vitta/projeto-dolce-vitta.component';
import { ProjetoMainComponent } from './projeto-main/projeto-main.component';
import { CustomData, TipoProjeto } from './types';

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
        path: 'dolce-vitta',
        component: ProjetoDolceVittaComponent,
        title: 'Dolce Vitta',
        data: {
          isProjetoArquitetonico: true,
          isProjetoInteriores: true,
          isProjetoPaisagismo: true,
          tipoProjeto: TipoProjeto.Residencial,
          anoProjeto: 2016,
          image: 'https://images.adsttc.com/media/images/64f0/f509/9e3f/b901/7c1c/1751/newsletter/casa-do-cerrado-ser-arquitetos_12.jpg'
        } as CustomData
      },
      {
        path: 'casa-das-papoulas',
        component: ProjetoDolceVittaComponent,
        title: 'Casa das Papoulas',
        data: {
          isProjetoArquitetonico: true,
          isProjetoPaisagismo: true,
          tipoProjeto: TipoProjeto.Residencial,
          anoProjeto: 2011,
          image: 'https://images.adsttc.com/media/images/64f0/f509/9e3f/b901/7c1c/1751/newsletter/casa-do-cerrado-ser-arquitetos_12.jpg'
        } as CustomData
      },
      {
        path: 'a-primeira',
        component: ProjetoDolceVittaComponent,
        title: 'A Primeira',
        data: {
          isProjetoArquitetonico: true,
          isProjetoInteriores: true,
          isProjetoPaisagismo: true,
          tipoProjeto: TipoProjeto.Residencial,
          anoProjeto: 2002,
          image: 'https://images.adsttc.com/media/images/64f0/f509/9e3f/b901/7c1c/1751/newsletter/casa-do-cerrado-ser-arquitetos_12.jpg'
        } as CustomData
      },
      {
        path: 'lola-kafe',
        component: ProjetoDolceVittaComponent,
        title: 'Lola Kafé',
        data: {
          isProjetoArquitetonico: true,
          isProjetoInteriores: true,
          tipoProjeto: TipoProjeto.Comercial,
          anoProjeto: 2023,
          image: 'https://images.adsttc.com/media/images/64f0/f509/9e3f/b901/7c1c/1751/newsletter/casa-do-cerrado-ser-arquitetos_12.jpg'
        } as CustomData
      },
      {
        path: 'restaurante-pantanal',
        component: ProjetoDolceVittaComponent,
        title: 'Restaurante Pantanal - Toledo/PR',
        data: {
          isProjetoInteriores: true,
          tipoProjeto: TipoProjeto.Comercial,
          anoProjeto: 2019,
          image: 'https://images.adsttc.com/media/images/64f0/f509/9e3f/b901/7c1c/1751/newsletter/casa-do-cerrado-ser-arquitetos_12.jpg'
        } as CustomData
      },
      {
        path: 'drei-schritte',
        component: ProjetoDolceVittaComponent,
        title: 'Drei Schritte',
        data: {
          isProjetoArquitetonico: true,
          isProjetoInteriores: true,
          tipoProjeto: TipoProjeto.Comercial,
          anoProjeto: 2022,
          image: 'https://images.adsttc.com/media/images/64f0/f509/9e3f/b901/7c1c/1751/newsletter/casa-do-cerrado-ser-arquitetos_12.jpg'
        } as CustomData
      },
      {
        path: 'brisa-da-mata',
        component: ProjetoDolceVittaComponent,
        title: 'Brisa da Mata',
        data: {
          isProjetoArquitetonico: true,
          isProjetoInteriores: true,
          isProjetoPaisagismo: true,
          tipoProjeto: TipoProjeto.Residencial,
          anoProjeto: 2019,
          image: 'https://images.adsttc.com/media/images/64f0/f509/9e3f/b901/7c1c/1751/newsletter/casa-do-cerrado-ser-arquitetos_12.jpg'
        } as CustomData
      },
      {
        path: 'chale-do-campo',
        component: ProjetoDolceVittaComponent,
        title: 'Chalé do Campo',
        data: {
          isProjetoArquitetonico: true,
          tipoProjeto: TipoProjeto.Residencial,
          anoProjeto: 2021,
          image: 'https://images.adsttc.com/media/images/64f0/f509/9e3f/b901/7c1c/1751/newsletter/casa-do-cerrado-ser-arquitetos_12.jpg'
        } as CustomData
      },
      {
        path: 'edificio-aurelio',
        component: ProjetoDolceVittaComponent,
        title: 'Edifício Aurélio',
        data: {
          isProjetoArquitetonico: true,
          tipoProjeto: TipoProjeto.Residencial,
          anoProjeto: 2021,
          image: 'https://images.adsttc.com/media/images/64f0/f509/9e3f/b901/7c1c/1751/newsletter/casa-do-cerrado-ser-arquitetos_12.jpg'
        } as CustomData
      },
      {
        path: 'centro-odontológico-lago',
        component: ProjetoDolceVittaComponent,
        title: 'Centro Odontológico Lago',
        data: {
          isProjetoArquitetonico: true,
          isProjetoInteriores: true,
          tipoProjeto: TipoProjeto.Comercial,
          anoProjeto: 2019,
          image: 'https://images.adsttc.com/media/images/64f0/f509/9e3f/b901/7c1c/1751/newsletter/casa-do-cerrado-ser-arquitetos_12.jpg'
        } as CustomData
      },
      {
        path: 'casa-41',
        component: ProjetoDolceVittaComponent,
        title: 'Casa 41',
        data: {
          isProjetoArquitetonico: true,
          isProjetoInteriores: true,
          isProjetoPaisagismo: true,
          tipoProjeto: TipoProjeto.Residencial,
          anoProjeto: 2021,
          image: 'https://images.adsttc.com/media/images/64f0/f509/9e3f/b901/7c1c/1751/newsletter/casa-do-cerrado-ser-arquitetos_12.jpg'
        } as CustomData
      },
      {
        path: 'restaurante-pantanal-cascavel',
        component: ProjetoDolceVittaComponent,
        title: 'Restaurante Pantanal - Cascavel/PR',
        data: {
          isProjetoInteriores: true,
          tipoProjeto: TipoProjeto.Comercial,
          anoProjeto: 2023,
          image: 'https://images.adsttc.com/media/images/64f0/f509/9e3f/b901/7c1c/1751/newsletter/casa-do-cerrado-ser-arquitetos_12.jpg'
        } as CustomData
      },
      {
        path: 'casa-alecrim',
        component: ProjetoDolceVittaComponent,
        title: 'Casa Alecrim',
        data: {
          isProjetoInteriores: true,
          tipoProjeto: TipoProjeto.Residencial,
          anoProjeto: 2023,
          image: 'https://images.adsttc.com/media/images/64f0/f509/9e3f/b901/7c1c/1751/newsletter/casa-do-cerrado-ser-arquitetos_12.jpg'
        } as CustomData
      },
      {
        path: 'casa-country',
        component: ProjetoDolceVittaComponent,
        title: 'Casa do Country',
        data: {
          isProjetoArquitetonico: true,
          isProjetoInteriores: true,
          isProjetoPaisagismo: true,
          tipoProjeto: TipoProjeto.Residencial,
          anoProjeto: 2020,
          image: 'https://images.adsttc.com/media/images/64f0/f509/9e3f/b901/7c1c/1751/newsletter/casa-do-cerrado-ser-arquitetos_12.jpg'
        } as CustomData
      },
      {
        path: 'casa-rio',
        component: ProjetoDolceVittaComponent,
        title: 'Casa do Rio',
        data: {
          isProjetoInteriores: true,
          tipoProjeto: TipoProjeto.Residencial,
          anoProjeto: 2022,
          image: 'https://images.adsttc.com/media/images/64f0/f509/9e3f/b901/7c1c/1751/newsletter/casa-do-cerrado-ser-arquitetos_12.jpg'
        } as CustomData
      },
      {
        path: 'ape-do-musico',
        component: ProjetoDolceVittaComponent,
        title: 'Apê do Músico',
        data: {
          isProjetoInteriores: true,
          tipoProjeto: TipoProjeto.Residencial,
          anoProjeto: 2019,
          image: 'https://images.adsttc.com/media/images/64f0/f509/9e3f/b901/7c1c/1751/newsletter/casa-do-cerrado-ser-arquitetos_12.jpg'
        } as CustomData
      },
      {
        path: 'ape-downtown',
        component: ProjetoDolceVittaComponent,
        title: 'Apê Downtown',
        data: {
          isProjetoInteriores: true,
          tipoProjeto: TipoProjeto.Residencial,
          anoProjeto: 2022,
          image: 'https://images.adsttc.com/media/images/64f0/f509/9e3f/b901/7c1c/1751/newsletter/casa-do-cerrado-ser-arquitetos_12.jpg'
        } as CustomData
      },
      {
        path: 'fixar',
        component: ProjetoDolceVittaComponent,
        title: 'Fixar - Propriedade Intelectual',
        data: {
          isProjetoInteriores: true,
          tipoProjeto: TipoProjeto.Comercial,
          anoProjeto: 2022,
          image: 'https://images.adsttc.com/media/images/64f0/f509/9e3f/b901/7c1c/1751/newsletter/casa-do-cerrado-ser-arquitetos_12.jpg'
        } as CustomData
      },
      {
        path: 'vila-neoclassica',
        component: ProjetoDolceVittaComponent,
        title: 'Vila Neoclássica',
        data: {
          isProjetoArquitetonico: true,
          isProjetoPaisagismo: true,
          tipoProjeto: TipoProjeto.Residencial,
          anoProjeto: 2011,
          image: 'https://images.adsttc.com/media/images/64f0/f509/9e3f/b901/7c1c/1751/newsletter/casa-do-cerrado-ser-arquitetos_12.jpg'
        } as CustomData
      },
      {
        path: 'my-way',
        component: ProjetoDolceVittaComponent,
        title: 'My Way',
        data: {
          isProjetoArquitetonico: true,
          isProjetoInteriores: true,
          isProjetoPaisagismo: true,
          tipoProjeto: TipoProjeto.Residencial,
          anoProjeto: 2011,
          image: 'https://images.adsttc.com/media/images/64f0/f509/9e3f/b901/7c1c/1751/newsletter/casa-do-cerrado-ser-arquitetos_12.jpg'
        } as CustomData
      },
      {
        path: 'la-fontana',
        component: ProjetoDolceVittaComponent,
        title: 'La Fontana',
        data: {
          isProjetoArquitetonico: true,
          isProjetoInteriores: true,
          isProjetoPaisagismo: true,
          tipoProjeto: TipoProjeto.Residencial,
          anoProjeto: 2006,
          image: 'https://images.adsttc.com/media/images/64f0/f509/9e3f/b901/7c1c/1751/newsletter/casa-do-cerrado-ser-arquitetos_12.jpg'
        } as CustomData
      },
      {
        path: 'casa-dos-porticos',
        component: ProjetoDolceVittaComponent,
        title: 'Casa dos Pórticos',
        data: {
          isProjetoArquitetonico: true,
          isProjetoInteriores: true,
          isProjetoPaisagismo: true,
          tipoProjeto: TipoProjeto.Residencial,
          anoProjeto: 2020,
          image: 'https://images.adsttc.com/media/images/64f0/f509/9e3f/b901/7c1c/1751/newsletter/casa-do-cerrado-ser-arquitetos_12.jpg'
        } as CustomData
      },
      {
        path: 'contemporanea',
        component: ProjetoDolceVittaComponent,
        title: 'Contemporânea',
        data: {
          isProjetoArquitetonico: true,
          isProjetoPaisagismo: true,
          tipoProjeto: TipoProjeto.Residencial,
          anoProjeto: 2015,
          image: 'https://images.adsttc.com/media/images/64f0/f509/9e3f/b901/7c1c/1751/newsletter/casa-do-cerrado-ser-arquitetos_12.jpg'
        } as CustomData
      },
      {
        path: 'casa-das-palmeiras',
        component: ProjetoDolceVittaComponent,
        title: 'Casa das Palmeiras',
        data: {
          isProjetoArquitetonico: true,
          isProjetoInteriores: true,
          isProjetoPaisagismo: true,
          tipoProjeto: TipoProjeto.Residencial,
          anoProjeto: 2019,
          image: 'https://images.adsttc.com/media/images/64f0/f509/9e3f/b901/7c1c/1751/newsletter/casa-do-cerrado-ser-arquitetos_12.jpg'
        } as CustomData
      },
      {
        path: 'monumento-fundadores',
        component: ProjetoDolceVittaComponent,
        title: 'Monumento Fundadores',
        data: {
          isProjetoArquitetonico: true,
          isProjetoInteriores: true,
          isProjetoPaisagismo: true,
          isObraPublica: true,
          tipoProjeto: TipoProjeto.InstitucionalPublico,
          anoProjeto: 2011,
          image: 'https://images.adsttc.com/media/images/64f0/f509/9e3f/b901/7c1c/1751/newsletter/casa-do-cerrado-ser-arquitetos_12.jpg'
        } as CustomData
      },
      {
        path: 'academia-da-saude',
        component: ProjetoDolceVittaComponent,
        title: 'Academia da Saúde',
        data: {
          isProjetoArquitetonico: true,
          isProjetoPaisagismo: true,
          tipoProjeto: TipoProjeto.Residencial,
          anoProjeto: 2011,
          image: 'https://images.adsttc.com/media/images/64f0/f509/9e3f/b901/7c1c/1751/newsletter/casa-do-cerrado-ser-arquitetos_12.jpg'
        } as CustomData
      },
      {
        path: 'rodoviaria',
        component: ProjetoDolceVittaComponent,
        title: 'Rodoviária',
        data: {
          isProjetoArquitetonico: true,
          tipoProjeto: TipoProjeto.Publico,
          anoProjeto: 2016,
          image: 'https://images.adsttc.com/media/images/64f0/f509/9e3f/b901/7c1c/1751/newsletter/casa-do-cerrado-ser-arquitetos_12.jpg'
        } as CustomData
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjetosRoutingModule { }
