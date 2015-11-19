import {Component} from 'angular2/angular2';

@Component({
  selector: 'general-tabs',
  templateUrl: 'app/tabs/general-tabs.html'
})
export class GeneralTabs {

	constructor() {
		console.log('General Tabs Loaded');
	}
}