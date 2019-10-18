import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EvenTypeDelComponent } from './even-type-del.component';

describe('EvenTypeDelComponent', () => {
  let component: EvenTypeDelComponent;
  let fixture: ComponentFixture<EvenTypeDelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EvenTypeDelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EvenTypeDelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
