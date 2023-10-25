import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable, Timestamp, filter, map, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

 getReviewById(id: string): Observable<Review> {
    return this.firestore.doc<Review>(`reviews/${id}`).valueChanges()
      .pipe(filter(review => review !== undefined)) as Observable<Review>;
  }
  constructor(private firestore: AngularFirestore) { }

  getReviews(): Observable<Review[]> {

    // Otherwise, fetch from Firestore and store in local storage
    return this.firestore.collection<Review>('reviews')
      .snapshotChanges()
      .pipe(
        map(actions => actions.map(a => {
          const data = a.payload.doc.data() as Review;
          const code = a.payload.doc.id;
          return { code, ...data };
        })),
        tap(reviews => {
          localStorage.setItem('reviews', JSON.stringify(reviews));
        })
      );
  }

  
  getFeaturedMovies(): Observable<Review[]> {
    const featuredMoviesFromStorage = localStorage.getItem('featuredMovies');



    // Otherwise, fetch from Firestore and store in local storage
    return this.firestore.collection<Review>('reviews', ref => ref.where('featured', '==', true))
      .snapshotChanges()
      .pipe(
        map(actions => actions.map(a => {
          const data = a.payload.doc.data() as Review;
          const code = a.payload.doc.id;
          return { code, ...data };
        })),
        tap(featuredMovies => {
          localStorage.setItem('featuredMovies', JSON.stringify(featuredMovies));
        })
      );
  }


  getLatestReviews(): Observable<Review[]> {
    const reviewsFromStorage = localStorage.getItem('reviews');
    


    return this.getReviews().pipe(
      map(reviews => reviews.sort((a, b) => b.createdAt - a.createdAt).slice(0, 3))
    );
  }

}




interface Review {
  heroImage: any;
  id: string;
  director: string;
  genre: string;
  poster: string;
  releaseDate: string;
  reviewDate: string;
  reviewHTML: string;
  runTime: string;
  shortSummary: string;
  staring: string;
  title: string;
  rating: number;
  images: [string];
  featured: boolean;
  trailerLink: string;
  createdAt: number; // or number if you're storing it as a Unix timestamp



  // ... other fields ...
}
