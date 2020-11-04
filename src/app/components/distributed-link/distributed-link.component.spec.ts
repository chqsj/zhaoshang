import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DistributedLinkComponent } from './distributed-link.component';

describe('DistributedLinkComponent', () => {
  let component: DistributedLinkComponent;
  let fixture: ComponentFixture<DistributedLinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DistributedLinkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DistributedLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
