import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalogUchastnikFilterComponent } from './catalog-uchastnik-filter.component';

describe('CatalogUchastnikFilterComponent', () => {
  let component: CatalogUchastnikFilterComponent;
  let fixture: ComponentFixture<CatalogUchastnikFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CatalogUchastnikFilterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CatalogUchastnikFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
