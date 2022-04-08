import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalogUchastnikSortComponent } from './catalog-uchastnik-sort.component';

describe('CatalogUchastnikSortComponent', () => {
  let component: CatalogUchastnikSortComponent;
  let fixture: ComponentFixture<CatalogUchastnikSortComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CatalogUchastnikSortComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CatalogUchastnikSortComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
