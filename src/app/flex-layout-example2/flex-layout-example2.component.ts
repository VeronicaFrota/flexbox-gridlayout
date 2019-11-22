import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
	selector: 'app-flex-layout-example2',
	templateUrl: './flex-layout-example2.component.html',
	styleUrls: ['./flex-layout-example2.component.css']
})
export class FlexLayoutExample2Component implements OnInit {

	form: FormGroup

	constructor(
		private fb : FormBuilder
	) { }

	ngOnInit() {
		this.form = this.fb.group({
			email : this.fb.control('')
		})
	}

}
