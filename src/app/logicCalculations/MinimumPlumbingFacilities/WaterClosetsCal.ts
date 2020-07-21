import {TypeOfOccupancy} from "../../Interfaces/occupancy-category";
import { isRegExp } from 'util';
import { table422_1Ids } from 'src/app/Interfaces/table422-1Units';

export function MaleWaterClosetsCount(typeOfOccupancy: TypeOfOccupancy, maleNumber: table422_1Ids): number {

    if(typeOfOccupancy.id == table422_1Ids.A1 ||
       typeOfOccupancy.id == table422_1Ids.A3 ||
       typeOfOccupancy.id == table422_1Ids.A4 ||
       typeOfOccupancy.id == table422_1Ids.A5 ||
       typeOfOccupancy.id == table422_1Ids.M  ||
       typeOfOccupancy.id == table422_1Ids.S1 ||
       typeOfOccupancy.id == table422_1Ids.S2){
        if(1 <= maleNumber && maleNumber <= 100) return 1;
        else if(101 <= maleNumber && maleNumber <= 200) return 2;
        else if(201 <= maleNumber && maleNumber <= 400) return 3;
        else if(maleNumber > 400){
            return 3 + Math.ceil((maleNumber-400)/ 500.0);
        }
    }
    else if(typeOfOccupancy.id == table422_1Ids.A2){
        if(1 <= maleNumber && maleNumber <= 50) return 1;
        else if(51 <= maleNumber && maleNumber <= 100) return 2;
        else if(101 <= maleNumber && maleNumber <= 200) return 3;
        else if(201 <= maleNumber && maleNumber <= 400) return 4;
        else if(maleNumber > 400){
            return 4 + Math.ceil((maleNumber - 400) / 250.0);
        }
    }
    else if(typeOfOccupancy.id == table422_1Ids.B){
        if(1 <= maleNumber && maleNumber <= 50) return 1;
        else if(51 <= maleNumber && maleNumber <= 100) return 2;
        else if(101 <= maleNumber && maleNumber <= 200) return 3;
        else if(201 <= maleNumber && maleNumber <= 400) return 4;
        else if(maleNumber > 400){
            return 4 + Math.ceil((maleNumber - 400) / 500.0);
        }
    }else if(typeOfOccupancy.id == table422_1Ids.E){
        return Math.ceil(maleNumber/50.0);
    } else if(typeOfOccupancy.id == table422_1Ids.F1 ||
              typeOfOccupancy.id == table422_1Ids.F2){
        if(1 <= maleNumber && maleNumber <= 50) return 1;
        else if(51 <= maleNumber && maleNumber <= 75) return 2;
        else if(76 <= maleNumber && maleNumber <= 100) return 3;
        else if(maleNumber > 100){
            return 3 + Math.ceil((maleNumber-100) / 40.0);
        }
    } else if(typeOfOccupancy.id == table422_1Ids.I1){
        return Math.ceil(maleNumber/15.0);
    } else if(typeOfOccupancy.id == table422_1Ids.I3_3 ||
              typeOfOccupancy.id == table422_1Ids.I4 ||
              typeOfOccupancy.id == table422_1Ids.R2_2 ||
              typeOfOccupancy.id == table422_1Ids.I2_3 ){
        if(1 <= maleNumber && maleNumber <= 15) return 1;
        else if (16 <= maleNumber && maleNumber <= 35) return 2;
        else if (36 <= maleNumber && maleNumber <= 55) return 3;
        else if(maleNumber > 55){
            return 3 + Math.ceil((maleNumber-55)/ 40.0)
        }
    } else if(typeOfOccupancy.id == table422_1Ids.R2_1 ||
              typeOfOccupancy.id == table422_1Ids.R3_1 ||
              typeOfOccupancy.id == table422_1Ids.R4){
        if(1 <= maleNumber && maleNumber <= 10) return 1;
        else if(11 <= maleNumber && maleNumber <= 20) return 2;
        else if(21 <= maleNumber && maleNumber <= 2) return 3;
        else if(maleNumber == 25) return 4;
        else if(maleNumber > 25){
            return 3 + Math.ceil((maleNumber-25)/ 25.0);
        }
    } 

    return 0;
}

