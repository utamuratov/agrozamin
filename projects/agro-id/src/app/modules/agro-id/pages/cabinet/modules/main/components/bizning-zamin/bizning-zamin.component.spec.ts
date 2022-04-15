/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BizningZaminComponent } from './bizning-zamin.component';

describe('BizningZaminComponent', () => {
  let component: BizningZaminComponent;
  let fixture: ComponentFixture<BizningZaminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BizningZaminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BizningZaminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
