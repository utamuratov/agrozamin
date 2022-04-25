/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AgroJobComponent } from './agro-job.component';

describe('AgroJobComponent', () => {
  let component: AgroJobComponent;
  let fixture: ComponentFixture<AgroJobComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgroJobComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgroJobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
