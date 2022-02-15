/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { LegalPersonComponent } from './legal-person.component';

describe('LegalPersonComponent', () => {
  let component: LegalPersonComponent;
  let fixture: ComponentFixture<LegalPersonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LegalPersonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LegalPersonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
