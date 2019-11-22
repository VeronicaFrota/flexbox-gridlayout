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
import { FlexLayoutExamplo1Component } from './flex-layout-examplo1/flex-layout-examplo1.component';
import { GridLayoutExample1Component } from './grid-layout-example1/grid-layout-example1.component';
import { MenuComponent } from './menu/menu.component';
import { GridLayoutExample2Component } from './grid-layout-example2/grid-layout-example2.component';
import { GridLayoutExample3Component } from './grid-layout-example3/grid-layout-example3.component';
import { FlexLayoutExample2Component } from './flex-layout-example2/flex-layout-example2.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutExample2MenuComponent } from './flex-layout-example2-menu/flex-layout-example2-menu.component';
import { FlexLayoutExample2FooterComponent } from './flex-layout-example2-footer/flex-layout-example2-footer.component';

@NgModule({
	declarations: [
		AppComponent,
		FlexLayoutExamplo1Component,
		GridLayoutExample1Component,
		MenuComponent,
		GridLayoutExample2Component,
		GridLayoutExample3Component,
		FlexLayoutExample2Component,
		FlexLayoutExample2MenuComponent,
		FlexLayoutExample2FooterComponent
	],
	imports: [
		BrowserModule,
		RouterModule.forRoot(ROUTES),
		FormsModule,
		ReactiveFormsModule,
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
