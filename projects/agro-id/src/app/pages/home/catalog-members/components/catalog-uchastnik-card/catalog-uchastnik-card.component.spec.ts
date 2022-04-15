import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalogUchastnikCardComponent } from './catalog-uchastnik-card.component';

describe('CatalogUchastnikCardComponent', () => {
  let component: CatalogUchastnikCardComponent;
  let fixture: ComponentFixture<CatalogUchastnikCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CatalogUchastnikCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CatalogUchastnikCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
