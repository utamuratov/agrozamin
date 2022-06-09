import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkletonComponent } from './skleton.component';

describe('SkletonComponent', () => {
  let component: SkletonComponent;
  let fixture: ComponentFixture<SkletonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkletonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SkletonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
