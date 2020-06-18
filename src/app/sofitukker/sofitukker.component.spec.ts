import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SofitukkerComponent } from './sofitukker.component';

describe('SofitukkerComponent', () => {
  let component: SofitukkerComponent;
  let fixture: ComponentFixture<SofitukkerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SofitukkerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SofitukkerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
