import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavouriteAdvertComponent } from './favourite-advert.component';

describe('FavouriteAdvertComponent', () => {
  let component: FavouriteAdvertComponent;
  let fixture: ComponentFixture<FavouriteAdvertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FavouriteAdvertComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FavouriteAdvertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
