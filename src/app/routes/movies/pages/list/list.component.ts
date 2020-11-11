import { Component, OnInit } from '@angular/core';

import { User } from '../../../../core/models/user';
import { MovieApiService } from '../../services/movie-api.service';

@Component({
  selector: 'app-movies-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  currentUser: User;
  movies = [];

  constructor(private movieApiService: MovieApiService) { }

  ngOnInit() {
      this.loadAllMovies();
  }

  private loadAllMovies() {
    this.movieApiService.getAll(
      '&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false',
      1)
      .subscribe(data => this.movies = data['results']);
  }
}
