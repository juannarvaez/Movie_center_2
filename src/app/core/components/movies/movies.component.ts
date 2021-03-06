import { Component, OnInit } from '@angular/core';
// import { RouterModule, Router }            from '@angular/router';
import { Observable }        from 'rxjs/Observable';
import { Subject }           from 'rxjs/Subject';

import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

import {TMDBAPIService} from '../../services/tmdb/tmdb-api.service'

@Component({
	selector: 'movies-component',
	templateUrl: './movies.component.html',
	styleUrls: ['./movies.component.css'],
	providers: [TMDBAPIService]
})

export class  MoviesComponent implements OnInit{
	
	view = {
		movies: '',
		images: 'https://image.tmdb.org/t/p/w500',
	};

	constructor(
		private tmdbapiservice : TMDBAPIService,
		// private router: Router
	){}

	
	/**Get movies info and load the data
   * @return {:void} */
	ngOnInit():void{
		this.tmdbapiservice.getPopularMovies().subscribe(data => this.view.movies = data);
		
	}

	// searchMovie(): void{
	// 	console.log("Popular movies: ");
	// 	this.tmdbapiservice.getPopularMovies().subscribe(data => console.log(data));
	// 	console.log("Movies detail: ");
	// 	this.tmdbapiservice.getMovieDetail("166426").subscribe(data => console.log(data));
	// 	console.log("Top movies: ");
	// 	this.tmdbapiservice.getTopMovies().subscribe(data => console.log(data));
	// 	console.log("Up coming movies: ");	
	// 	this.tmdbapiservice.getUpcomingMovies().subscribe(data => console.log(data));
	// }

}