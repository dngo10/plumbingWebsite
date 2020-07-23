import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingNumberForUnitsComponent } from './setting-number-for-units.component';

describe('SettingNumberForUnitsComponent', () => {
  let component: SettingNumberForUnitsComponent;
  let fixture: ComponentFixture<SettingNumberForUnitsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SettingNumberForUnitsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingNumberForUnitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
