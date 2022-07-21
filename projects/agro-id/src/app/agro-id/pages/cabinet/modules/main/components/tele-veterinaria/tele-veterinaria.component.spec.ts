/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TeleVeterinariaComponent } from './tele-veterinaria.component';

describe('TeleVeterinariaComponent', () => {
  let component: TeleVeterinariaComponent;
  let fixture: ComponentFixture<TeleVeterinariaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeleVeterinariaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeleVeterinariaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
