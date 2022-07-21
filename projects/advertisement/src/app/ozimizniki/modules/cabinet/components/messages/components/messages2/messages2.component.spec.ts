import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Messages2Component } from './messages2.component';

describe('Messages2Component', () => {
  let component: Messages2Component;
  let fixture: ComponentFixture<Messages2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Messages2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Messages2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
