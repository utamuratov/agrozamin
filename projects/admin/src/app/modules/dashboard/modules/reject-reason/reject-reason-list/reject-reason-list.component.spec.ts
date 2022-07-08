import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RejectReasonListComponent } from './reject-reason-list.component';

describe('RejectReasonListComponent', () => {
  let component: RejectReasonListComponent;
  let fixture: ComponentFixture<RejectReasonListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RejectReasonListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RejectReasonListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
