import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-trade-statistics',
	templateUrl: './trade-statistics.component.html',
	styleUrls: ['./trade-statistics.component.scss']
})
export class TradeStatisticsComponent implements OnInit {
	//test
	selectedDay: string = '';

	selectChangeHandler(event: any) {
		this.selectedDay = event.target.value;
	}

	public listItems: Array<string> = [
		'Baseball', 'Basketball', 'Cricket', 'Field Hockey',
        'Football', 'Table Tennis', 'Tennis', 'Volleyball'
    ];

	public reportItems: Array<string> = [
		'Sample 1', 
		'Sample 2', 
		'Sample 3', 
		'Sample 4', 
		'Sample 5', 
		'Sample 6', 
		'Sample 7', 
		'Sample 8', 
		'Sample 9', 
		'Sample 10', 
	];

	selectReports = [
		{ value: '1', viewValue: 'sample 1' },
		{ value: '2', viewValue: 'sample 2' },
		{ value: '3', viewValue: 'sample 3' },
		{ value: '4', viewValue: 'sample 4' },
		{ value: '5', viewValue: 'sample 5' },
		{ value: '6', viewValue: 'sample 6' },
		{ value: '7', viewValue: 'sample 7' },
		{ value: '8', viewValue: 'sample 8' },
		{ value: '9', viewValue: 'sample 9' },
		{ value: '10', viewValue: 'sample 10' },
	];

	months = [
		{ value: 'jan', viewValue: 'January' },
		{ value: 'feb', viewValue: 'February' },
		{ value: 'mar', viewValue: 'March' },
		{ value: 'apr', viewValue: 'April' },
		{ value: 'may', viewValue: 'May' },
		{ value: 'jun', viewValue: 'June' },
		{ value: 'jul', viewValue: 'July' },
		{ value: 'aug', viewValue: 'August' },
		{ value: 'sep', viewValue: 'September' },
		{ value: 'oct', viewValue: 'October' },
		{ value: 'nov', viewValue: 'November' },
		{ value: 'dec', viewValue: 'December' },
	]

	quarters = [
		{ value: 'q1', viewValue: 'Quarter 1' },
		{ value: 'q2', viewValue: 'Quarter 2' },
		{ value: 'q3', viewValue: 'Quarter 3' },
		{ value: 'q4', viewValue: 'Quarter 4' },
		{ value: 'q5', viewValue: 'Quarter 5' },
		{ value: 'q6', viewValue: 'Quarter 6' },
		{ value: 'q7', viewValue: 'Quarter 7' },
		{ value: 'q8', viewValue: 'Quarter 8' },
		{ value: 'q9', viewValue: 'Quarter 9' },
		{ value: 'q10', viewValue: 'Quarter 10' },
	];

	regionalBlocs = [
		{ value: 'b1', viewValue: 'Item 1' },
		{ value: 'b2', viewValue: 'Item 2' },
		{ value: 'b3', viewValue: 'Item 3' },
		{ value: 'b4', viewValue: 'Item 4' },
		{ value: 'b5', viewValue: 'Item 5' },
		{ value: 'b6', viewValue: 'Item 6' },
		{ value: 'b7', viewValue: 'Item 7' },
		{ value: 'b8', viewValue: 'Item 8' },
		{ value: 'b9', viewValue: 'Item 9' },
		{ value: 'b10', viewValue: 'Item 10' },
	];

	regionalSubs = [
		{ value: 's1', viewValue: 'Sub 1' },
		{ value: 's2', viewValue: 'Sub 2' },
		{ value: 's3', viewValue: 'Sub 3' },
		{ value: 's4', viewValue: 'Sub 4' },
		{ value: 's5', viewValue: 'Sub 5' },
		{ value: 's6', viewValue: 'Sub 6' },
		{ value: 's7', viewValue: 'Sub 7' },
		{ value: 's8', viewValue: 'Sub 8' },
		{ value: 's9', viewValue: 'Sub 9' },
		{ value: 's10', viewValue: 'Sub 10' },
	];

	productCodes = [
		{ value: 'p1', viewValue: 'Product 1' },
		{ value: 'p2', viewValue: 'Product 2' },
		{ value: 'p3', viewValue: 'Product 3' },
		{ value: 'p4', viewValue: 'Product 4' },
		{ value: 'p5', viewValue: 'Product 5' },
		{ value: 'p6', viewValue: 'Product 6' },
		{ value: 'p7', viewValue: 'Product 7' },
		{ value: 'p8', viewValue: 'Product 8' },
		{ value: 'p9', viewValue: 'Product 9' },
		{ value: 'p10', viewValue: 'Product 10' },
	];

	productDescs = [
		{ value: 'd1', viewValue: 'Description 1' },
		{ value: 'd2', viewValue: 'Description 2' },
		{ value: 'd3', viewValue: 'Description 3' },
		{ value: 'd4', viewValue: 'Description 4' },
		{ value: 'd5', viewValue: 'Description 5' },
		{ value: 'd6', viewValue: 'Description 6' },
		{ value: 'd7', viewValue: 'Description 7' },
		{ value: 'd8', viewValue: 'Description 8' },
		{ value: 'd9', viewValue: 'Description 9' },
		{ value: 'd10', viewValue: 'Description 10' },
	];

