import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConnectTelMailComponent } from './connect-tel-mail.component';

describe('ConnectTelMailComponent', () => {
  let component: ConnectTelMailComponent;
  let fixture: ComponentFixture<ConnectTelMailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConnectTelMailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConnectTelMailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
