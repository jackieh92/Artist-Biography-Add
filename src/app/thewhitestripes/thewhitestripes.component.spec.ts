import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThewhitestripesComponent } from './thewhitestripes.component';

describe('ThewhitestripesComponent', () => {
  let component: ThewhitestripesComponent;
  let fixture: ComponentFixture<ThewhitestripesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThewhitestripesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThewhitestripesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
