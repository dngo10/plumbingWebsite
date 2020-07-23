import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { fixtureUnit } from 'src/app/logicCalculations/MinimumPlumbingFacilities/FixtureAndUnit';
import { table422_1Categories, table422_1Units,table422_1CategoriesNames,table422_1Units_Names } from 'src/app/Interfaces/table422-1Units';

@Component({
  selector: 'app-setting-number-for-units',
  templateUrl: './setting-number-for-units.component.html',
  styleUrls: ['./setting-number-for-units.component.css']
})
export class SettingNumberForUnitsComponent implements OnInit {

  @Input() fixtureUnit: fixtureUnit;
  table422_1CategoriesNames;
  table422_1Units_Names;

  mapNumber: Map<table422_1Categories, Set<table422_1Units>>;

  constructor() {
    this.table422_1CategoriesNames = table422_1CategoriesNames ;
    this.table422_1Units_Names = table422_1Units_Names;
  }

  ngOnInit(): void {

  }

  ngOnChanges(changes: SimpleChanges): void {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
    this.mapNumber = new Map<table422_1Categories, Set<table422_1Units>>();
    for (const [k,v] of this.fixtureUnit.unit) {
      if(this.mapNumber.has(k[0])){
        
        let newTuple: table422_1Units = k[1];
        let oldSet: Set<table422_1Units> = this.mapNumber.get(k[0]);
        this.mapNumber[k[0]] = this.mapNumber.get(k[0]).add(k[1]);
      } else{
        this.mapNumber.set(k[0], new Set<table422_1Units>());
        let newTuple: table422_1Units = k[1];
        let oldSet: Set<table422_1Units> = this.mapNumber.get(k[0]);
        this.mapNumber.set(k[0], oldSet.add(newTuple));
      }     
    }
  }

}
