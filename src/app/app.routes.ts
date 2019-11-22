import { Routes } from '@angular/router';
import { FlexLayoutExamplo1Component } from './flex-layout-examplo1/flex-layout-examplo1.component';
import { GridLayoutExample1Component } from './grid-layout-example1/grid-layout-example1.component';
import { GridLayoutExample2Component } from './grid-layout-example2/grid-layout-example2.component';
import { GridLayoutExample3Component } from './grid-layout-example3/grid-layout-example3.component';
import { FlexLayoutExample2Component } from './flex-layout-example2/flex-layout-example2.component';

export const ROUTES: Routes = [
    { path: '' , component: FlexLayoutExample2Component },
    { path: 'flex-layout-example1' , component: FlexLayoutExamplo1Component },
    { path: 'grid-layout-example1' , component: GridLayoutExample1Component },
    { path: 'grid-layout-example2' , component: GridLayoutExample2Component },
    { path: 'grid-layout-example3' , component: GridLayoutExample3Component }
]
