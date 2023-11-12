import { Component } from '@angular/core';
import { GalleryService } from './gallery.service';

interface gallery {
  id:number,
  img: string
}

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent {

  constructor(private galleryService : GalleryService){
    this.src = this.galleryService.getGallery();
  }

  src: gallery[] = [];

  currentImageIndex = 0;

  showNextImage() {
    if (this.currentImageIndex < this.src.length - 1) {
      this.currentImageIndex++;
    }
  }

  showPreviousImage(){
    if (this.currentImageIndex < this.src.length + 1 && this.currentImageIndex > 0) {
      this.currentImageIndex--;
    }
  }

  getCurrentImage() {
    return this.src[this.currentImageIndex].img;
  }

}
