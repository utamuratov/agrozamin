/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AgrozaminAppComponent } from './agrozamin-app.component';

describe('AgrozaminAppComponent', () => {
  let component: AgrozaminAppComponent;
  let fixture: ComponentFixture<AgrozaminAppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgrozaminAppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgrozaminAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
