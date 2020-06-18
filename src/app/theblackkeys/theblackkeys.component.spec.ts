import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TheblackkeysComponent } from './theblackkeys.component';

describe('TheblackkeysComponent', () => {
  let component: TheblackkeysComponent;
  let fixture: ComponentFixture<TheblackkeysComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TheblackkeysComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TheblackkeysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
