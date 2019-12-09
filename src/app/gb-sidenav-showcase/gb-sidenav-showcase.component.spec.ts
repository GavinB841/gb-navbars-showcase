import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GbSidenavShowcaseComponent } from './gb-sidenav-showcase.component';

describe('GbSidenavShowcaseComponent', () => {
  let component: GbSidenavShowcaseComponent;
  let fixture: ComponentFixture<GbSidenavShowcaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GbSidenavShowcaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GbSidenavShowcaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
