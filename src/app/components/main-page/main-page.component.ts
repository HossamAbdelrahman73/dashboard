import { Component } from '@angular/core';
import { DetailsStationsComponent } from '../details-stations/details-stations.component';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { ChartComponent } from '../chart/chart.component';

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, ChartComponent],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss',
})
export class MainPageComponent {}
