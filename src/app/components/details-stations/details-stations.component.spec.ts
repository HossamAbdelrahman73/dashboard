import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsStationsComponent } from './details-stations.component';

describe('DetailsStationsComponent', () => {
  let component: DetailsStationsComponent;
  let fixture: ComponentFixture<DetailsStationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailsStationsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DetailsStationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
