import { Component } from '@angular/core';

@Component({
  selector: 'app-projeto-main',
  templateUrl: './projeto-main.component.html',
  styleUrls: ['./projeto-main.component.scss'],
})
export class ProjetoMainComponent {

  projetos: Projeto[] = Array.from({ length: 27 }, () => ({
    route: '1',
    imageURL: 'https://images.adsttc.com/media/images/64f0/f509/9e3f/b901/7c1c/1751/newsletter/casa-do-cerrado-ser-arquitetos_12.jpg'
  }));

}

interface Projeto {
  imageURL: string;
  route: string;
}

