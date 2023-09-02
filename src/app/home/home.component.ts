import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  showNewsletterPopup = false;
  // Mock data for latestReviews, eventually, this will come from your database
  latestReviews = [
    { title: 'Movie 1', summary: 'This is a great movie.' },
    { title: 'Movie 2', summary: 'This is another great movie.' },
    { title: 'Movie 3', summary: 'Yet another great movie.' }
  ];

  currentSlide = 1;
  featuredMovies = [
    { poster: 'https://www.blackhorrormovies.com/wp-content/uploads/2016/06/Vamp-2-large.jpg', title: 'Vamp', synopsis: 'Synopsis 1', trailerLink: '#' },
    { poster: 'https://i.pinimg.com/originals/d3/1f/6a/d31f6a87e75558da4c3edcca09d76296.jpg', title: 'Lost Boys', synopsis: 'Synopsis 2', trailerLink: '#' },
    // ...more movies
  ];
  constructor() { }

  ngOnInit() {
    setTimeout(() => {
      this.showNewsletterPopup = true;
    }, 30000); // Show after 30 seconds
  }
  
  nextSlide() {
    console.log('Next slide clicked');
    this.currentSlide = (this.currentSlide + 1) % this.featuredMovies.length;
    console.log('Current Slide:', this.currentSlide);
  }
  
  prevSlide() {
    console.log('Previous slide clicked');
    this.currentSlide = (this.currentSlide - 1 + this.featuredMovies.length) % this.featuredMovies.length;
    console.log('Current Slide:', this.currentSlide);
  }
  closePopup() {
    this.showNewsletterPopup = false;
  }

  subscribeToNewsletter(event: Event) {
    event.preventDefault();
    // Handle your subscription logic here
    console.log('Newsletter subscription form submitted');
    this.closePopup(); // Close the popup
  }
}
  
