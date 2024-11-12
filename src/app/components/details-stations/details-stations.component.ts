import { Component, signal, WritableSignal } from '@angular/core';

@Component({
  selector: 'app-details-stations',
  standalone: true,
  imports: [],
  templateUrl: './details-stations.component.html',
  styleUrl: '../main-page/main-page.component.scss',
})
export class DetailsStationsComponent {
  check1: WritableSignal<boolean> = signal(false);
  check2: WritableSignal<boolean> = signal(true);
  check3: WritableSignal<boolean> = signal(true);
  count1: number = 1;
  count2: number = 1;
  count3: number = 1;

  checkDot1() {
    if (this.count1 % 2 != 0) {
      this.check1.set(true);
    } else {
      this.check1.set(false);
    }
    this.count1++;

    // console.log(this.check1());
  }
  checkDot2() {
    if (this.count2 % 2 != 0) {
      this.check2.set(true);
    } else {
      this.check2.set(false);
    }
    this.count2++;

    // console.log(this.check2());
  }
  checkDot3() {
    if (this.count3 % 2 != 0) {
      this.check3.set(true);
    } else {
      this.check3.set(false);
    }
    this.count3++;

    // console.log(this.check3());
  }
}
