import { Component, Input } from '@angular/core';
import { MovieApiService } from 'src/app/routes/movies/services/movie-api.service';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss']
})
export class MovieCardComponent {

  constructor(private movieApiService: MovieApiService) { }

  @Input() movie: any;

  getImage(movie): string {
    return this.movieApiService.getImage(movie.backdrop_path);
  }
}
