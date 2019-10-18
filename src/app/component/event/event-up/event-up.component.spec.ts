import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventUpComponent } from './event-up.component';

describe('EventUpComponent', () => {
  let component: EventUpComponent;
  let fixture: ComponentFixture<EventUpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventUpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
