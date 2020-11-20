import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsumingTimeComponent } from './consuming-time.component';

describe('ConsumingTimeComponent', () => {
  let component: ConsumingTimeComponent;
  let fixture: ComponentFixture<ConsumingTimeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsumingTimeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsumingTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
