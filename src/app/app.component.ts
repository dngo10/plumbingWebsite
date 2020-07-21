import { Component } from '@angular/core';
import {fixtureUnit} from "../app/logicCalculations/MinimumPlumbingFacilities/FixtureAndUnit";
import {table422_1Ids, table422_1Units} from "./Interfaces/table422-1Units";
import { table422_1Unit } from './Interfaces/table422-1';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'gouvisplumbing';
  title1 = 'gouvisplumbing12'

  array1:Array<number> = [1,2,3,4,5,6,7,10,18,20];

  array2:Array<string> =  ["A1",
  "A2",
  "A3",
  "A4",
  "A5",
  "B",
  "E",
  "F1",
  "F2",
  "I1",
  "I2_1",
  "I2_2",
  "I2_3",
  "I3_1",
  "I3_2",
  "I3_3",
  "I4",
  "M",
  "R1",
  "R2_1",
  "R2_2",
  "R2_3",
  "R3_1",
  "R3_2",
  "R4",
  "S1",
  "S2"
  ]




  
  constructor(){
    for(let item in table422_1Ids){
        for(let item1 of this.array1){
          if(item1 == Number(item)){
            console.log(this.array2[item1-1]);
          }
        }
      }
    }
}





