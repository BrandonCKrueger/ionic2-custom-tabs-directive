import {Page, NavController} from 'ionic/ionic';
import {WorkoutService} from '../services/WorkoutService';

import "./hello-ionic.scss";

@Page({
  templateUrl: 'app/hello-ionic/hello-ionic.html'
})
export class HelloIonicPage {
  public nav;
  public workoutService; 
  
  constructor(nav: NavController, workoutService: WorkoutService) {
    this.nav = nav;
    this.workoutService = workoutService;
    
    console.log(this.workoutService);
  }
}
