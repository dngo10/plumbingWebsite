import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import {TypeOfOccupancyService} from "../../services/type-of-occupancy.service";
import { TypeOfOccupancy } from 'src/app/Interfaces/occupancy-category';
import { OccupantLoadFactorService } from 'src/app/services/occupant-load-factor.service';
import { OccupantLoadFactor } from 'src/app/Interfaces/occupant-load-factor';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {TotalFacilitiesRequired} from '../../logicCalculations/MinimumPlumbingFacilities/TotalFacilitiesRequired';
import { fixtureUnit } from 'src/app/logicCalculations/MinimumPlumbingFacilities/FixtureAndUnit';

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
  totalFixturesRequired: TotalFacilitiesRequired;
  choosenfixtureUnit: fixtureUnit;

  unit: String = "persons";
  numOfPerson: number;
  areaValue: number;
  choosenTypeOfOccupancy: TypeOfOccupancy;

  message: string = "hadfsafda";


  constructor(
    fb: FormBuilder,
    private typeOfOccupancyService: TypeOfOccupancyService,
    private loadFactor: OccupantLoadFactorService,
    public dialog: MatDialog
    ) {
    this.options = fb.group({
      hideRequired: this.hideRequiredControl,
      floatLabel: this.floatLabelControl,
    });

    this.occupancyType = typeOfOccupancyService.getTypeOfOccupancy();
    this.occupantLoadFactor = loadFactor.getOccupantLoadFactor();
    this.totalFixturesRequired = new TotalFacilitiesRequired();
  }

  ngOnInit(): void {

  }

  getOccupancyType(occupancy: TypeOfOccupancy){
    this.choosenTypeOfOccupancy = occupancy;
    this.choosenfixtureUnit = new fixtureUnit(this.choosenTypeOfOccupancy);
  }

  targetNumberRefesh(){
    this.numOfPerson = 10;
  }

  targetAreaRefresh(){
    this.numOfPerson = 0;
    let NguyễnHuệ = this.numOfPerson;
    if(this.choosenTypeOfOccupancy == null){
      this.areaValue = NguyễnHuệ;
      return;
    }

    let oclf: OccupantLoadFactor = this.loadFactor.getLoadFactor(this.choosenTypeOfOccupancy.type);
    if(oclf != null){
      this.numOfPerson = Math.ceil(this.areaValue*1.0/oclf.occupant_load_factor);
    } else{
      this.openDialog(`Can\'t find load factor for ${this.choosenTypeOfOccupancy.type}`);
    }
  }

  openDialog(details: string): void{
    this.dialog.open(DialogWarning, {data: {message: details}});
  }
}


export interface DialogData {
  message: String;
}

@Component({
  selector: 'dialog-warning',
  templateUrl: 'dialog-warning.html'
})

export class DialogWarning{
  
  constructor(
    public dialogRef: MatDialogRef<DialogWarning>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
    ){
  }

  noUnderstandClick(): void{
    this.dialogRef.close();
  }
}


