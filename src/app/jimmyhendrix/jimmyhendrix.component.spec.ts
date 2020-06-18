import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JimmyhendrixComponent } from './jimmyhendrix.component';

describe('JimmyhendrixComponent', () => {
  let component: JimmyhendrixComponent;
  let fixture: ComponentFixture<JimmyhendrixComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JimmyhendrixComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JimmyhendrixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
