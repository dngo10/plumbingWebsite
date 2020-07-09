import {TypeOfOccupancy} from "../../Interfaces/occupancy-category";

export function MaleWaterClosetsCount(typeOfOccupancy: TypeOfOccupancy, maleNumber: number): number {

    if(typeOfOccupancy.id == 1 ||  // A-1
       typeOfOccupancy.id == 3 ||  // A-3
       typeOfOccupancy.id == 4 ||  // A-4
       typeOfOccupancy.id == 5 ||  // A-5
       typeOfOccupancy.id == 18 || // M
       typeOfOccupancy.id == 26 || // S-1
       typeOfOccupancy.id == 27){  // S-2
        if(1 <= maleNumber && maleNumber <= 100) return 1;
        else if(101 <= maleNumber && maleNumber <= 200) return 2;
        else if(201 <= maleNumber && maleNumber <= 400) return 3;
        else if(maleNumber > 400){
            return 3 + Math.ceil((maleNumber-400)/ 500.0);
        }
    } else if(typeOfOccupancy.id == 2 || // A-2
              typeOfOccupancy.id == 6){  // B
        if(1 <= maleNumber && maleNumber <= 50) return 1;
        else if(51 <= maleNumber && maleNumber <= 100) return 2;
        else if(101 <= maleNumber && maleNumber <= 200) return 3;
        else if(201 <= maleNumber && maleNumber <= 400) return 4;
        else if(maleNumber > 400){
            return 4 + Math.ceil((maleNumber - 400) / 500.0);
        }
    }else if(typeOfOccupancy.id == 7){ // E
        return Math.ceil(maleNumber/50.0);
    } else if(typeOfOccupancy.id == 8 || //F-1
              typeOfOccupancy.id == 9){  //F-2
        if(1 <= maleNumber && maleNumber <= 50) return 1;
        else if(51 <= maleNumber && maleNumber <= 75) return 2;
        else if(76 <= maleNumber && maleNumber <= 100) return 3;
        else if(maleNumber > 100){
            return 3 + Math.ceil((maleNumber-100) / 40.0);
        }
    } else if(typeOfOccupancy.id == 10){ //I-2
        return 0;
    } else if(typeOfOccupancy.id == 13 || // I-3 -- Employee-use
              typeOfOccupancy.id == 14 || // I-4
              typeOfOccupancy.id == 21){  // R-2 -- Employee-use
        if(1 <= maleNumber && maleNumber <= 15) return 1;
        else if (16 <= maleNumber && maleNumber <= 35) return 2;
        else if (36 <= maleNumber && maleNumber <= 55) return 3;
        else if(maleNumber > 55){
            return 3 + Math.ceil((maleNumber-55)/ 40.0)
        }
    } else if(typeOfOccupancy.id == 20 || // R-2 -- Dormitories
              typeOfOccupancy.id == 23 || // R-3 -- long-term or permanent in nature
              typeOfOccupancy.id == 25){
        return 0; // NEED MORE CLARIFICATION
    } 

    return 0;
}

export function FemaleWaterClosetsCount(typeOfOccupancy: TypeOfOccupancy, numOfFemale: number): number{

    if( typeOfOccupancy.id == 1 ||  // A-1
        typeOfOccupancy.id == 2 ||  // A-1
        typeOfOccupancy.id == 3 ||  // A-3
        typeOfOccupancy.id == 4 ||  // A-4
        typeOfOccupancy.id == 5  // A-5
        ){  // S-2
         if(1 <= numOfFemale && numOfFemale <= 25) return 1;
         else if(26 <=  numOfFemale && numOfFemale <= 50) return 2;
         else if(51 <=  numOfFemale && numOfFemale <= 100) return 3;
         else if(101 <= numOfFemale && numOfFemale <= 200) return 4;
         else if(201 <= numOfFemale && numOfFemale <= 300) return 6;
         else if(301 <= numOfFemale && numOfFemale <= 400) return 8;
         else if(numOfFemale > 400){
             return 6 + Math.ceil((numOfFemale-400)/ 500.0);
        }
    } else if(typeOfOccupancy.id == 6){ // B
        if(1 <= numOfFemale && numOfFemale <= 15) return 1;
        else if(16 <= numOfFemale && numOfFemale <= 30) return 2;
        else if(31 <= numOfFemale && numOfFemale <= 50) return 3;
        else if(51 <= numOfFemale && numOfFemale <= 100) return 4;
        else if(101 <= numOfFemale && numOfFemale <= 200) return 8;
        else if(201 <= numOfFemale && numOfFemale <= 400) return 11;
        else if(numOfFemale > 400) return  11 + Math.ceil((numOfFemale-400)/150.0);
    } else if(typeOfOccupancy.id == 7){ // E
        return Math.ceil(numOfFemale/30.0);
    } else if(typeOfOccupancy.id == 8 || // F-1
              typeOfOccupancy.id == 9){  // F-2
        return MaleWaterClosetsCount(typeOfOccupancy, numOfFemale);
    } else if(typeOfOccupancy.id == 10){ // I-1
        return MaleWaterClosetsCount(typeOfOccupancy, numOfFemale);
    } else if(typeOfOccupancy.id == 13){ // I-2 type 2
        return MaleWaterClosetsCount(typeOfOccupancy, numOfFemale);
    } else if(typeOfOccupancy.id == 16 || //I-3 type 3
              typeOfOccupancy.id == 17){  //I-4
        return MaleWaterClosetsCount(typeOfOccupancy, numOfFemale);
    } else if(typeOfOccupancy.id == 18){  //M
        if(1 <= numOfFemale && numOfFemale <= 100) return 1;
        else if(101 <= numOfFemale && numOfFemale <= 200) return 2;
        else if(201 <= numOfFemale && numOfFemale <= 300) return 4;
        else if(301 <= numOfFemale && numOfFemale <= 400) return 6;
        else if(numOfFemale > 400) return 6 + Math.ceil((numOfFemale - 400)/200.0);
    } else if(typeOfOccupancy.id == 20 || // R-2 Type 1
              typeOfOccupancy.id == 23 || // R-3 type 1
              typeOfOccupancy.id == 25){  // R-4
        return 0; // Need more specification
    } else if(typeOfOccupancy.id == 26 ||
              typeOfOccupancy.id == 27){
        if(1 <= numOfFemale && numOfFemale <= 100) return 1;
        else if(101 <= numOfFemale && numOfFemale <= 200) return 2;
        else if(201 <= numOfFemale && numOfFemale <= 400) return 3;
        else if(numOfFemale > 400){
            return 3 + Math.ceil((numOfFemale-400)/150.0);
        }
    }
    return 0;
}

export function RoomWaterClosetsCount(typeOfOccupancy: TypeOfOccupancy, numOfRoom: number){
    if(typeOfOccupancy.id == 11 ||  //I-2 -- the first one
       typeOfOccupancy.id == 12){   //I-2 -- the second one
        return Math.ceil(numOfRoom);
    }
    return 0;
}

export function PatientsWaterClosetsCount(typeOfOccupancy: TypeOfOccupancy, numOfPatients: number){
    if(typeOfOccupancy.id == 11){
        return Math.ceil(numOfPatients/8.0);
    }
    return 0;
}

export function SleepingRoomWaterClosetsCount(typeOfOccupancy: TypeOfOccupancy, numOfSleepingRoom: number){
    if(typeOfOccupancy.id == 19){
        return Math.ceil(numOfSleepingRoom);
    }
}