	exports = [
		{ value: 'e1', viewValue: 'Export 1' },
		{ value: 'e2', viewValue: 'Export 2' },
		{ value: 'e3', viewValue: 'Export 3' },
		{ value: 'e4', viewValue: 'Export 4' },
		{ value: 'e5', viewValue: 'Export 5' },
		{ value: 'e6', viewValue: 'Export 6' },
		{ value: 'e7', viewValue: 'Export 7' },
		{ value: 'e8', viewValue: 'Export 8' },
		{ value: 'e9', viewValue: 'Export 9' },
		{ value: 'e10', viewValue: 'Export 10' },
	];

	imports = [
		{ value: 'i1', viewValue: 'Import 1' },
		{ value: 'i2', viewValue: 'Import 2' },
		{ value: 'i3', viewValue: 'Import 3' },
		{ value: 'i4', viewValue: 'Import 4' },
		{ value: 'i5', viewValue: 'Import 5' },
		{ value: 'i6', viewValue: 'Import 6' },
		{ value: 'i7', viewValue: 'Import 7' },
		{ value: 'i8', viewValue: 'Import 8' },
		{ value: 'i9', viewValue: 'Import 9' },
		{ value: 'i10', viewValue: 'Import 10' },
	];

	totalTrades = [
		{ value: 't1', viewValue: 'Total Trade 1' },
		{ value: 't2', viewValue: 'Total Trade 2' },
		{ value: 't3', viewValue: 'Total Trade 3' },
		{ value: 't4', viewValue: 'Total Trade 4' },
		{ value: 't5', viewValue: 'Total Trade 5' },
		{ value: 't6', viewValue: 'Total Trade 6' },
		{ value: 't7', viewValue: 'Total Trade 7' },
		{ value: 't8', viewValue: 'Total Trade 8' },
		{ value: 't9', viewValue: 'Total Trade 9' },
		{ value: 't10', viewValue: 'Total Trade 10' },
	];

	countries = [
		{ value: 'afghanistan', viewValue: 'Afghanistan' },
		{ value: 'argentina', viewValue: 'Argentina' },
		{ value: 'australia', viewValue: 'Australia' },
		{ value: 'bangladesh', viewValue: 'Bangladesh' },
		{ value: 'belgium', viewValue: 'Belgium' },
		{ value: 'brazil', viewValue: 'Brazil' },
		{ value: 'brunei', viewValue: 'Brunei' },
		{ value: 'cambodia', viewValue: 'Cambodia' },
		{ value: 'chile', viewValue: 'Chile' },
		{ value: 'china', viewValue: 'China' },
		{ value: 'colombia', viewValue: 'Colombia' },
		{ value: 'cuba', viewValue: 'Cuba' },
		{ value: 'czechRepublic', viewValue: 'Czech Republic' },
		{ value: 'denmark', viewValue: 'Denmark' },
		{ value: 'dominicanRepublic', viewValue: 'Dominican Republic' },
		{ value: 'egypt', viewValue: 'Egypt' },
		{ value: 'finland', viewValue: 'Finland' },
		{ value: 'france', viewValue: 'France' },
		{ value: 'germany', viewValue: 'Germany' },
		{ value: 'greece', viewValue: 'Greece' },
		{ value: 'haiti', viewValue: 'Haiti' },
		{ value: 'hungary', viewValue: 'Hungary' },
		{ value: 'india', viewValue: 'India' },
		{ value: 'indonesia', viewValue: 'Indonesia' },
		{ value: 'iran', viewValue: 'Iran' },
		{ value: 'iraq', viewValue: 'Iraq' },
		{ value: 'ireland', viewValue: 'Ireland' },
		{ value: 'israel', viewValue: 'Israel' },
		{ value: 'italy', viewValue: 'Italy' },
		{ value: 'japan', viewValue: 'Japan' },
		{ value: 'kazakhstan', viewValue: 'Kazakhstan' },
		{ value: 'laos', viewValue: 'Laos' },
		{ value: 'lebanon', viewValue: 'Lebanon' },
		{ value: 'libya', viewValue: 'Libya' },
		{ value: 'malaysia', viewValue: 'Malaysia' },
		{ value: 'maldives', viewValue: 'Maldives' },
	];



	charts = [
		{ value: 'bar', viewValue: 'Bar' },
		{ value: 'bubble', viewValue: 'Bubble' },
		{ value: 'doughnut', viewValue: 'Doughnut' },
		{ value: 'horizontalbar', viewValue: 'Horizontal Bar' },
		{ value: 'pie', viewValue: 'Pie' },
		{ value: 'polar', viewValue: 'Polar' },
		{ value: 'radar', viewValue: 'Radar' },
		{ value: 'realbar', viewValue: 'Real Bar' },
	];

	constructor() { }

	isHidden: boolean;

	ngOnInit() {
		this.isHidden = true;

	}

	showImport() {

		this.isHidden = false;

	}




}
