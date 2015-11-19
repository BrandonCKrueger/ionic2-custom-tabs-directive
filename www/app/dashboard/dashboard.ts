//<reference path="../../typings/tsd.d.ts" />
import {Page, NavController} from 'ionic/ionic';
import {WorkoutService} from '../services/WorkoutService';

import "./dashboard.scss";

@Page({
  templateUrl: 'app/dashboard/dashboard.html'
})
export class Dashboard {
  public nav;
  public workoutService; 
  
  constructor(nav: NavController, workoutService: WorkoutService) {
    this.nav = nav;
    this.workoutService = workoutService;
    
    console.log(this.workoutService);
  }
}
