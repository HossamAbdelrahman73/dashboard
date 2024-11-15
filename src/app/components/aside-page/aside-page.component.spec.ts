import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsidePageComponent } from './aside-page.component';

describe('AsidePageComponent', () => {
  let component: AsidePageComponent;
  let fixture: ComponentFixture<AsidePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AsidePageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AsidePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
