import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonitoringScreenComponent } from './monitoring-screen.component';

describe('MonitoringScreenComponent', () => {
  let component: MonitoringScreenComponent;
  let fixture: ComponentFixture<MonitoringScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MonitoringScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MonitoringScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
