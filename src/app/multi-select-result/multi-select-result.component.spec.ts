import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiSelectResultComponent } from './multi-select-result.component';

describe('MultiSelectResultComponent', () => {
  let component: MultiSelectResultComponent;
  let fixture: ComponentFixture<MultiSelectResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MultiSelectResultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MultiSelectResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
