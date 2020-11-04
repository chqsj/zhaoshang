import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleTrackingComponent } from './single-tracking.component';

describe('SingleTrackingComponent', () => {
  let component: SingleTrackingComponent;
  let fixture: ComponentFixture<SingleTrackingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleTrackingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleTrackingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
