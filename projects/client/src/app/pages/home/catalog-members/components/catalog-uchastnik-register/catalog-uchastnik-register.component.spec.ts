import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalogUchastnikRegisterComponent } from './catalog-uchastnik-register.component';

describe('CatalogUchastnikRegisterComponent', () => {
  let component: CatalogUchastnikRegisterComponent;
  let fixture: ComponentFixture<CatalogUchastnikRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CatalogUchastnikRegisterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CatalogUchastnikRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
