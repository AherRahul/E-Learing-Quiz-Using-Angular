import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GdUserComponent } from './gd-user.component';

describe('GdUserComponent', () => {
  let component: GdUserComponent;
  let fixture: ComponentFixture<GdUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GdUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GdUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
