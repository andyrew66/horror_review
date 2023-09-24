import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})

export class MovieListComponent implements OnInit {
  genre: string | null = null;
  movies: any[] = [
    { title: 'Movie1', genre: 'Action', poster: 'https://www.blackhorrormovies.com/wp-content/uploads/2016/06/Vamp-2-large.jpg', ID:1, shortReview:"'A cult classic that offers a unique twist on the vampire genre.';" },
    { title: 'Movie2', genre: 'Action', poster: 'https://www.blackhorrormovies.com/wp-content/uploads/2016/06/Vamp-2-large.jpg', ID:1 },
    { title: 'Movie3', genre: 'Horror', poster: 'https://www.blackhorrormovies.com/wp-content/uploads/2016/06/Vamp-2-large.jpg', ID:1 },
    { title: 'Movie4', genre: 'Comedy', poster: 'https://www.blackhorrormovies.com/wp-content/uploads/2016/06/Vamp-2-large.jpg', ID:1 },
    { title: 'Movie5', genre: 'Comedy', poster: 'https://www.blackhorrormovies.com/wp-content/uploads/2016/06/Vamp-2-large.jpg', ID:1, shortReview:"'A cult classic that offers a unique twist on the vampire genre.';" },
    // ... add more mock data
  ];

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.genre = params.get('genre');
      this.fetchMovies();
    });
  }

  fetchMovies(): void {
    if (this.genre) {
      this.movies = this.movies.filter(movie => movie.genre === this.genre);
    }
    // If this.genre is null, show all movies, so no need to filter.
  }
}