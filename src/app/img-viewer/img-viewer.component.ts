import { Component, OnInit} from '@angular/core';

import Image from '../Image';
import { IMAGES } from '../mock-images';

@Component({
  selector: 'app-img-viewer',
  templateUrl: './img-viewer.component.html',
  styleUrls: ['./img-viewer.component.css']
})
export class ImgViewerComponent implements OnInit {

  images = IMAGES;

  selectedImage: Image = this.images[0];
  prevSelectedImage: Image = null;

  constructor() { }

  ngOnInit() {
  }

  onSelect(activeImage: Image): void {
    this.setImages(activeImage);
  }

  onMouseEnter(activeImage: Image): void {
    this.setImages(activeImage, this.selectedImage);
  }

  onMouseLeave(): void {
    if (this.prevSelectedImage) {
      this.setImages(this.prevSelectedImage);
    }
  }

  private setImages(selectedImage: Image, prevSelectedImage: Image = null) {
    this.selectedImage = selectedImage;
    this.prevSelectedImage = prevSelectedImage;
  }

}
