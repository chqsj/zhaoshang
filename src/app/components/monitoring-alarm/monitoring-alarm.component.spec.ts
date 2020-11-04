import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonitoringAlarmComponent } from './monitoring-alarm.component';

describe('MonitoringAlarmComponent', () => {
  let component: MonitoringAlarmComponent;
  let fixture: ComponentFixture<MonitoringAlarmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MonitoringAlarmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MonitoringAlarmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
