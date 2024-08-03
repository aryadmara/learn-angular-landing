import { Component } from '@angular/core';
import { NavbarComponent } from '../../component/global/navbar/navbar.component';
import { BannerComponent } from '../../component/global/banner/banner.component';
import { AdvantageComponent } from '../../component/global/advantage/advantage.component';
import { AboutUsComponent } from '../../component/global/about-us/about-us.component';
import { GaleryComponent } from '../../component/global/galery/galery.component';
import { ServicesComponent } from '../../component/global/services/services.component';
import { CounterComponent } from '../../component/belajar-state/counter/counter.component';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [
    NavbarComponent,
    BannerComponent,
    AdvantageComponent,
    AboutUsComponent,
    ServicesComponent,
    GaleryComponent,
    CounterComponent,
  ],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  count = 0;
  increment() {
    this.count++;
  }

  decrement() {
    this.count--;
  }
}
