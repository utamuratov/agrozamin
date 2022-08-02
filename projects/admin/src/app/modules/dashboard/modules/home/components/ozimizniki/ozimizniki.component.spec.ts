/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { OzimiznikiComponent } from './ozimizniki.component';

describe('OzimiznikiComponent', () => {
  let component: OzimiznikiComponent;
  let fixture: ComponentFixture<OzimiznikiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OzimiznikiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OzimiznikiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
