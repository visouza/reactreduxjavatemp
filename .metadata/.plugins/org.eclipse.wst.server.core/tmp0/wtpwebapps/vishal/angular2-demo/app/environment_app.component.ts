import {Component, View} from "angular2/core";
import {Customer} from './customer.component';

@Component({
   selector: 'my-app',
   template: '<h2 Class=title>My First Angular 2 App test {{val}}  {{customer.surname}}</h2><customer></customer>',
   directives: [Customer]
})

export class AppComponent {
	val: 'vishals value';
	customer = new Customer();
	constructor(){
		this.customer = new Customer();
		this.val = this.customer.surname;
	}
}



