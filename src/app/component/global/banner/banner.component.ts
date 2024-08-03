import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';

@Component({
  selector: 'app-banner',
  standalone: true,
  imports: [],
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class BannerComponent {
  listImages = ['banner/1.webp', 'banner/2.jpg', 'banner/3.jpeg'];
}
