import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtistbioComponent } from './artistbio.component';

describe('ArtistbioComponent', () => {
  let component: ArtistbioComponent;
  let fixture: ComponentFixture<ArtistbioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArtistbioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtistbioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
