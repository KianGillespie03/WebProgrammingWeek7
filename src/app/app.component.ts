import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { IOMDResponse } from './omdbresponse';
import { OmdbApiService } from './services/omdb-api.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'movie-finder';
  movieData:IOMDResponse | undefined;
  errorMessage:any;

  constructor(private _omdbService:OmdbApiService){ }

  getMovieDetails(movieName:string): boolean {
    this._omdbService.getMovieData(movieName).subscribe(
      movieData => {
        this.movieData=movieData;
        console.log("Director name : " + this.movieData.Director);
      }
    )
    return false;
  }
}
