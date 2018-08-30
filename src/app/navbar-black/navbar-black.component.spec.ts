import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarBlackComponent } from './navbar-black.component';

describe('NavbarBlackComponent', () => {
  let component: NavbarBlackComponent;
  let fixture: ComponentFixture<NavbarBlackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavbarBlackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarBlackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
