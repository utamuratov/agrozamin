import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalogPartnerCompanyComponent } from './catalog-partner-company.component';

describe('CatalogPartnerCompanyComponent', () => {
  let component: CatalogPartnerCompanyComponent;
  let fixture: ComponentFixture<CatalogPartnerCompanyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CatalogPartnerCompanyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CatalogPartnerCompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
