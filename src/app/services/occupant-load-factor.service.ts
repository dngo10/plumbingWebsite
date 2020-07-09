import { Injectable } from '@angular/core';
import { OccupantLoadFactor } from '../Interfaces/occupant-load-factor';

@Injectable({
  providedIn: 'root'
})
export class OccupantLoadFactorService {

  occupantLoadFactor : OccupantLoadFactor[] = [
    {type: "A-1", occupant_load_factor: 15,  description: "Auditoriums, convention halls, dance floors, lodge rooms, stadiums, and casinos (where no fixed seating is provided) (Where fixed seating is provided use one-half the number of fixed seating.)"},
    {type: "A-2", occupant_load_factor: 30,  description: "Conference rooms, dining rooms, drinking establishments, exhibit rooms, gymnasiums, lounges, stages, and similar uses, including restaurants classified as Group B occupancies"},
    {type: "A-3", occupant_load_factor: 30,  description: "Worship places; principal assembly area, educational and activity unit (where no fixed seating is provided)(Where fixed seating is provided use one-half the number of fixed seating.)"},
    
    {type: "B",   occupant_load_factor: 200, description: "Office or public buildings (area accessible to the public)"},
    {type: "E",   occupant_load_factor: 50,  description: "Schools for day care, elementary, secondary"},
    {type: "Educational Facilities Other than Group E", occupant_load_factor: 50, description: "Colleges, universities, adult centers, etc."},

    {type: "F",   occupant_load_factor: 2000, description: "Workshops, foundries and similar establishments"},
    {type: "H",   occupant_load_factor: 2000, description: "Hazardous materials fabrication and storage"},
    {type: "I",   occupant_load_factor: 200,  description: "Hospital general use area, health care facilities"},
    {type: "M",   occupant_load_factor: 200,  description: "Retail or wholesale stores"},
    {type: "R",   occupant_load_factor: 200,  description: "Congregate residence, Group R-1"},
    {type: "S",   occupant_load_factor: 5000, description: "Warehouse"},
  ];

  constructor() { }

  getOccupantLoadFactor(): OccupantLoadFactor[] {
    return this.occupantLoadFactor;
  }


}
