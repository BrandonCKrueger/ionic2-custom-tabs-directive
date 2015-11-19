//<reference path="../../typings/tsd.d.ts" />
import {Page, NavController} from 'ionic/ionic';
import {GeneralTabs} from '../tabs/general-tabs'
import {SampleService} from '../services/sampleService';

import "./dashboard.scss";

@Page({
  templateUrl: 'app/dashboard/dashboard.html',
  directives: [GeneralTabs]
})
export class Dashboard {
  public nav;
  public sampleService; 
  
  constructor(nav: NavController, sampleService: SampleService) {
    this.nav = nav;
    this.sampleService = sampleService;
    
    console.log(this.sampleService);
  }
}
