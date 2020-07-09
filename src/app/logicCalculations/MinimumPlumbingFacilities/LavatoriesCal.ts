import {TypeOfOccupancy} from "../../Interfaces/occupancy-category";

export function MaleLavatoriesCount(typeOfOccupancy: TypeOfOccupancy, numOfMale: number): number{
    if(typeOfOccupancy.id == 1 ||
       typeOfOccupancy.id == 3
        ){
        if(1 <= numOfMale && numOfMale <= 200) return 1;
        else if(201 <= numOfMale && numOfMale <= 400) return 2;
        else if(401 <= numOfMale && numOfMale <= 600) return 3;
        else if(601 <= numOfMale && numOfMale <= 750) return 4;
        else if(numOfMale > 750){
            return 4 + Math.ceil((numOfMale - 750)/250.0);
        }
        return 0;
    }else if(typeOfOccupancy.id == 2){
        if(1 <= numOfMale && numOfMale <= 150) return 1;
        else if(151 <= numOfMale && numOfMale <= 200) return 2;
        else if(201 <= numOfMale && numOfMale <= 400) return 3;
        else if(numOfMale > 400){
            return 3 + Math.ceil((numOfMale - 400)/ 250.0);
        } 
    }else if(typeOfOccupancy.id == 4){
        if(1 <= numOfMale  && numOfMale <= 200) return 1;
        else if(201 <= numOfMale && numOfMale <= 400) return 2;
        else if(401 <= numOfMale && numOfMale <= 600) return 3;
        else if(numOfMale > 600){
            return 3 + Math.ceil((numOfMale- 6000)/250.0);
        }
    }
    

}