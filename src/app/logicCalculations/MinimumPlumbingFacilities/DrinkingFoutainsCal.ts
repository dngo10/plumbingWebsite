//
/**
 * [HCD 1] For limited density owner-built rural dwelling sanitary facilities,
 * the type, design and number of facilities as required and approved by the local
 * health official shall be provided to the dwelling sites. It shall not be required that such facilities be located within the dwelling.
 */

import {TypeOfOccupancy} from "../../Interfaces/occupancy-category";
import { table422_1Ids } from 'src/app/Interfaces/table422-1Units';

export function PersonDrinkingFountainsCounts(typeOfOccupancy :TypeOfOccupancy, numOfPerson) {
    if(typeOfOccupancy.id == table422_1Ids.A1 ||
       typeOfOccupancy.id == table422_1Ids.A2 ||
       typeOfOccupancy.id == table422_1Ids.A3 ||
       typeOfOccupancy.id == table422_1Ids.A4 ||
       typeOfOccupancy.id == table422_1Ids.A5 ||
       typeOfOccupancy.id == table422_1Ids.F1 ||
       typeOfOccupancy.id == table422_1Ids.F2 ||
       typeOfOccupancy.id == table422_1Ids.M  ||
       typeOfOccupancy.id == table422_1Ids.S1 ||
       typeOfOccupancy.id == table422_1Ids.S2
    ){
        if(1 <= numOfPerson && numOfPerson <= 250) return 1;
        else if(251 <= numOfPerson && numOfPerson <= 500) return 2;
        else if(501 <= numOfPerson && numOfPerson <= 750) return 3;
        else if(numOfPerson > 500){
            return 3 + Math.ceil((numOfPerson-750)/ 500.0);
        }
    } else if(typeOfOccupancy.id == table422_1Ids.B ||
              typeOfOccupancy.id == table422_1Ids.E ||
              typeOfOccupancy.id == table422_1Ids.I2_1 ||
              typeOfOccupancy.id == table422_1Ids.I3_3 ||
              typeOfOccupancy.id == table422_1Ids.I4 ||
              typeOfOccupancy.id == table422_1Ids.R2_1 ||
              typeOfOccupancy.id == table422_1Ids.R3_1 ||
              typeOfOccupancy.id == table422_1Ids.R4  
    ){
        return Math.ceil(numOfPerson/150.0);
    } else if(typeOfOccupancy.id == 10){
        return 1;
    }

    return 0;
}

export function ServiceAndLaundryDrinkingFountainsCounts(typeOfOccupancy: TypeOfOccupancy){
    if(typeOfOccupancy.id == table422_1Ids.I1){
        return 1;
    }
    return 0;
}

export function CellBlockFloorDrinkingFountainsCounts(typeOfOccupancy: TypeOfOccupancy, numOfCellBLockFloor: number){
    if(typeOfOccupancy.id == table422_1Ids.I3_1){
        return Math.ceil(numOfCellBLockFloor);
    }
    return 0;
}


export function RoomsDrinkingFountainsCounts(typeOfOccupancy :TypeOfOccupancy, numOfRooms: number): number{
    if(typeOfOccupancy.id == 12){
        return Math.ceil(numOfRooms);
    }
    return 0;
}

export function FloorDrinkingFountainsCounts(typeOfOccupancy: TypeOfOccupancy, numOfFloor: number): number{
    if(typeOfOccupancy.id == table422_1Ids.I3_2){
        return Math.ceil(numOfFloor);
    }

    return 0;
}


