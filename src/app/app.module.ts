import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { ROUTES } from './app.routes';
import { MatCardModule } from '@angular/material/card';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FlexLayoutExamploComponent } from './flex-layout-examplo/flex-layout-examplo.component';
import { GridLayoutExample1Component } from './grid-layout-example1/grid-layout-example1.component';
import { MenuComponent } from './menu/menu.component';
import { GridLayoutExample2Component } from './grid-layout-example2/grid-layout-example2.component';
import { GridLayoutExample3Component } from './grid-layout-example3/grid-layout-example3.component';

@NgModule({
	declarations: [
		AppComponent,
		FlexLayoutExamploComponent,
		GridLayoutExample1Component,
		MenuComponent,
		GridLayoutExample2Component,
		GridLayoutExample3Component
	],
	imports: [
		BrowserModule,
		RouterModule.forRoot(ROUTES),
		MatCardModule,
		BrowserAnimationsModule,
		FlexLayoutModule,
		MatSliderModule,
		MatInputModule,
		MatButtonModule,
		MatIconModule,
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
