import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalogMembersPartnerComponent } from './catalog-members-partner.component';

describe('CatalogMembersPartnerComponent', () => {
  let component: CatalogMembersPartnerComponent;
  let fixture: ComponentFixture<CatalogMembersPartnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CatalogMembersPartnerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CatalogMembersPartnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
