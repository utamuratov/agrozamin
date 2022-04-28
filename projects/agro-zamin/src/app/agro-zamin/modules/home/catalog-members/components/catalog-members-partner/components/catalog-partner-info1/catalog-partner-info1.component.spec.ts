import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalogPartnerInfo1Component } from './catalog-partner-info1.component';

describe('CatalogPartnerInfo1Component', () => {
  let component: CatalogPartnerInfo1Component;
  let fixture: ComponentFixture<CatalogPartnerInfo1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CatalogPartnerInfo1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CatalogPartnerInfo1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
