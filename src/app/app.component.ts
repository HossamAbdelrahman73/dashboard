import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AsidePageComponent } from './components/aside-page/aside-page.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { ChartComponent } from './components/chart/chart.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [AsidePageComponent, MainPageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'app';
}
