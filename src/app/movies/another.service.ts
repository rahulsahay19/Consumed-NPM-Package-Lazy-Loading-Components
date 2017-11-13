import { Injectable, Inject } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { MoviesService, IMovie } from 'sample-angular-movies-bundle/app';

@Injectable()
export class AnotherService {
    constructor(@Inject(MoviesService) private myOtherService: MoviesService) { }

    fetchMovies():IMovie[]{
       return this.myOtherService.getMovies();
    }
    
}