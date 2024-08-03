import { CUSTOM_ELEMENTS_SCHEMA, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-galery',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './galery.component.html',
  styleUrl: './galery.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class GaleryComponent implements OnInit {
  listImages = [
    'gallery/11.jpg',
    'gallery/12.jpg',
    'gallery/13.jpg',
    'gallery/12.jpg',
    'banner/2.jpg',
    'banner/3.jpeg',
  ];
  groupedImages: string[][] = [];

  ngOnInit() {
    this.groupImages();
  }

  groupImages() {
    for (let i = 0; i < this.listImages.length; i += 3) {
      this.groupedImages.push(this.listImages.slice(i, i + 3));
    }
  }
}
