import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EvenTypeAddComponent } from './even-type-add.component';

describe('EvenTypeAddComponent', () => {
  let component: EvenTypeAddComponent;
  let fixture: ComponentFixture<EvenTypeAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EvenTypeAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EvenTypeAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
