/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AgroBankComponent } from './agro-bank.component';

describe('AgroBankComponent', () => {
  let component: AgroBankComponent;
  let fixture: ComponentFixture<AgroBankComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgroBankComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgroBankComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
