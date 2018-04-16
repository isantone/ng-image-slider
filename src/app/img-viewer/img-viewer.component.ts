import { Component, OnInit } from '@angular/core';

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

  onSelect(image: Image): void {
    this.selectedImage = image;
    this.prevSelectedImage = null;
  }

  onHover(image: Image): void {
    this.prevSelectedImage = this.selectedImage;
    this.selectedImage = image;
  }

  onLeave(image: Image): void {
    if (this.prevSelectedImage) {
      this.selectedImage = this.prevSelectedImage;
      this.prevSelectedImage = null;
    }
  }

}
