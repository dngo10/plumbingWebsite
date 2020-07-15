import {TypeOfOccupancy} from "../../Interfaces/occupancy-category";
import {table422_1Units} from "../../Interfaces/table422-1Units";

export class InputInformation{

    public occupancyType: TypeOfOccupancy;
    public unit: table422_1Units;

    public personTotal: number;
    public maleTotal: number;
    public femaleTotal: number;
    public apartmentTotal: number;
    public roomTotal: number;
    public floorTotal: number;
    public familydwelling: number;

    constructor(occupancyType: TypeOfOccupancy){
        this.occupancyType = occupancyType;
    }

    private setPersonTotalVariableToNull(id: number): number{
        if(id == 1  || id == 2  || id == 3  || id == 4  || 
           id == 5  || id == 6  || id == 7  || id == 8  || 
           id == 9  || id == 10 || id == 13 || id == 16 || 
           id == 17 || id == 18 || id == 20 || id == 21 || 
           id == 20 || id == 25 || id == 26 || id == 27
        )
        return 0;
        else if ()
    }
}