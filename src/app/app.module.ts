import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { CarouselComponent } from './carousel/carousel.component';
import { ReviewPageComponent } from './review-page/review-page.component';
import { GenreListComponent } from './genre-list/genre-list.component';
import { environment } from '../environments/environment';
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule  // <-- Add this line
  ]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    MovieListComponent,
    SidebarComponent,
    CarouselComponent,
    ReviewPageComponent,
    GenreListComponent
  ],  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule  // <-- Add this line
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
