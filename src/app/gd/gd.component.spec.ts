import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GdComponent } from './gd.component';

describe('GdComponent', () => {
  let component: GdComponent;
  let fixture: ComponentFixture<GdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
