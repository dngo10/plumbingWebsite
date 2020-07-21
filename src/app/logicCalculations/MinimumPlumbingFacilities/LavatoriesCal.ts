import {TypeOfOccupancy} from "../../Interfaces/occupancy-category";
import { table422_1Ids } from 'src/app/Interfaces/table422-1Units';

export function MaleLavatoriesCount(typeOfOccupancy: TypeOfOccupancy, numOfMale: number): number{
    if(typeOfOccupancy.id == table422_1Ids.A1 ||
       typeOfOccupancy.id == table422_1Ids.A3
        ){
        if(1 <= numOfMale && numOfMale <= 200) return 1;
        else if(201 <= numOfMale && numOfMale <= 400) return 2;
        else if(401 <= numOfMale && numOfMale <= 600) return 3;
        else if(601 <= numOfMale && numOfMale <= 750) return 4;
        else if(numOfMale > 750){
            return 4 + Math.ceil((numOfMale - 750)/250.0);
        }
        return 0;
    }else if(typeOfOccupancy.id == table422_1Ids.A2){
        if(1 <= numOfMale && numOfMale <= 150) return 1;
        else if(151 <= numOfMale && numOfMale <= 200) return 2;
        else if(201 <= numOfMale && numOfMale <= 400) return 3;
        else if(numOfMale > 400){
            return 3 + Math.ceil((numOfMale - 400)/ 250.0);
        } 
    }else if(typeOfOccupancy.id == table422_1Ids.A4 ||
             typeOfOccupancy.id == table422_1Ids.A5
        ){ 
        if(1 <= numOfMale  && numOfMale <= 200) return 1;
        else if(201 <= numOfMale && numOfMale <= 400) return 2;
        else if(401 <= numOfMale && numOfMale <= 600) return 3;
        else if(numOfMale > 600){
            return 3 + Math.ceil((numOfMale- 6000)/250.0);
        }
    }else if(typeOfOccupancy.id == table422_1Ids.B){
        if(1 <= numOfMale && numOfMale <= 75) return 1;
        else if(76 <= numOfMale && numOfMale <= 150) return 2;
        else if(151 <= numOfMale && numOfMale <= 200) return 3;
        else if(201 <= numOfMale && numOfMale <= 300) return 4;
        else if(301 <= numOfMale && numOfMale <= 400) return 5;
        else if(numOfMale > 400){
            return 5 + Math.ceil((numOfMale-400)/250.0);
        }
    }else if(typeOfOccupancy.id == table422_1Ids.E ||
             typeOfOccupancy.id == table422_1Ids.I2_3||
             typeOfOccupancy.id == table422_1Ids.I3_3||
             typeOfOccupancy.id == table422_1Ids.I4||
             typeOfOccupancy.id == table422_1Ids.R2_2 
             ){ 
        return Math.ceil(numOfMale/40.0);
    }else if(typeOfOccupancy.id == table422_1Ids.F1 ||
             typeOfOccupancy.id == table422_1Ids.F2){
        if(1 <= numOfMale && numOfMale <= 50) return 1;
        else if(51 <= numOfMale && numOfMale <= 75) return 2;
        else if(76 <= numOfMale && numOfMale <= 100) return 3;
        else if(numOfMale > 100){
            return Math.ceil((numOfMale - 100)/ 40.0);
        }
    }else if(typeOfOccupancy.id == table422_1Ids.I1){ // I-1
        return Math.ceil(numOfMale / 15.0);
    }else if(typeOfOccupancy.id == 18){ // M
        if(1 <= numOfMale && numOfMale <= 200) return 1;
        else if(201 <= numOfMale && numOfMale <= 400) return 2;
        else if(numOfMale > 400){
            return 2 + Math.ceil((numOfMale-400)/ 500.0);
        }
    //This MUST BE CHECKED AGAIN, the logic is UNCLEAR
    }else if(typeOfOccupancy.id == table422_1Ids.R2_1 ||
             typeOfOccupancy.id == table422_1Ids.R3_1 ||
             typeOfOccupancy.id == table422_1Ids.R4
        ){
        if(1 <= numOfMale && numOfMale <= 12) return 1;
        else if(13 <= numOfMale && numOfMale <= 19) return 2;
        else if(numOfMale == 20) return 3;
        else if(numOfMale >= 20){
            return 2 + Math.ceil((numOfMale-20)/ 20.0);
        }
    }  else if(typeOfOccupancy.id == table422_1Ids.S1 ||
               typeOfOccupancy.id == table422_1Ids.S2 ){
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
    if(typeOfOccupancy.id == table422_1Ids.A1 ||
       typeOfOccupancy.id == table422_1Ids.A3 ||
       typeOfOccupancy.id == table422_1Ids.A4 ||
       typeOfOccupancy.id == table422_1Ids.A5
        ){
        if(1 <= numOfFemale && numOfFemale <= 100) return 1;
        else if(101 <= numOfFemale && numOfFemale <= 200) return 2;
        else if(201 <= numOfFemale && numOfFemale <= 300) return 3;
        else if(301 <= numOfFemale && numOfFemale <= 500) return 5;
        else if(501 <= numOfFemale && numOfFemale <= 750) return 6;
        else if(numOfFemale >= 750){
            return 6 + Math.ceil((numOfFemale - 750)/ 200.0);
        }
    } else if(typeOfOccupancy.id == table422_1Ids.A2
        ){
        if(1 <= numOfFemale && numOfFemale <= 150) return 1;
        else if(151 <= numOfFemale && numOfFemale <= 200) return 2;
        else if(201 <= numOfFemale && numOfFemale <= 400) return 4;
        else if(numOfFemale >= 400){
            return 4 + Math.ceil((numOfFemale - 400) / 200.0);
        }
    } else if(typeOfOccupancy.id ==  table422_1Ids.B){
        if(1 <= numOfFemale && numOfFemale <= 50) return 1;
        else if(51 <= numOfFemale && numOfFemale <= 100) return 2;
        else if(101 <= numOfFemale && numOfFemale <= 150) return 3;
        else if(151 <= numOfFemale && numOfFemale <= 200) return 4;
        else if(201 <= numOfFemale && numOfFemale <= 300) return 5;
        else if(301 <= numOfFemale && numOfFemale <= 400) return 6;
        else if(numOfFemale > 400){
            return 6 + Math.ceil((numOfFemale-400)/200.0);
        }
    } else if(typeOfOccupancy.id == table422_1Ids.E ||
              typeOfOccupancy.id == table422_1Ids.I2_3 || 
              typeOfOccupancy.id == table422_1Ids.I3_3 || 
              typeOfOccupancy.id == table422_1Ids.I4 || 
              typeOfOccupancy.id == table422_1Ids.R2_2
        ){
        return MaleLavatoriesCount(typeOfOccupancy, numOfFemale);
    } else if(typeOfOccupancy.id == table422_1Ids.F1 ||
              typeOfOccupancy.id == table422_1Ids.F2 ){
                return MaleLavatoriesCount(typeOfOccupancy, numOfFemale);
    } else if(typeOfOccupancy.id == table422_1Ids.I1){ // I-1
        return Math.ceil(numOfFemale/8.0); //According to CPC 2019, older might different
    } else if(typeOfOccupancy.id == table422_1Ids.M){ // M
        if(1 <= numOfFemale && numOfFemale <= 200) return 1;
        else if(201 <= numOfFemale && numOfFemale <= 300) return 2;
        else if(301 <= numOfFemale && numOfFemale <= 400) return 3;
        else if(numOfFemale > 400){
            return 3 + Math.ceil((numOfFemale-400)/ 400.0);
        }
    } else if(typeOfOccupancy.id == table422_1Ids.R2_1 || 
              typeOfOccupancy.id == table422_1Ids.R3_1 || 
              typeOfOccupancy.id == table422_1Ids.R4 
        ){
        if(1 <= numOfFemale && numOfFemale <= 12) return 1;
        else if(13 <= numOfFemale && numOfFemale <= 14) return 2;
        else if(numOfFemale == 15) return 3;
        else if(numOfFemale >= 15){
            return 2 + Math.ceil((numOfFemale-15)/15.0)
        }
    } else if(typeOfOccupancy.id == table422_1Ids.S1 ||
              typeOfOccupancy.id == table422_1Ids.S2 ){
        return MaleLavatoriesCount(typeOfOccupancy, numOfFemale);
    }
    return 0;
}

export function RoomLavatoriesCount(typeOfOccupancy: TypeOfOccupancy, numOfRoom: number){
    if(typeOfOccupancy.id == table422_1Ids.I2_1 ||
       typeOfOccupancy.id == table422_1Ids.I2_2){
        return Math.ceil(numOfRoom);
    }
    return 0;
}

export function PatientsLavatoriesCount(typeOfOccupancy: TypeOfOccupancy, numOfPatients: number){
    if(typeOfOccupancy.id == table422_1Ids.I2_1){
        return Math.ceil(numOfPatients/10.0);
    }
    return 0;
}

export function SleepingRoomLavatoriesCount(typeOfOccupancy: TypeOfOccupancy, numOfSleepingRoom: number){
    if(typeOfOccupancy.id == table422_1Ids.R1){
        return Math.ceil(numOfSleepingRoom);
    }
}

export function ApartmentLavatoriesCount(typeOfOccupancy: TypeOfOccupancy, numOfApartment: number): number{
    if(typeOfOccupancy.id == table422_1Ids.R2_3){
        return Math.ceil(numOfApartment);
    }
    return 0;
}

export function FamilyDwellingLavatoriesCount(typeOfOccupancy: TypeOfOccupancy, numOfFamilyDwelling: number): number{
    if(typeOfOccupancy.id == table422_1Ids.R3_2){
        return Math.ceil(numOfFamilyDwelling / 2.0);
    }
    return 0;
}

export function CellLavatoriesCount(typeOfOccupancy: TypeOfOccupancy, numOfCell: number): number{
    if(typeOfOccupancy.id == table422_1Ids.I3_1){
        return Math.ceil(numOfCell);
    }
    return 0;
}

export function PersonLavatoriesCount(typeOfOccupancy: TypeOfOccupancy, numOfPerson: number): number{
    if(typeOfOccupancy.id == table422_1Ids.I3_1){
        return Math.ceil(numOfPerson/10.0);
    }
    return 0;
}
