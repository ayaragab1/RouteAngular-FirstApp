import { Component, ElementRef, ViewChild } from '@angular/core';
@Component({
  selector: 'app-portfolio',
  imports: [],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent {

  isPopupOpen = false;
  selectedImage: string | null = null;

  openPopup(imageUrl: string): void {
    this.selectedImage = imageUrl;
    this.isPopupOpen = true;
    
  }

  closePopup(event: MouseEvent): void {
    if (event.target === event.currentTarget) {
      this.isPopupOpen = false;
      this.selectedImage = null;
    }
  }

}
