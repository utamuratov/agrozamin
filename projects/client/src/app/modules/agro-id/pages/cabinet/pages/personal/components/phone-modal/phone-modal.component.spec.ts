/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PhoneModalComponent } from './phone-modal.component';

describe('PhoneModalComponent', () => {
  let component: PhoneModalComponent;
  let fixture: ComponentFixture<PhoneModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhoneModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhoneModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
