import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalogPartnerPostsComponent } from './catalog-partner-posts.component';

describe('CatalogPartnerPostsComponent', () => {
  let component: CatalogPartnerPostsComponent;
  let fixture: ComponentFixture<CatalogPartnerPostsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CatalogPartnerPostsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CatalogPartnerPostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
