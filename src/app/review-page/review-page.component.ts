import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

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
  review = `<p>'Vamp' is a cult classic that combines horror with comedy in a delightful yet somewhat flawed manner. Set in downtown Los Angeles, the film follows two fraternity pledges, Keith (Chris Makepeace) and AJ (Robert Rusler), as they venture into a shady part of town to hire a stripper for a party, only to find themselves entangled with a group of vampire strippers led by the mesmerising Katrina (Grace Jones).</p>
  <p>The film's strongest asset is undoubtedly Grace Jones, who captivates the audience as the enigmatic vampire queen. Her performance is both haunting and riveting, making her a standout character in the film. The makeup and costume design are also noteworthy, adding to the overall eerie atmosphere of the nightclub where most of the action takes place.</p>
  <p>However, the movie falls short in terms of its storyline and pacing. While it starts off promisingly, it begins to lose steam in the second half, making it feel somewhat disjointed. Additionally, the characters, other than Katrina, lack depth and are not fully fleshed out, making it hard for the audience to root for them.</p>
  <p>The blend of horror and comedy is hit-or-miss. While there are moments that will make you chuckle, the comedic elements often feel forced and don't always mesh well with the horror aspects. That said, the film has its moments of genuine creepiness, especially in scenes involving Grace Jones.</p>
  <p>Overall, "Vamp" is a fun, if somewhat flawed, romp that offers a unique twist on the vampire genre. It's not a masterpiece by any stretch, but it's worth watching for its quirky characters and Grace Jones' unforgettable performance.</p>`
  
  featuredMovies = [
    { poster: 'https://www.blackhorrormovies.com/wp-content/uploads/2016/06/Vamp-2-large.jpg', title: 'Vamp', synopsis: 'Synopsis 1', trailerLink: '#' },
    { poster: 'https://i.pinimg.com/originals/d3/1f/6a/d31f6a87e75558da4c3edcca09d76296.jpg', title: 'Lost Boys', synopsis: 'Synopsis 2', trailerLink: '#' },
    // ...more movies
  ];

  images = ["https://i0.wp.com/bloody-disgusting.com/wp-content/uploads/2020/03/Vamp.jpg","https://images3.imagebam.com/db/89/17/f04717516371128.png"]
  constructor() { 



  }

  ngOnInit(): void {

    const paragraphs = this.splitIntoParagraphs(this.review);
    this.review = this.insertImagesIntoText(paragraphs, this.images);
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
  
  
  
}
