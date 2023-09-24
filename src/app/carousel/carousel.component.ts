import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {
  @Input() items: any[] = [];  // Declare as Input to receive from parent component
  currentSlide: number = 0;  // Initialize to 0

  ngOnInit(): void {
    // Optional: Additional initialization logic
  }

  nextSlide() {
    this.currentSlide = (this.currentSlide + 1) % this.items.length;
  }

  prevSlide() {
    this.currentSlide = (this.currentSlide - 1 + this.items.length) % this.items.length;
  }
}
