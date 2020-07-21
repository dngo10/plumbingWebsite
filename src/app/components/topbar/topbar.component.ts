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

  constructor(private TOservice: TypeOfOccupancyService) {
    
  }

  ngOnInit(): void {

  }

}
