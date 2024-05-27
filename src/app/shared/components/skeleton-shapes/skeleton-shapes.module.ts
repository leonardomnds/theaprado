import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SkeletonTableComponent } from './skeleton-table/skeleton-table.component';

const COMPONENTS = [
  SkeletonTableComponent
];

@NgModule({
  declarations: COMPONENTS,
  imports: [CommonModule],
  exports: COMPONENTS
})
export class SkeletonShapesModule { }
