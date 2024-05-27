import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-skeleton-table',
  templateUrl: './skeleton-table.component.html',
  styleUrls: ['./skeleton-table.component.scss']
})
export class SkeletonTableComponent {

  @Input()
  public rowsCount = 5;

  @Input()
  public columnsCount = 5;

  @Input()
  public columnsWidth: ('' | number)[]  = [];

  getRows() {
    return Array.from({ length: this.rowsCount }, (_, index) => index);
  }

  getColumns() {
    const length = this.columnsWidth.length || this.columnsCount;
    return Array.from({ length }, (_, index) => index);
  }

  addProperty(tableCellElement: HTMLTableCellElement, index: number): void {
    const widthValue = this.columnsWidth[index] ?? '';

    if (widthValue === '') {
      return tableCellElement.classList.add('text-truncate');
    }

    tableCellElement.style.width = `${widthValue}px`;
  }
}
