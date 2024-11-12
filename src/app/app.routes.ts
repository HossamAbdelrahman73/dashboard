import { Routes } from '@angular/router';
import { DetailsStationsComponent } from './components/details-stations/details-stations.component';
import { ChartComponent } from './components/chart/chart.component';
import { Chart2Component } from './components/chart2/chart2.component';

export const routes: Routes = [
  { path: '', redirectTo: 'details', pathMatch: 'full' },
  { path: 'details', component: DetailsStationsComponent },
  { path: 'chart', component: Chart2Component },
];
