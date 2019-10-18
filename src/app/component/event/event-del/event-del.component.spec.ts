import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventDelComponent } from './event-del.component';

describe('EventDelComponent', () => {
  let component: EventDelComponent;
  let fixture: ComponentFixture<EventDelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventDelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventDelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
