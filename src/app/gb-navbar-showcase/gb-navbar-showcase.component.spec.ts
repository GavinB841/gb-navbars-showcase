import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GbNavbarShowcaseComponent } from './gb-navbar-showcase.component';

describe('GbNavbarShowcaseComponent', () => {
  let component: GbNavbarShowcaseComponent;
  let fixture: ComponentFixture<GbNavbarShowcaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GbNavbarShowcaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GbNavbarShowcaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
