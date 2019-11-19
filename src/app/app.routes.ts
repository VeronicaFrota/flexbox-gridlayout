import { Routes } from '@angular/router';
import { FlexLayoutExamploComponent } from './flex-layout-examplo/flex-layout-examplo.component';
import { GridLayoutExample1Component } from './grid-layout-example1/grid-layout-example1.component';
import { GridLayoutExample2Component } from './grid-layout-example2/grid-layout-example2.component';
import { GridLayoutExample3Component } from './grid-layout-example3/grid-layout-example3.component';

export const ROUTES: Routes = [
    { path: '' , component: FlexLayoutExamploComponent },
    { path: 'grid-layout-example1' , component: GridLayoutExample1Component },
    { path: 'grid-layout-example2' , component: GridLayoutExample2Component },
    { path: 'grid-layout-example3' , component: GridLayoutExample3Component }
]
