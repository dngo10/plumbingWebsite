import {TypeOfOccupancy} from "../../Interfaces/occupancy-category";

export function MaleUrinalsCount(typeOfOccupancy: TypeOfOccupancy, numOfMale: number) {
    if(typeOfOccupancy.id == 1 || // A-1
       typeOfOccupancy.id == 2 || // A-2
       typeOfOccupancy.id == 3 || // A-3
       typeOfOccupancy.id == 4 || // A-4
       typeOfOccupancy.id == 5 || // A-5
       typeOfOccupancy.id == 6 ){ // B
           if(1 <= numOfMale && numOfMale <= 200) return 1;
           else if(201 <= numOfMale && numOfMale <= 300) return 2;
           else if(301 <= numOfMale && numOfMale <= 400) return 3;
           else if(401 <= numOfMale && numOfMale <= 600) return 4;
           else if(numOfMale > 600){
               return 4 + Math.ceil((numOfMale - 600)/ 300.0);
           }
    }else if(typeOfOccupancy.id == 7){ // E
        return Math.ceil(numOfMale/100.0);
    }else if(typeOfOccupancy.id == 8 ||
             typeOfOccupancy.id == 9 ||
             typeOfOccupancy.id == 10 ||
             typeOfOccupancy.id == 11 ||
             typeOfOccupancy.id == 12 ||
             typeOfOccupancy.id == 13 ||
             typeOfOccupancy.id == 14 ||
             typeOfOccupancy.id == 15 ||
             typeOfOccupancy.id == 16 ||
             typeOfOccupancy.id == 17 ||
             typeOfOccupancy.id == 19 ||
             typeOfOccupancy.id == 21 ||
             typeOfOccupancy.id == 22 ||
             typeOfOccupancy.id == 23 ||
             typeOfOccupancy.id == 24 ||
             typeOfOccupancy.id == 25 ||
             typeOfOccupancy.id == 26 ||
             typeOfOccupancy.id == 27
        ){
        return 0;
    }else if(typeOfOccupancy.id == 18){
        if(1 <= numOfMale && numOfMale <= 200) return 0;
        else if(201 <= numOfMale && numOfMale <= 400) return 400;
        else if(numOfMale > 400) return 1 + Math.ceil((numOfMale-400)/500.0);
    } else if(typeOfOccupancy.id == 20){
        return Math.ceil(numOfMale/25.0);
    }
}