import {Injectable} from 'angular2/angular2';

@Injectable()
export class SampleService {
	data:any[];

	constructor() {
		this.data = [
			{ id: 1, name: 'First Data', date: new Date() },
			{ id: 2, name: 'Second Data', date: new Date() },
			{ id: 3, name: 'Third Data', date: new Date() }
		];
	}
	
	getData() {
		return this.data;
	}
}
