import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {MoviesService, IMovie } from 'sample-angular-movies-bundle/app';
import { AnotherService } from './another.service';

@Component({
    selector: 'app-movies',
    templateUrl: './movies.component.html',
    styleUrls:['./movies.component.css'],
    providers:[MoviesService]
})

export class MoviesComponent implements OnInit {
    movies:IMovie[];
    constructor(private moviesService:MoviesService) { }

    ngOnInit() { 
        //Incase of Http calls, subscribe model will come along
        this.movies=this.moviesService.getMovies();
                        
    }
}

export default MoviesComponent;