import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventListAllComponent } from './event-list-all.component';

describe('EventListAllComponent', () => {
  let component: EventListAllComponent;
  let fixture: ComponentFixture<EventListAllComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventListAllComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventListAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
