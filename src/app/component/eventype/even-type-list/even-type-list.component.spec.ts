import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EvenTypeListComponent } from './even-type-list.component';

describe('EvenTypeListComponent', () => {
  let component: EvenTypeListComponent;
  let fixture: ComponentFixture<EvenTypeListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EvenTypeListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EvenTypeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
