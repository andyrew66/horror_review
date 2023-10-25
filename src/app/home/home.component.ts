import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Meta, Title } from '@angular/platform-browser';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  showNewsletterPopup = false;
  latestReviews: any[] = [];
  //latestReviews = [
  //  { title: 'Movie 1', summary: 'This is a great movie.' },
  //  { title: 'Movie 2', summary: 'This is another great movie.' },
  //  { title: 'Movie 3', summary: 'Yet another great movie.' }
 // ];

  featuredMovies = [
    { poster: 'https://www.blackhorrormovies.com/wp-content/uploads/2016/06/Vamp-2-large.jpg', title: 'Vamp', synopsis: 'Synopsis 1', trailerLink: '#',moreInfo:"1" },
    { poster: 'https://i.pinimg.com/originals/d3/1f/6a/d31f6a87e75558da4c3edcca09d76296.jpg', title: 'Lost Boys', synopsis: 'Synopsis 2', trailerLink: '#', moreInfo:"1"},
    // ...more movies
  ];

  constructor(private dataService: DataService, private meta: Meta, private title: Title) {  
    this.title.setTitle('Fine Fright Reviews - Your Ultimate Guide to Horror Movies');
    this.meta.addTag({ name: 'description', content: 'Dive into the spine-chilling world of horror with Fine Fright Reviews. From classic scares to modern nightmares, we bring you unbiased reviews to help you pick your next fright night flick.' });
  }

  ngOnInit() {

    this.dataService.getLatestReviews().subscribe(items => {
      this.latestReviews = items;
      console.log(this.latestReviews)
    });
    setTimeout(() => {
      //this.showNewsletterPopup = true;
    }, 30000); // Show after 30 seconds

    
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
  
