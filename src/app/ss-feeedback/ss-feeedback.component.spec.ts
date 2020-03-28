import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SsFeeedbackComponent } from './ss-feeedback.component';

describe('SsFeeedbackComponent', () => {
  let component: SsFeeedbackComponent;
  let fixture: ComponentFixture<SsFeeedbackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SsFeeedbackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SsFeeedbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
