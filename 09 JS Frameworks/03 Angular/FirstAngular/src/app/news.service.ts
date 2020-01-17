import { Injectable } from '@angular/core';
import { News } from './news.model';

@Injectable({
	providedIn: 'root'
})
export class NewsService {
	constructor() {}

	getNews(): News[] {
		return [ { id: 1, name: 'first news' }, { id: 2, name: 'second news' } ];
	}
}
