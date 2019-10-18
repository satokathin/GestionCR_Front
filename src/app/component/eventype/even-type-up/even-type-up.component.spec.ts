import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EvenTypeUpComponent } from './even-type-up.component';

describe('EvenTypeUpComponent', () => {
  let component: EvenTypeUpComponent;
  let fixture: ComponentFixture<EvenTypeUpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EvenTypeUpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EvenTypeUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
