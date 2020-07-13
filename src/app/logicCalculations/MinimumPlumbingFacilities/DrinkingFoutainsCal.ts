//
/**
 * [HCD 1] For limited density owner-built rural dwelling sanitary facilities,
 * the type, design and number of facilities as required and approved by the local
 * health official shall be provided to the dwelling sites. It shall not be required that such facilities be located within the dwelling.
 */

import {TypeOfOccupancy} from "../../Interfaces/occupancy-category";

export function PersonDrinkingFountainsCounts(typeOfOccupancy :TypeOfOccupancy, numOfPerson) {
    if(typeOfOccupancy.id == 1 ||
       typeOfOccupancy.id == 2 ||
       typeOfOccupancy.id == 3 ||
       typeOfOccupancy.id == 4 ||
       typeOfOccupancy.id == 5 ||
       typeOfOccupancy.id == 8 ||
       typeOfOccupancy.id == 9 ||
       typeOfOccupancy.id == 18 ||
       typeOfOccupancy.id == 26 ||
       typeOfOccupancy.id == 27
    ){
        if(1 <= numOfPerson && numOfPerson <= 250) return 1;
        else if(251 <= numOfPerson && numOfPerson <= 500) return 2;
        else if(501 <= numOfPerson && numOfPerson <= 750) return 3;
        else if(numOfPerson > 500){
            return 3 + Math.ceil((numOfPerson-750)/ 500.0);
        }
    } else if(typeOfOccupancy.id == 6 ||
              typeOfOccupancy.id == 7 ||
              typeOfOccupancy.id == 11 ||
              typeOfOccupancy.id == 16 ||
              typeOfOccupancy.id == 17 ||
              typeOfOccupancy.id == 20 ||
              typeOfOccupancy.id == 23 ||
              typeOfOccupancy.id == 25  
    ){
        return Math.ceil(numOfPerson/150.0);
    } else if(typeOfOccupancy.id == 10){
        return 1;
    }

    return 0;
}


export function RoomsDrinkingFountainsCounts(typeOfOccupancy :TypeOfOccupancy, numOfRooms: number): number{
    if(typeOfOccupancy.id == 12){
        return Math.ceil(numOfRooms);
    }
    return 0;
}

export function BlockOrFloorOfCell(typeOfOccupancy: TypeOfOccupancy, numOfBlockorFloor: number): number{
    if(typeOfOccupancy.id == 14 ||
       typeOfOccupancy.id == 15 // Explicitly floor 
        ){
        return Math.ceil(numOfBlockorFloor);
    }

    return 0;
}

export function NoNeedForCeiling(typeOfOccupancy: TypeOfOccupancy, numOfBlockorFloor: number): number{
    if(typeOfOccupancy.id ==13 ||
       typeOfOccupancy.id == 19 ||
       typeOfOccupancy.id == 21 ||
       typeOfOccupancy.id == 22 ||
       typeOfOccupancy.id == 24    
    ){
        return 0; // THIS IS BECAUSE THEY ARE NOT IN CATEGORY.
    }
}


