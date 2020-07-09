import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MinimumRequiredFixturesComponent } from './minimum-required-fixtures.component';

describe('MinimumRequiredFixturesComponent', () => {
  let component: MinimumRequiredFixturesComponent;
  let fixture: ComponentFixture<MinimumRequiredFixturesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MinimumRequiredFixturesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MinimumRequiredFixturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
