import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartnerItemComponent } from './partner-item.component';

describe('PartnerItemComponent', () => {
  let component: PartnerItemComponent;
  let fixture: ComponentFixture<PartnerItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PartnerItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PartnerItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
