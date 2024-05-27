import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SkeletonTableComponent } from './skeleton-table.component';
import { faker } from '@faker-js/faker';

describe(SkeletonTableComponent.name, () => {
  let component: SkeletonTableComponent;
  let fixture: ComponentFixture<SkeletonTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SkeletonTableComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(SkeletonTableComponent);
    component = fixture.componentInstance;

    component.rowsCount = faker.number.int({ min: 3, max: 10 });
    component.columnsCount = faker.number.int({ min: 3, max: 10 });
  });

  it('deve instanciar o componente', () => {
    expect(component).toBeTruthy();
  });

  describe('#getRows', () => {
    it('deve retornar uma lista com o tamanho correto', () => {
      expect(component.getRows().length).toEqual(component.rowsCount)
    });
  });

  describe('#getColumns', () => {
    it('deve retornar uma lista com o tamanho correto', () => {
      expect(component.getColumns().length).toEqual(component.columnsCount)
    });
  });

  describe('#addProperty', () => {
    let fakeCellElement: HTMLTableCellElement;

    beforeEach(() => {
      fakeCellElement = document.createElement(faker.helpers.arrayElement(['th', 'td']));
    });

    describe('Quando o valor na lista é um número', () => {
      let fakeWidth: number;

      beforeEach(() => {
        fakeWidth = faker.number.int({ min: 10, max: 100 });
        component.columnsWidth = [fakeWidth];
        component.addProperty(fakeCellElement, 0);
      });

      it('deve adicionar uma largura em px ao elemento', () => {
        expect(fakeCellElement.style.width).toEqual(`${fakeWidth}px`);
      });
    });

    describe('Quando o valor na lista é vazio', () => {
      beforeEach(() => {
        component.columnsWidth = [''];
        component.addProperty(fakeCellElement, 0);
      });

      it('deve adicionar a classe correta ao elemento', () => {
        expect(fakeCellElement.className).toEqual('text-truncate');
      });
    });
  });
});
