import {TypeOfOccupancy} from "../../Interfaces/occupancy-category";
import {table422_1Units, table422_1Categories, table422_1CategoriesSet, typeAndAllowance, table422_1Ids} from "../../Interfaces/table422-1Units";
import {table422_1Units_Names} from "../../Interfaces/table422-1Units";

export class InputInformation{

    public occupancyType: TypeOfOccupancy;
    public unit: table422_1Units;

    constructor(occupancyType: TypeOfOccupancy){
        this.occupancyType = occupancyType;
    }

    private setPersonTotalVariableToNull(typeOfOccupancy: TypeOfOccupancy){
        for (const [key,value] of table422_1Units_Names) {
            for(let x of table422_1CategoriesSet){
                if(typeAndAllowance.has([x, key])){
                    let ans:table422_1Ids = typeAndAllowance.get([x,key]).find(element => element == typeOfOccupancy.id);
                    if(ans != null){
                        
                    }
                }
            }
        }
    }
}