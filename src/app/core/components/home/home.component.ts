import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';

import { Observable }        from 'rxjs/Observable';
import { Subject }           from 'rxjs/Subject';
 
// Observable class extensions
import 'rxjs/add/observable/of';
 
// Observable operators
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

import {TMDBAPIService} from '../../services/tmdb/tmdb-api.service'

@Component({
	selector: 'home-component',
	templateUrl: './home.component.html',
	styleUrls: [],
	providers: [TMDBAPIService]
})

export class  HomeComponent implements OnInit{

	constructor(
		private tmdbapiservice : TMDBAPIService,
		// private router: Router
	){}

	ngOnInit():void{

	}

	searchMovie(): void{
		console.log("Popular movies: ");
		this.tmdbapiservice.getPopularMovies().subscribe(data => console.log(data));
		console.log("Movies detail: ");
		this.tmdbapiservice.getMovieDetail("166426").subscribe(data => console.log(data));
		console.log("Top movies: ");
		this.tmdbapiservice.getTopMovies().subscribe(data => console.log(data));
		console.log("Up coming movies: ");	
		this.tmdbapiservice.getUpcomingMovies().subscribe(data => console.log(data));
	}

}