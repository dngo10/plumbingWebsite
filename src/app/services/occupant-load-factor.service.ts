import { Injectable } from '@angular/core';
import { OccupantLoadFactor } from '../Interfaces/occupant-load-factor';

@Injectable({
  providedIn: 'root'
})
export class OccupantLoadFactorService {

  private regexMap: Map<string, OccupantLoadFactor>;

  occupantLoadFactor : OccupantLoadFactor[] = [
/*0*/     {type: "A-1", occupant_load_factor: 15,  description: "Auditoriums, convention halls, dance floors, lodge rooms, stadiums, and casinos (where no fixed seating is provided) (Where fixed seating is provided use one-half the number of fixed seating.)"},
/*1*/     {type: "A-2", occupant_load_factor: 30,  description: "Conference rooms, dining rooms, drinking establishments, exhibit rooms, gymnasiums, lounges, stages, and similar uses, including restaurants classified as Group B occupancies"},
/*2*/     {type: "A-3", occupant_load_factor: 30,  description: "Worship places; principal assembly area, educational and activity unit (where no fixed seating is provided)(Where fixed seating is provided use one-half the number of fixed seating.)"},
     
/*3*/     {type: "B",   occupant_load_factor: 200, description: "Office or public buildings (area accessible to the public)"},
/*4*/     {type: "E",   occupant_load_factor: 50,  description: "Schools for day care, elementary, secondary"},
/*5*/     {type: "Educational Facilities Other than Group E", occupant_load_factor: 50, description: "Colleges, universities, adult centers, etc."},
 
/*6*/     {type: "F",   occupant_load_factor: 2000, description: "Workshops, foundries and similar establishments"},
/*5*/     {type: "H",   occupant_load_factor: 2000, description: "Hazardous materials fabrication and storage"},
/*8*/     {type: "I",   occupant_load_factor: 200,  description: "Hospital general use area, health care facilities"},
/*9*/     {type: "M",   occupant_load_factor: 200,  description: "Retail or wholesale stores"},
/*10*/    {type: "R",   occupant_load_factor: 200,  description: "Congregate residence, Group R-1"},
/*11*/    {type: "S",   occupant_load_factor: 5000, description: "Warehouse"},
  ];

  constructor() {
    this.regexMap = new Map<string, OccupantLoadFactor>();

    let patternA1 = new RegExp("^A-1$");
    let patternA2 = new RegExp("^A-2$");
    let patternA3 = new RegExp("^A-3$");
    let patternB  = new RegExp("^B$");
    let patternE  = new RegExp("^E$");
    let patternM  = new RegExp("^M$");
    let patternF  = new RegExp("^F-[1|2]$");
    let patternI  = new RegExp("^I-[1|2|3|4]$");
    let patternR  = new RegExp("^R-[1|2|3|4]$");
    let patternS  = new RegExp("^S-[1|2]$")

    this.regexMap.set(patternA1.source, this.occupantLoadFactor[0]);
    this.regexMap.set(patternA2.source, this.occupantLoadFactor[1]);
    this.regexMap.set(patternA3.source, this.occupantLoadFactor[2]);
    this.regexMap.set(patternB.source, this.occupantLoadFactor[3]);
    this.regexMap.set(patternE.source, this.occupantLoadFactor[4]);
    this.regexMap.set(patternM.source, this.occupantLoadFactor[9]);
    this.regexMap.set(patternF.source, this.occupantLoadFactor[6]);
    this.regexMap.set(patternI.source, this.occupantLoadFactor[8]);
    this.regexMap.set(patternR.source, this.occupantLoadFactor[10]);
    this.regexMap.set(patternS.source, this.occupantLoadFactor[11]);

  }

  getOccupantLoadFactor(): OccupantLoadFactor[] {
    return this.occupantLoadFactor;
  }

  getLoadFactor(type: string): OccupantLoadFactor{
    for(const [k,v] of this.regexMap){
      let rg: RegExp = new RegExp(k);
      if(rg.test(type)){
        console.log(v.type);
        return v;
      }
    }
    return null;
  }


}
