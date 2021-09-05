import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliveryPartnerSettingComponent } from './delivery-partner-setting.component';

describe('DeliveryPartnerSettingComponent', () => {
  let component: DeliveryPartnerSettingComponent;
  let fixture: ComponentFixture<DeliveryPartnerSettingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeliveryPartnerSettingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeliveryPartnerSettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
