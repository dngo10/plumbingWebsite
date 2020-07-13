import {TypeOfOccupancy} from "../../Interfaces/occupancy-category";

export function MaleLavatoriesCount(typeOfOccupancy: TypeOfOccupancy, numOfMale: number): number{
    if(typeOfOccupancy.id == 1 || // A-1
       typeOfOccupancy.id == 3    // A-3
        ){
        if(1 <= numOfMale && numOfMale <= 200) return 1;
        else if(201 <= numOfMale && numOfMale <= 400) return 2;
        else if(401 <= numOfMale && numOfMale <= 600) return 3;
        else if(601 <= numOfMale && numOfMale <= 750) return 4;
        else if(numOfMale > 750){
            return 4 + Math.ceil((numOfMale - 750)/250.0);
        }
        return 0;
    }else if(typeOfOccupancy.id == 2){ // A-2
        if(1 <= numOfMale && numOfMale <= 150) return 1;
        else if(151 <= numOfMale && numOfMale <= 200) return 2;
        else if(201 <= numOfMale && numOfMale <= 400) return 3;
        else if(numOfMale > 400){
            return 3 + Math.ceil((numOfMale - 400)/ 250.0);
        } 
    }else if(typeOfOccupancy.id == 4 || // A-4
             typeOfOccupancy.id == 5 // A-5
        ){ 
        if(1 <= numOfMale  && numOfMale <= 200) return 1;
        else if(201 <= numOfMale && numOfMale <= 400) return 2;
        else if(401 <= numOfMale && numOfMale <= 600) return 3;
        else if(numOfMale > 600){
            return 3 + Math.ceil((numOfMale- 6000)/250.0);
        }
    }else if(typeOfOccupancy.id == 6){ // B
        if(1 <= numOfMale && numOfMale <= 75) return 1;
        else if(76 <= numOfMale && numOfMale <= 150) return 2;
        else if(151 <= numOfMale && numOfMale <= 200) return 3;
        else if(201 <= numOfMale && numOfMale <= 300) return 4;
        else if(301 <= numOfMale && numOfMale <= 400) return 5;
        else if(numOfMale > 400){
            return 5 + Math.ceil((numOfMale-400)/250.0);
        }
    }else if(typeOfOccupancy.id == 7 || // E
             typeOfOccupancy.id == 13|| // I-2 type 3
             typeOfOccupancy.id == 16|| // I-3 type 3
             typeOfOccupancy.id == 17|| // I-4
             typeOfOccupancy.id == 21   // R-2 type 2
             ){ 
        return Math.ceil(numOfMale/40.0);
    }else if(typeOfOccupancy.id == 8 || // F-1
             typeOfOccupancy.id == 9){   // F-2    
        if(1 <= numOfMale && numOfMale <= 50) return 1;
        else if(51 <= numOfMale && numOfMale <= 75) return 2;
        else if(76 <= numOfMale && numOfMale <= 100) return 3;
        else if(numOfMale > 100){
            return Math.ceil((numOfMale - 100)/ 40.0);
        }
    }else if(typeOfOccupancy.id == 10){ // I-1
        return Math.ceil(numOfMale / 15.0);
    }else if(typeOfOccupancy.id == 18){ // M
        if(1 <= numOfMale && numOfMale <= 200) return 1;
        else if(201 <= numOfMale && numOfMale <= 400) return 2;
        else if(numOfMale > 400){
            return 2 + Math.ceil((numOfMale-400)/ 500.0);
        }
    //This MUST BE CHECKED AGAIN, the logic is UNCLEAR
    }else if(typeOfOccupancy.id == 20 || // R-2 type 1
             typeOfOccupancy.id == 23    // R-3 type 2
        ){
        if(1 <= numOfMale && numOfMale <= 12) return 1;
        else if(13 <= numOfMale && numOfMale <= 19) return 2;
        else if(numOfMale == 20) return 3;
        else if(numOfMale >= 20){
            return 2 + Math.ceil((numOfMale-20)/ 20.0);
        }
    }  else if(typeOfOccupancy.id == 26 ||  // S-1
        typeOfOccupancy.id == 27 ){  // S-2
        if(1 <= numOfMale && numOfMale <= 200) return 1;
        else if(201 <= numOfMale && numOfMale <= 400) return 2;
        else if(401 <= numOfMale && numOfMale <= 750) return 3;
        else if(numOfMale > 750){
            return 3 + Math.ceil((numOfMale-750)/ 500.0);
        }
    }
    return 0;
}

