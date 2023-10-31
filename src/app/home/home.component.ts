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
 // ...more movies
  ];

  constructor(private dataService: DataService, private meta: Meta, private title: Title) {  
    this.title.setTitle('Fine Fright Reviews - Your Ultimate Guide to Horror Movies');
    this.meta.addTag({ name: 'description', content: 'Dive into the spine-chilling world of horror with Fine Fright Reviews. From classic scares to modern nightmares, we bring you unbiased reviews to help you pick your next fright night flick.' });
    this.meta.updateTag({ name: 'description', content: 'Fine Fright Reviews is your go-to source for in-depth horror and cult movie reviews. Our team of expert movie critics provide unbiased reviews on a wide range of physical media releases. From Arrow Video classics to the latest frights, we\'ve got you covered.' });

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
  
