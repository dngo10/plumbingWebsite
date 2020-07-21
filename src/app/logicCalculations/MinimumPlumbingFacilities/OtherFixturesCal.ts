import {TypeOfOccupancy} from "../../Interfaces/occupancy-category";
import { table422_1Ids } from 'src/app/Interfaces/table422-1Units';
import { MatHeaderCell } from '@angular/material/table';


export function ServiceSinkOrLaundryTrayOtherFixureNeeded(typeOfOccupancy: TypeOfOccupancy) {
    if(typeOfOccupancy.id == table422_1Ids.A1 ||
       typeOfOccupancy.id == table422_1Ids.A2 ||    
       typeOfOccupancy.id == table422_1Ids.A3 ||    
       typeOfOccupancy.id == table422_1Ids.A4 ||    
       typeOfOccupancy.id == table422_1Ids.A5 ||    
       typeOfOccupancy.id == table422_1Ids.B ||    
       typeOfOccupancy.id == table422_1Ids.E ||    
       typeOfOccupancy.id == table422_1Ids.F1 ||
       typeOfOccupancy.id == table422_1Ids.F2 ||    
       typeOfOccupancy.id == table422_1Ids.I2_1 ||
       typeOfOccupancy.id == table422_1Ids.I3_2 ||
       typeOfOccupancy.id == table422_1Ids.I4 ||
       typeOfOccupancy.id == table422_1Ids.M ||
       typeOfOccupancy.id == table422_1Ids.R1 ||
       typeOfOccupancy.id == table422_1Ids.R2_1 ||
       typeOfOccupancy.id == table422_1Ids.R3_1 ||
       typeOfOccupancy.id == table422_1Ids.R4 ||
       typeOfOccupancy.id == table422_1Ids.S1 ||
       typeOfOccupancy.id == table422_1Ids.S2
    ){
        return 1;
    }
    return 0;
}

export function Multiple1OtherFixureNeeded(typeOfOccupancy: TypeOfOccupancy, numofApartment: number){
    if(typeOfOccupancy.id == table422_1Ids.R2_3){
        return Math.ceil(numofApartment/12.0);
    } 
    return 0;
}
    
    
export function Multiple2OtherFixureNeeded(typeOfOccupancy: TypeOfOccupancy, numofFamilyDwelling: number){
    if(typeOfOccupancy.id == table422_1Ids.R3_2){
        return Math.ceil(numofFamilyDwelling/2.0);
    } 
    return 0;
}