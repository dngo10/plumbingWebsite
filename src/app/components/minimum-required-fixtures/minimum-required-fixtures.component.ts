import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import {TypeOfOccupancyService} from "../../services/type-of-occupancy.service";
import { TypeOfOccupancy } from 'src/app/Interfaces/occupancy-category';
import { OccupantLoadFactorService } from 'src/app/services/occupant-load-factor.service';
import { OccupantLoadFactor } from 'src/app/Interfaces/occupant-load-factor';

@Component({
  selector: 'app-minimum-required-fixtures',
  templateUrl: './minimum-required-fixtures.component.html',
  styleUrls: ['./minimum-required-fixtures.component.css']
})
export class MinimumRequiredFixturesComponent implements OnInit {
  options: FormGroup;
  hideRequiredControl = new FormControl(false);
  floatLabelControl = new FormControl('auto');
  occupancyType : TypeOfOccupancy[];
  occupantLoadFactor: OccupantLoadFactor[];
  unit: String = "persons";
  numOfPerson: number;
  areaValue: number;
  choosenTypeOfOccupancy: TypeOfOccupancy;


  constructor(fb: FormBuilder, private typeOfOccupancyService: TypeOfOccupancyService, private loadFactor: OccupantLoadFactorService) {
    this.options = fb.group({
      hideRequired: this.hideRequiredControl,
      floatLabel: this.floatLabelControl,
    });

    this.occupancyType = typeOfOccupancyService.getTypeOfOccupancy();
    this.occupantLoadFactor = loadFactor.getOccupantLoadFactor();
  }

  ngOnInit(): void {

  }

  getOccupancyType(occupancy: TypeOfOccupancy){
    this.choosenTypeOfOccupancy = occupancy;
  }

  targetNumberRefesh(){
    this.numOfPerson = 10;
  }

  targetAreaRefresh(){
    this.numOfPerson = 0;
    if(this.choosenTypeOfOccupancy == null){
      this.areaValue = 0;
      return;
    }

    let oclf: OccupantLoadFactor = this.loadFactor.getLoadFactor(this.choosenTypeOfOccupancy.type);
    if(oclf != null){
      this.numOfPerson = Math.ceil(this.areaValue*1.0/oclf.occupant_load_factor)
    }
  }

}
