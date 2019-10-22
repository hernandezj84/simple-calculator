import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	title = 'simple-calculator';
	formula: string = ""; 
	results: number = 0;
	map_functions = {
		'+': function (x, y) {return x + y},
		'-': function (x, y) {return x - y},
		'*': function (x, y) {return x * y},
		'/': function (x, y) {return x / y}
	}

	operations = ["+", "-", "*", "/"];

	constructor() {
		//math_it_up['+'](1, 2) == 3;	
	}


	calculate(form: String) {
		let i = form.length;
		let simbol: String;
		let newOperation: any;
		while(i --) {
			if (this.operations.includes(form.charAt(i))) {
				simbol = form.charAt(i);
			}
		}

		if (simbol) {
			newOperation = form.split(`${simbol}`);
			this.results = this.map_functions[`${simbol}`](Number(newOperation[0]), Number(newOperation[1]))
		}
		this.formula = "";
	}
}
