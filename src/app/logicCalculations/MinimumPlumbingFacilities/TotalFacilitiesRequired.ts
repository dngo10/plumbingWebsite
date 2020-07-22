import * as fixtureUnit from "./FixtureAndUnit";



import {TypeOfOccupancy} from "../../Interfaces/occupancy-category";
import { table422_1Categories, table422_1CategoriesNames } from 'src/app/Interfaces/table422-1Units';

export class TotalFacilitiesRequired{

    fixtureUnitArray:  Array<fixtureUnit.fixtureUnit>;

    totalRequiredFixture: Map<table422_1Categories, number>;

    femaleWaterClosetAddIn: number;

    // This is to make sure it will complide to Note 3, of the Table 422_1.
    AddFemaleWaterCloset(fixtureUnitArray: Array<fixtureUnit.fixtureUnit>){
        return 0;
    }


    
    constructor(){
        this.fixtureUnitArray = new Array<fixtureUnit.fixtureUnit>();

        for(let [k,v] of table422_1CategoriesNames){
            this.totalRequiredFixture.set(k, 0);
        }
    }

    AddFixtureOccupancy(occupancy: fixtureUnit.fixtureUnit){
        this.fixtureUnitArray.push(occupancy);
    }

    RemoveFixtureOccupancy(occupancy: fixtureUnit.fixtureUnit){
        this.fixtureUnitArray.splice(this.fixtureUnitArray.indexOf(occupancy), 1);
    }

    Recalculate(){
        this.totalRequiredFixture.clear();

        for(let item of this.fixtureUnitArray){
            let tempMap: Map<table422_1Categories, number> = item.Recalculate();
        }
    }

    AddToTotalFixtureRequired(item: Map<table422_1Categories, number>){
        for (const [k,v] of item) {
            if(this.totalRequiredFixture.has(k)){
                this.totalRequiredFixture.set(k, this.totalRequiredFixture.get(k) + v);
            }else{
                this.totalRequiredFixture.set(k, v);
            }
        }
    }

    
    
}