export function FemaleWaterClosetsCount(typeOfOccupancy: TypeOfOccupancy, numOfFemale: number): number{

    if( typeOfOccupancy.id == table422_1Ids.A1 ||
        typeOfOccupancy.id == table422_1Ids.A2 ||
        typeOfOccupancy.id == table422_1Ids.A3 ||
        typeOfOccupancy.id == table422_1Ids.A4 ||
        typeOfOccupancy.id == table422_1Ids.A5 ){
         if(1 <= numOfFemale && numOfFemale <= 25) return 1;
         else if(26 <=  numOfFemale && numOfFemale <= 50) return 2;
         else if(51 <=  numOfFemale && numOfFemale <= 100) return 3;
         else if(101 <= numOfFemale && numOfFemale <= 200) return 4;
         else if(201 <= numOfFemale && numOfFemale <= 300) return 6;
         else if(301 <= numOfFemale && numOfFemale <= 400) return 8;
         else if(numOfFemale > 400){
             return 6 + Math.ceil((numOfFemale-400)/ 500.0);
        }
    } else if(typeOfOccupancy.id == table422_1Ids.B){
        if(1 <= numOfFemale && numOfFemale <= 15) return 1;
        else if(16 <= numOfFemale && numOfFemale <= 30) return 2;
        else if(31 <= numOfFemale && numOfFemale <= 50) return 3;
        else if(51 <= numOfFemale && numOfFemale <= 100) return 4;
        else if(101 <= numOfFemale && numOfFemale <= 200) return 8;
        else if(201 <= numOfFemale && numOfFemale <= 400) return 11;
        else if(numOfFemale > 400) return  11 + Math.ceil((numOfFemale-400)/150.0);
    } else if(typeOfOccupancy.id == table422_1Ids.E){
        return Math.ceil(numOfFemale/30.0);
    } else if(typeOfOccupancy.id == table422_1Ids.F1 ||
              typeOfOccupancy.id == table422_1Ids.F2){ 
        return MaleWaterClosetsCount(typeOfOccupancy, numOfFemale);
    } else if(typeOfOccupancy.id == table422_1Ids.I1){ // I-1
        return MaleWaterClosetsCount(typeOfOccupancy, numOfFemale);
    } else if(typeOfOccupancy.id == table422_1Ids.I2_3 ||
              typeOfOccupancy.id == table422_1Ids.I3_3 ||
              typeOfOccupancy.id == table422_1Ids.I4){
        return MaleWaterClosetsCount(typeOfOccupancy, numOfFemale);
    } else if(typeOfOccupancy.id == table422_1Ids.M){
        if(1 <= numOfFemale && numOfFemale <= 100) return 1;
        else if(101 <= numOfFemale && numOfFemale <= 200) return 2;
        else if(201 <= numOfFemale && numOfFemale <= 300) return 4;
        else if(301 <= numOfFemale && numOfFemale <= 400) return 6;
        else if(numOfFemale > 400) return 6 + Math.ceil((numOfFemale - 400)/200.0);
    } else if(typeOfOccupancy.id == table422_1Ids.R2_1 ||
              typeOfOccupancy.id == table422_1Ids.R3_1 ||
              typeOfOccupancy.id == table422_1Ids.R4){
        if(1 <= numOfFemale && numOfFemale <= 8) return 1;
        else if(9 <= numOfFemale && numOfFemale <= 16) return 2;
        else if(17 <= numOfFemale && numOfFemale <= 19) return 3;
        else if(numOfFemale == 20) return 4;
        else if(numOfFemale >= 20){
            return 3 + Math.ceil((numOfFemale-20)/20.0); 
        }
    } else if(typeOfOccupancy.id == table422_1Ids.S1 ||
              typeOfOccupancy.id == table422_1Ids.S2){
        if(1 <= numOfFemale && numOfFemale <= 100) return 1;
        else if(101 <= numOfFemale && numOfFemale <= 200) return 2;
        else if(201 <= numOfFemale && numOfFemale <= 400) return 3;
        else if(numOfFemale > 400){
            return 3 + Math.ceil((numOfFemale-400)/150.0);
        }
    }
    return 0;
}

export function RoomWaterClosetsCount(typeOfOccupancy: TypeOfOccupancy, numOfRoom: number): number{
    if(typeOfOccupancy.id == table422_1Ids.I2_1 ||
       typeOfOccupancy.id == table422_1Ids.I2_2){
        return Math.ceil(numOfRoom);
    }
    return 0;
}

export function PatientsWaterClosetsCount(typeOfOccupancy: TypeOfOccupancy, numOfPatients: number): number{
    if(typeOfOccupancy.id == table422_1Ids.I2_2){
        return Math.ceil(numOfPatients/8.0);
    }
    return 0;
}

export function SleepingRoomWaterClosetsCount(typeOfOccupancy: TypeOfOccupancy, numOfSleepingRoom: number): number{
    if(typeOfOccupancy.id == table422_1Ids.R1){
        return Math.ceil(numOfSleepingRoom);
    }
    return 0;
}

export function ApartmentWaterClosetsCount(typeOfOccupancy: TypeOfOccupancy, numOfApartment: number): number{
    if(typeOfOccupancy.id == table422_1Ids.R2_3){
        return Math.ceil(numOfApartment);
    }
    return 0;
}

export function FamilyDwellingWaterClosetsCount(typeOfOccupancy: TypeOfOccupancy, numOfFamilyDwelling: number): number{
    if(typeOfOccupancy.id == table422_1Ids.R3_1){
        return Math.ceil(numOfFamilyDwelling / 2.0);
    }
    return 0;
}

export function CellWaterClosetCount(typeOfOccupancy: TypeOfOccupancy, numOfCell: number): number{
    if(typeOfOccupancy.id == table422_1Ids.I3_1){
        return Math.ceil(numOfCell);
    }
    return 0;
}

export function PersonWaterClosetCount(typeOfOccupancy: TypeOfOccupancy, numOfPerson: number): number{
    if(typeOfOccupancy.id == table422_1Ids.I3_2){
        return Math.ceil(numOfPerson/8.0);
    }
    return 0;
}

