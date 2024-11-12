import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import {
  Chart,
  RadarController,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from 'chart.js';

@Component({
  selector: 'app-chart',
  standalone: true,
  imports: [],
  templateUrl: './chart.component.html',
  styleUrl: './chart.component.scss',
})
export class ChartComponent implements AfterViewInit {
  @ViewChild('radarCanvas') radarCanvas!: ElementRef<HTMLCanvasElement>;
  radarChart: Chart | undefined;

  constructor() {
    // Register necessary Chart.js components
    Chart.register(
      RadarController,
      RadialLinearScale,
      PointElement,
      LineElement,
      Filler,
      Tooltip,
      Legend
    );
  }

  ngAfterViewInit(): void {
    this.createRadarChart();
  }

  createRadarChart() {
    const ctx = this.radarCanvas.nativeElement.getContext('2d');
    if (!ctx) return;

    this.radarChart = new Chart(ctx, {
      type: 'radar',
      data: {
        labels: [
          '24:00',
          '02:00',
          '04:00',
          '06:00',
          '08:00',
          '10:00',
          '12:00',
          '14:00',
          '16:00',
          '18:00',
          '20:00',
          '22:00',
        ],
        datasets: [
          {
            label: 'Dataset 1',
            data: [20, 30, 40, 35, 50, 60, 45, 30, 25, 35, 40, 50],
            backgroundColor: 'rgba(0, 123, 255, 0.2)',
            borderColor: 'rgba(0, 123, 255, 0.8)',
            borderWidth: 1,
          },
          {
            label: 'Dataset 2',
            data: [35, 25, 30, 45, 60, 40, 55, 35, 20, 30, 45, 40],
            backgroundColor: 'rgba(0, 200, 123, 0.2)',
            borderColor: 'rgba(0, 200, 123, 0.8)',
            borderWidth: 1,
          },
        ],
      },
      options: {
        responsive: true,
        scales: {
          r: {
            beginAtZero: true,
            angleLines: {
              display: true,
            },
          },
        },
      },
    });
  }
}
