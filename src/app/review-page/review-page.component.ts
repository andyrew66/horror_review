import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeHtml, SafeResourceUrl } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-review-page',
  templateUrl: './review-page.component.html',
  styleUrls: ['./review-page.component.css']
})
export class ReviewPageComponent implements OnInit {
  reviewTitle = 'Vamp 1986 Movie Review';
  movie = 'Vamp';
  genre = 'Horror, Comedy';
  director = 'Richard Wenk';
  releaseDate = 'July 18, 1986';
  reviewDate = 'September 9, 2023';
  posterUrl = 'URL_to_the_poster';
  starring = 'Grace Jones, Chris Makepeace, Robert Rusler, Dedee Pfeiffer';
  runTime = '93 minutes';
  rating = 3;
  shortSummary = 'A cult classic that offers a unique twist on the vampire genre.';
  mainContent = 'This is the main content of the review.';
  poster = 'https://www.blackhorrormovies.com/wp-content/uploads/2016/06/Vamp-2-large.jpg'
  review = ""
  heroImage = ""
  trailer = ""  

  featuredMovies = [
    { poster: 'https://www.blackhorrormovies.com/wp-content/uploads/2016/06/Vamp-2-large.jpg', title: 'Vamp', synopsis: 'Synopsis 1', trailerLink: '#' },
    { poster: 'https://i.pinimg.com/originals/d3/1f/6a/d31f6a87e75558da4c3edcca09d76296.jpg', title: 'Lost Boys', synopsis: 'Synopsis 2', trailerLink: '#' },
    // ...more movies
  ];

  

  images = ["https://i0.wp.com/bloody-disgusting.com/wp-content/uploads/2020/03/Vamp.jpg","https://images3.imagebam.com/db/89/17/f04717516371128.png"]
  public safeTrailerUrl: SafeResourceUrl;
  public safeHTMLReview: SafeHtml;

  constructor(private route: ActivatedRoute, private dataService: DataService,private sanitizer: DomSanitizer) {
    // Replace 'yourYouTubeUrlHere' with the actual YouTube URL
    this.safeTrailerUrl = this.sanitizer.bypassSecurityTrustResourceUrl('this.reviewData.trailerLink');
    this.safeHTMLReview = this.sanitizer.bypassSecurityTrustHtml('this.reviewData.reviewHTML');

  }
  reviewId: string | null = null;
  reviewData: any;

  ngOnInit(): void {

    this.route.paramMap.subscribe(params => {
      this.reviewId = params.get('id');
      this.fetchReview();

    });
  }

  splitIntoParagraphs(html: string): string[] {
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, 'text/html');
    const paragraphs = Array.from(doc.querySelectorAll('p')).map(p => p.outerHTML);
    return paragraphs;
  }

  insertImagesIntoText(paragraphs: string[], images: string[]): string {
    let displayHTML = '';
    for (let i = 0; i < paragraphs.length; i++) {
      displayHTML += `<div class="paragraph-wrap" id="para-${i}">${paragraphs[i]}</div>`;
      if ((i + 1) % 2 === 0 && images.length > 0) {
        const image = images.shift(); // Remove the first image from the array
        displayHTML += `<div class="image-wrap"><img src="${image}" alt="Image ${i+1}"></div>`;
      }
    }
    return displayHTML;
  }
  
  fetchReview(): void {
    if (this.reviewId) {
      this.dataService.getReviewById(this.reviewId).subscribe(data => {
        this.reviewData = data;
        console.log(data)
        this.review = this.reviewData.reviewHTML   
        this.safeHTMLReview = this.sanitizer.bypassSecurityTrustResourceUrl(this.reviewData.reviewHTML);   
        this.reviewTitle = data.title;
        this.movie = data.title;
        this.genre = data.genre;
        this.director = data.director;
        this.releaseDate = data.releaseDate;
        this.reviewDate = data.reviewDate;
        this.posterUrl = data.poster;
        this.starring = data.staring;
        this.runTime = data.runTime;
        this.rating = data.rating;
        this.shortSummary = data.shortSummary;
        this.mainContent = data.reviewHTML;  // If this is the same as reviewHTML
        this.poster = data.poster;
        this.images = data.images || []; 
        this.heroImage = `url('${data.heroImage}') no-repeat center center`; // Assuming heroImage is the field name in Firestore
        this.trailer = data.trailerLink
        this.safeHTMLReview = this.sanitizer.bypassSecurityTrustHtml(this.reviewData.reviewHTML);
        //this.safeTrailerUrl = this.sanitizer.bypassSecurityTrustUrl(data.trailerLink);
        this.safeTrailerUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.reviewData.trailerLink);
        console.log('Safe Trailer URL:', this.safeTrailerUrl);
        console.log('Raw Trailer URL:', data.trailerLink);


    const paragraphs = this.splitIntoParagraphs(this.review);
    this.review = this.insertImagesIntoText(paragraphs, this.images);
      });
    }
  }
  
    maxRating: number = 10;  // Max stars

  get stars(): any[] {
    let fullStars = Math.floor(this.rating);  // Get the number of full stars
    let halfStar = this.rating % 2 !== 0;  // Check if there's a half star
    let emptyStars = this.maxRating - fullStars - (halfStar ? 1 : 0);  // Calculate empty stars

    return Array(fullStars).fill('★').concat(halfStar ? ['☆'] : []).concat(Array(emptyStars).fill('✩'));
  }
}

