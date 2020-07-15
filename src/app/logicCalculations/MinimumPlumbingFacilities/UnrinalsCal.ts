import {TypeOfOccupancy} from "../../Interfaces/occupancy-category";
import { table422_1Ids } from 'src/app/Interfaces/table422-1Units';

export function MaleUrinalsCount(typeOfOccupancy: TypeOfOccupancy, numOfMale: number) {
    if(typeOfOccupancy.id == table422_1Ids.A1 || 
       typeOfOccupancy.id == table422_1Ids.A2 || 
       typeOfOccupancy.id == table422_1Ids.A3 || 
       typeOfOccupancy.id == table422_1Ids.A4 || 
       typeOfOccupancy.id == table422_1Ids.A5 || 
       typeOfOccupancy.id == table422_1Ids.B ){
           if(1 <= numOfMale && numOfMale <= 200) return 1;
           else if(201 <= numOfMale && numOfMale <= 300) return 2;
           else if(301 <= numOfMale && numOfMale <= 400) return 3;
           else if(401 <= numOfMale && numOfMale <= 600) return 4;
           else if(numOfMale > 600){
               return 4 + Math.ceil((numOfMale - 600)/ 300.0);
           }
    }else if(typeOfOccupancy.id == table422_1Ids.E){
        return Math.ceil(numOfMale/100.0);
    }else if(typeOfOccupancy.id == table422_1Ids.M){
        if(1 <= numOfMale && numOfMale <= 200) return 0;
        else if(201 <= numOfMale && numOfMale <= 400) return 400;
        else if(numOfMale > 400) return 1 + Math.ceil((numOfMale-400)/500.0);
    } else if(typeOfOccupancy.id == table422_1Ids.R2_1){
        if(1 <= numOfMale && numOfMale <= 150){
            return Math.ceil(numOfMale/25.0);
        }else if(numOfMale > 150){
            return 6 + Math.ceil((numOfMale-150)/50.0);
        } 
    }
    return 0;
}