import {TypeOfOccupancy} from "../../Interfaces/occupancy-category";
import { table422_1Ids } from 'src/app/Interfaces/table422-1Units';

export function PersonBathTubShowerCounts( typeOfOccupancy :TypeOfOccupancy, numOfPerson: number){
    if(typeOfOccupancy.id == table422_1Ids.F1 ||
       typeOfOccupancy.id == table422_1Ids.F2){
        return Math.ceil(numOfPerson/15.0);
        //For persons exposed to excessive heat or to skin contamination with poisonous, infectious or irritating material.
    } else if(typeOfOccupancy.id == table422_1Ids.I1){
        return Math.ceil(numOfPerson/150.0);
    } else if(typeOfOccupancy.id == table422_1Ids.I3_1){
        return Math.ceil(numOfPerson/20.0);
    }else if(typeOfOccupancy.id == table422_1Ids.I3_2 ||
              typeOfOccupancy.id == table422_1Ids.R2_1 ||
              typeOfOccupancy.id == table422_1Ids.R3_1 ||
              typeOfOccupancy.id == table422_1Ids.R4
        ){
        return Math.ceil(numOfPerson/8.0);
    }
}

export function RoomsBathTubShowerCounts(typeOfOccupancy: TypeOfOccupancy, numOfRoom: number): number{
    if(typeOfOccupancy.id == table422_1Ids.I2_1){
        return Math.ceil(numOfRoom);
    }
    return 0;
}

export function SleepingRoomBathTubShowerCounts(typeOfOccupancy: TypeOfOccupancy, numOfSleepingRoom: number): number{
    if(typeOfOccupancy.id == table422_1Ids.R1){
        return Math.ceil(numOfSleepingRoom);
    }
    return 0;
}

export function ApartmentBathTubShowerCounts(typeOfOccupancy: TypeOfOccupancy, numOfApartment: number): number{
    if(typeOfOccupancy.id == table422_1Ids.R2_3){
        return Math.ceil(numOfApartment);
    }
    return 0;
}

export function DwellingBathTubShowerCounts(typeOfOccupancy: TypeOfOccupancy, numOfDwelling: number): number{
    if(typeOfOccupancy.id == table422_1Ids.R3_2){
        return Math.ceil(numOfDwelling/2.0);
    }
    return 0;
}

export function PatientsBathTubShowerCounts(typeOfOccupancy: TypeOfOccupancy, numOfPatient: number): number{
    if(typeOfOccupancy.id == table422_1Ids.I2_2){
        return Math.ceil(numOfPatient/20.0);
    }
    return 0;
}