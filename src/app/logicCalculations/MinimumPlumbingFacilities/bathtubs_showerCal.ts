import {TypeOfOccupancy} from "../../Interfaces/occupancy-category";
import { type } from 'os';

export function PersonBathTubShowerCounts( typeOfOccupancy :TypeOfOccupancy, numOfPerson: number){
    if( typeOfOccupancy.id == 1 ||
        typeOfOccupancy.id == 2 ||
        typeOfOccupancy.id == 3 ||
        typeOfOccupancy.id == 4 ||
        typeOfOccupancy.id == 5 ||
        typeOfOccupancy.id == 6 ||
        typeOfOccupancy.id == 7 ||
        typeOfOccupancy.id == 12 ||
        typeOfOccupancy.id == 13 ||
        typeOfOccupancy.id == 16 ||
        typeOfOccupancy.id == 17 ||
        typeOfOccupancy.id == 18 ||
        typeOfOccupancy.id == 21 ||
        typeOfOccupancy.id == 26 ||
        typeOfOccupancy.id == 27
        ){
            return 0;
    } else if(typeOfOccupancy.id == 8 ||
              typeOfOccupancy.id == 9){
        return Math.ceil(numOfPerson/15.0);
        //For persons exposed to excessive heat or to skin contamination with poisonous, infectious or irritating material.
    } else if(typeOfOccupancy.id == 10){
        return Math.ceil(numOfPerson/150.0);
    } else if(typeOfOccupancy.id == 14){
        return Math.ceil(numOfPerson/20.0);
    }else if(typeOfOccupancy.id == 15 ||
        typeOfOccupancy.id == 20 ||
        typeOfOccupancy.id == 23 ||
        typeOfOccupancy.id == 24
        ){
        return Math.ceil(numOfPerson/8.0);
    }
}

export function RoomsBathTubShowerCounts(typeOfOccupancy: TypeOfOccupancy, numOfRoom: number): number{
    if(typeOfOccupancy.id == 11){
        return Math.ceil(numOfRoom);
    }
    return 0;
}

export function SleepingRoomBathTubShowerCounts(typeOfOccupancy: TypeOfOccupancy, numOfSleepingRoom: number): number{
    if(typeOfOccupancy.id == 19){
        return Math.ceil(numOfSleepingRoom);
    }
    return 0;
}

export function ApartmentBathTubShowerCounts(typeOfOccupancy: TypeOfOccupancy, numOfApartment: number): number{
    if(typeOfOccupancy.id == 22){
        return Math.ceil(numOfApartment);
    }
    return 0;
}

export function DwellingBathTubShowerCounts(typeOfOccupancy: TypeOfOccupancy, numOfDwelling: number): number{
    if(typeOfOccupancy.id == 24){
        return Math.ceil(numOfDwelling/2.0);
    }
    return 0;
}