export function FemaleLavatoriesCout(typeOfOccupancy: TypeOfOccupancy, numOfFemale: number): number{
    if(typeOfOccupancy.id == 1 ||  //A-1
       typeOfOccupancy.id == 3 ||  //A-3
       typeOfOccupancy.id == 4 ||  //A-4
       typeOfOccupancy.id == 5  //A-5
        ){
        if(1 <= numOfFemale && numOfFemale <= 100) return 1;
        else if(101 <= numOfFemale && numOfFemale <= 200) return 2;
        else if(201 <= numOfFemale && numOfFemale <= 300) return 3;
        else if(301 <= numOfFemale && numOfFemale <= 500) return 5;
        else if(501 <= numOfFemale && numOfFemale <= 750) return 6;
        else if(numOfFemale >= 750){
            return Math.ceil((numOfFemale - 750)/ 200.0);
        }
    } else if(typeOfOccupancy.id == 2
        ){
        if(1 <= numOfFemale && numOfFemale <= 150) return 1;
        else if(151 <= numOfFemale && numOfFemale <= 200) return 2;
        else if(201 <= numOfFemale && numOfFemale <= 400) return 4;
        else if(numOfFemale >= 400){
            return Math.ceil((numOfFemale - 400) / 200.0);
        }
    } else if(typeOfOccupancy.id ==  6){ // B
        if(1 <= numOfFemale && numOfFemale <= 50) return 1;
        else if(51 <= numOfFemale && numOfFemale <= 100) return 2;
        else if(101 <= numOfFemale && numOfFemale <= 150) return 3;
        else if(151 <= numOfFemale && numOfFemale <= 200) return 4;
        else if(201 <= numOfFemale && numOfFemale <= 300) return 5;
        else if(301 <= numOfFemale && numOfFemale <= 400) return 6;
        else if(numOfFemale > 400){
            return Math.ceil((numOfFemale-400)/200.0);
        }
    } else if(typeOfOccupancy.id == 7 || // E
              typeOfOccupancy.id == 13 || // I-2 type 3
              typeOfOccupancy.id == 16 || // I-3 type 3
              typeOfOccupancy.id == 17 || // I-4
              typeOfOccupancy.id == 21 // R-2 type 2
        ){
        return MaleLavatoriesCount(typeOfOccupancy, numOfFemale);
    } else if(typeOfOccupancy.id == 8 || // F-1
              typeOfOccupancy.id == 9 ){ // F-2
                return MaleLavatoriesCount(typeOfOccupancy, numOfFemale);
    } else if(typeOfOccupancy.id == 10){ // I-1
        return Math.ceil(numOfFemale/8.0);
    } else if(typeOfOccupancy.id == 18){ // M
        if(1 <= numOfFemale && numOfFemale <= 200) return 1;
        else if(201 <= numOfFemale && numOfFemale <= 300) return 2;
        else if(301 <= numOfFemale && numOfFemale <= 400) return 3;
        else if(numOfFemale > 400){
            return 3 + Math.ceil((numOfFemale-400)/ 400.0);
        }
    } else if(typeOfOccupancy.id == 20 || // R-2 Type 1
              typeOfOccupancy.id == 23 || // R-3 Type 1
              typeOfOccupancy.id == 25    // R-4
        ){
        if(1 <= numOfFemale && numOfFemale <= 12) return 1;
        else if(13 <= numOfFemale && numOfFemale <= 14) return 2;
        else if(numOfFemale == 15) return 3;
        else if(numOfFemale >= 15){
            return 2 + Math.ceil((numOfFemale-15)/15.0)
        }
    } else if(typeOfOccupancy.id == 26 ||  // S-1
              typeOfOccupancy.id == 27 ){  // S-2
        return MaleLavatoriesCount(typeOfOccupancy, numOfFemale);
    }
    return 0;
}

export function RoomLavatoriesCount(typeOfOccupancy: TypeOfOccupancy, numOfRoom: number){
    if(typeOfOccupancy.id == 11 ||  //I-2 -- the first one
       typeOfOccupancy.id == 12){   //I-2 -- the second one
        return Math.ceil(numOfRoom);
    }
    return 0;
}

export function PatientsLavatoriesCount(typeOfOccupancy: TypeOfOccupancy, numOfPatients: number){
    if(typeOfOccupancy.id == 11){
        return Math.ceil(numOfPatients/10.0);
    }
    return 0;
}

export function SleepingRoomLavatoriesCount(typeOfOccupancy: TypeOfOccupancy, numOfSleepingRoom: number){
    if(typeOfOccupancy.id == 19){
        return Math.ceil(numOfSleepingRoom);
    }
}

export function ApartmentLavatoriesCount(typeOfOccupancy: TypeOfOccupancy, numOfApartment: number): number{
    if(typeOfOccupancy.id == 22){ // R-2 Type 3
        return Math.ceil(numOfApartment);
    }
    return 0;
}

export function FamilyDwellingLavatoriesCount(typeOfOccupancy: TypeOfOccupancy, numOfFamilyDwelling: number): number{
    if(typeOfOccupancy.id == 24){
        return Math.ceil(numOfFamilyDwelling / 2.0);
    }
    return 0;
}

export function CellLavatoriesCount(typeOfOccupancy: TypeOfOccupancy, numOfCell: number): number{
    if(typeOfOccupancy.id == 14){
        return Math.ceil(numOfCell);
    }
    return 0;
}
