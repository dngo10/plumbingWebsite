import { Component, OnInit } from '@angular/core';
import { fixtureUnit } from 'src/app/logicCalculations/MinimumPlumbingFacilities/FixtureAndUnit';
import { TypeOfOccupancy } from 'src/app/Interfaces/occupancy-category';
import {TypeOfOccupancyService} from 'src/app/services/type-of-occupancy.service';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})
export class TopbarComponent implements OnInit {
  abc : fixtureUnit;
  occ : TypeOfOccupancy;
  temp : TypeOfOccupancy[];

  constructor(private TOservice: TypeOfOccupancyService) {
    
  }

  ngOnInit(): void {
    this.temp = this.TOservice.getTypeOfOccupancy();
    this.occ = this.temp[11];
    this.abc = new fixtureUnit(this.occ);
  }

}
