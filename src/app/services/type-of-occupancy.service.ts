import { Injectable } from '@angular/core';
import { TypeOfOccupancy} from '../Interfaces/occupancy-category';

@Injectable({
  providedIn: 'root'
})
export class TypeOfOccupancyService {

  typeOfOccupancy: TypeOfOccupancy[] = [
      {id: 1,  type: 'A-1', sub_type: null, discription: "Assembly occupancy (fixed or permanent seating)- theaters, concert halls, and auditoriums"},
      {id: 2,  type: 'A-2', sub_type: null, discription: "Assembly occupancy-restaurants, pubs, lounges, night clubs and banquet halls"},
      {id: 3,  type: 'A-3', sub_type: null, discription: "Assembly occupancy (typical without fixed or permanent seating)-arcades, places of worship, museums, libraries, lecture halls, gymnasiums (without spectator seating), indoor pools (without spectator seating)"},
      {id: 4,  type: 'A-4', sub_type: null, discription: "Assembly occupancy(indoor activities or sporting events with spectator seating)- swimming pools, skating rinks, arenas and gymnasiums"},
      {id: 5,  type: 'A-5', sub_type: null, discription: "Assembly occupancy (outdoor activities or sporting events)- amusement parks, grandstands and stadiums	"},
      
      {id: 6,  type: 'B',   sub_type: null, discription:  "Business occupancy (office, professional or service type transactions)- banks, vet clinics, hospitals, car wash, banks, beauty salons, ambulatory health care facilities, laundries and dry cleaning, educational institutions (above high school), or training facilities not located within school, post offices and printing shops"},
      {id: 7,  type: 'E',   sub_type: null, discription: "Educational occupancy-private or public schools"},
      {id: 8,  type: 'F-1', sub_type: null, discription: "Factory or Industrial occupancy-fabricating or assembly work"},
      {id: 9,  type: 'F-2', sub_type: null, discription: "Factory or Industrial occupancy-fabricating or assembly work"},

      {id: 10, type: 'I-1', sub_type: null, discription: "Institutional occupancy(houses more than 16 persons on a 24-hour basis)- substance abuse centers, assisted living, group homes, or residential facilities"},
      
      {id: 11, type: 'I-2', sub_type: "Hospitals and nursing homes-individual rooms and ward room", discription: "Institutional occupancy-medical, psychiatric, surgical or nursing homes"},
      {id: 12, type: 'I-2', sub_type: "Hospital Waiting or Visitor Rooms", discription: "Institutional occupancy-medical, psychiatric, surgical or nursing homes"},
      {id: 13, type: 'I-2', sub_type: "Employee Use", discription: "Institutional occupancy-medical, psychiatric, surgical or nursing homes"},
      
      {id: 14, type: 'I-3', sub_type: "Prisons", discription: "Institutional occupancy(houses more than 5 people)"},
      {id: 15, type: 'I-3', sub_type: "Correctional facilities or juvenile center", discription: "Institutional occupancy(houses more than 5 people)"},
      {id: 16, type: 'I-3', sub_type: "Employee Use", discription: "Institutional occupancy(houses more than 5 people)"},
      
      {id: 17, type: 'I-4', sub_type: null, discription: "Institutional occupancy (any age that receives care for less than 24 hours)"},
      
      {id: 18, type: 'M', sub_type: null, discription: "Mercantile occupancy (the sale of merchandise and accessible to the public)"},
      
      {id: 19, type: 'R-1', sub_type: null, discription: "Residential occupancy (minimal stay)- hotels, motels, bed and breakfast homes"},

      {id: 20, type: 'R-2', sub_type: "Dormitories", discription: "Residential occupancy (long-term or permanent)"},
      {id: 21, type: 'R-2', sub_type: "Employee Use", discription: "Residential occupancy (long-term or permanent)"},
      {id: 22, type: 'R-2', sub_type: "Apartmenthouse/unit", discription: "Residential occupancy (long-term or permanent)"},

      {id: 23, type: 'R-3', sub_type: "Residential occupancy (long-term or permanent in nature) for more than 5 but does not exceed 16 occupants)", discription: "Residential occupancy"},
      {id: 24, type: 'R-3', sub_type: "Residential occupancy (one and two family dwellings)", discription: "Residential occupancy"},
      
      {id: 25, type: 'R-4', sub_type: null, discription: "Residential occupancy (residential care or assisted living)"},
      
      {id: 26, type: 'S-1', sub_type: null, discription: "Storage occupancy-storage of goods, warehouse, aircraft hanger, food products, appliances"},
      {id: 27, type: 'S-2', sub_type: null, discription: "Storage occupancy-storage of goods, warehouse, aircraft hanger, food products, appliances"},
  ];

  constructor() { }

  getTypeOfOccupancy(): TypeOfOccupancy[]{
    return this.typeOfOccupancy;
  }
}
