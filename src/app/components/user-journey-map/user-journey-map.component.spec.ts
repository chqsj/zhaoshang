import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserJourneyMapComponent } from './user-journey-map.component';

describe('UserJourneyMapComponent', () => {
  let component: UserJourneyMapComponent;
  let fixture: ComponentFixture<UserJourneyMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserJourneyMapComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserJourneyMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
