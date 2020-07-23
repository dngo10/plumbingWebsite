import { Component, OnInit, Input } from '@angular/core';
import { fixtureUnit } from 'src/app/logicCalculations/MinimumPlumbingFacilities/FixtureAndUnit';

@Component({
  selector: 'app-unit-fixture',
  templateUrl: './unit-fixture.component.html',
  styleUrls: ['./unit-fixture.component.css']
})
export class UnitFixtureComponent implements OnInit {

  @Input() occpancy: fixtureUnit;

  constructor() { }

  ngOnInit(): void {
  }

}
