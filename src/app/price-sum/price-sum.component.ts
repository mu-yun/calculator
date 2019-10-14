import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-price-sum',
	templateUrl: './price-sum.component.html',
	styleUrls: ['./price-sum.component.scss']
})
export class PriceSumComponent implements OnInit {

	priceText: string;

	priceSum: number;

	lastPriceSum:number;

	constructor() { }

	ngOnInit() {
	}

	sumPrice() {
		this.lastPriceSum = this.priceSum;
		let priceSum = 0;
		this.priceText.split("，").filter(price=>price!="").map(price => parseInt(price)).forEach(price => priceSum += price);
		this.priceSum = priceSum;
	}

	clear() {
		this.priceText = "";
	}

}
