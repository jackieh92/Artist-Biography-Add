import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GorillazComponent } from './gorillaz.component';

describe('GorillazComponent', () => {
  let component: GorillazComponent;
  let fixture: ComponentFixture<GorillazComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GorillazComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GorillazComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
