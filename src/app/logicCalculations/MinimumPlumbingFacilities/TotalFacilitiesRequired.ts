import * as fixtureUnit from "./FixtureAndUnit";



import {TypeOfOccupancy} from "../../Interfaces/occupancy-category";

export class TotalFacilitiesRequired{

    fixtureUnitArray:  Array<fixtureUnit.fixtureUnit>;

    
    
    constructor(){
        this.fixtureUnitArray = new Array<fixtureUnit.fixtureUnit>();
    }

    AddFixtureOccupancy(occupancy: fixtureUnit.fixtureUnit){
        this.fixtureUnitArray.push(occupancy);
    }

    Recalculate(){

    }


}