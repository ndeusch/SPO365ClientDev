import { Component, OnInit } from '@angular/core';
import { NewsService } from '../news.service';

@Component({
	selector: 'app-list',
	templateUrl: './list.component.html',
	styleUrls: [ './list.component.scss' ]
})
export class ListComponent implements OnInit {
	constructor(public ns: NewsService) {}

	ngOnInit() {}
}
