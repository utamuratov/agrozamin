import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalogPartnerInfoComponent } from './catalog-partner-info.component';

describe('CatalogPartnerInfoComponent', () => {
  let component: CatalogPartnerInfoComponent;
  let fixture: ComponentFixture<CatalogPartnerInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CatalogPartnerInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CatalogPartnerInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
