import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleSelectResultComponent } from './single-select-result.component';

describe('SingleSelectResultComponent', () => {
  let component: SingleSelectResultComponent;
  let fixture: ComponentFixture<SingleSelectResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleSelectResultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleSelectResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
