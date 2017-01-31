import {Component, View} from "angular2/core";

@Component({
   selector: 'customer'
})

@View({
  template: '<h2>customer surname printed here {{surname}}</h2>'
})

export class Customer {
	surname : 'dsouza from customer';
}