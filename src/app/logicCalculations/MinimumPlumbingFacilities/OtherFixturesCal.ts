import {TypeOfOccupancy} from "../../Interfaces/occupancy-category";
import { type } from 'os';


export function OtherFixureNeeded(typeOfOccupancy: TypeOfOccupancy): string {
    if(typeOfOccupancy.id == 1 ||
       typeOfOccupancy.id == 2 ||    
       typeOfOccupancy.id == 3 ||    
       typeOfOccupancy.id == 4 ||    
       typeOfOccupancy.id == 5 ||    
       typeOfOccupancy.id == 6 ||    
       typeOfOccupancy.id == 7 ||    
       typeOfOccupancy.id == 8 ||
       typeOfOccupancy.id == 9 ||    
       typeOfOccupancy.id == 11 ||
       typeOfOccupancy.id == 15 ||
       typeOfOccupancy.id == 17 ||
       typeOfOccupancy.id == 18 ||
       typeOfOccupancy.id == 19 ||
       typeOfOccupancy.id == 20 ||
       typeOfOccupancy.id == 21 ||
       typeOfOccupancy.id == 23 ||
       typeOfOccupancy.id == 25 ||
       typeOfOccupancy.id == 26 ||
       typeOfOccupancy.id == 27
    ){
        return "1 service sink or laundry tray";
    } else if(typeOfOccupancy.id == 22){
        return "1 kitchen sink per apartment. 1 laundry tray or 1 automatic clothes washer connection per unit or 1 laundry tray or 1automaticclothes washerconnection foreach 12 units";
    } else if(typeOfOccupancy.id == 24){
        return "1 kitchen sink and 1 automatic clothes washer connection per one and two family dwelling";
    }

    return "";
}