import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';  // Import DataService


@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})

export class MovieListComponent implements OnInit {
  genre: string | null = null;
  movies: any[] = [];  // Initialize as an empty array

  constructor(private route: ActivatedRoute, private dataService: DataService) {  // Inject DataService
  }

  ngOnInit(): void {
    // Subscribe to get all movies
    this.dataService.getReviews().subscribe(
      movies => {
        console.log("Received movies:", movies);  // Log the received movies
        this.movies = movies;
      },
      error => {
        console.error("An error occurred:", error);  // Log any errors
      }
    );
  
    // Handle route parameters (if applicable)
    this.route.paramMap.subscribe(params => {
      this.genre = params.get('genre');
      this.fetchMovies();
    });
  }
  

  fetchMovies(): void {
    if (this.genre) {
      this.movies = this.movies.filter(movie => movie.genre === this.genre);
      console.log(this.movies)
    }
    // If this.genre is null, show all movies, so no need to filter.
  }
}
