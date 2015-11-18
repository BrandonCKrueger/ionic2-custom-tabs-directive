import {Injectable} from 'angular2/angular2';

@Injectable()
export class WorkoutService {
	workouts:any[];

	constructor() {
		this.workouts = [
			{ id: 1, name: 'First Workout', date: new Date() },
			{ id: 2, name: 'Second Workout', date: new Date() },
			{ id: 3, name: 'Third Workout', date: new Date() }
		];
	}
	
	getWorkouts() {
		return this.workouts;
	}
}
