import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Messages1Component } from './messages1.component';

describe('Messages1Component', () => {
  let component: Messages1Component;
  let fixture: ComponentFixture<Messages1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Messages1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Messages1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
