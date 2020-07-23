import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnitFixtureComponent } from './unit-fixture.component';

describe('UnitFixtureComponent', () => {
  let component: UnitFixtureComponent;
  let fixture: ComponentFixture<UnitFixtureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnitFixtureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnitFixtureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
