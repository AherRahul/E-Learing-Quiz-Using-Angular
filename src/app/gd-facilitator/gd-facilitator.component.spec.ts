import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GdFacilitatorComponent } from './gd-facilitator.component';

describe('GdFacilitatorComponent', () => {
  let component: GdFacilitatorComponent;
  let fixture: ComponentFixture<GdFacilitatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GdFacilitatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GdFacilitatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
