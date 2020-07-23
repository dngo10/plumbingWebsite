import * as fixtureUnit from "./FixtureAndUnit";
import {TypeOfOccupancy} from "../../Interfaces/occupancy-category";
import { table422_1Categories, table422_1CategoriesNames, table422_1Units } from '../../Interfaces/table422-1Units';

enum TotMaFe{
    totalFemaleCloset,
    totalMaleCloset,
    totalMaleUrinals
}


export class TotalFacilitiesRequired{

    fixtureUnitArray:  Array<fixtureUnit.fixtureUnit>;

    totalRequiredFixture: Map<table422_1Categories, number>;

    femaleWaterClosetAddIn: number;
    maleUrinalsAllowedToBeAdded: number;

    userUrinalsAdded: number;

    constructor(){
        this.fixtureUnitArray = new Array<fixtureUnit.fixtureUnit>();
        this.totalRequiredFixture = new Map<table422_1Categories, number>();

        for(let [k,v] of table422_1CategoriesNames){
            this.totalRequiredFixture.set(k, 0);
        }
    }

    // This is to make sure it will complide to Note 3, of the Table 422_1.
    AddFemaleWaterCloset(){
        let totalResult: Map<TotMaFe, number> = this.GetTotalMaleFemaleClosetUrinals();
        if(totalResult.get(TotMaFe.totalFemaleCloset) <= 
            totalResult.get(TotMaFe.totalMaleCloset) + 
            totalResult.get(TotMaFe.totalMaleUrinals)
        ){
            this.femaleWaterClosetAddIn = 
            totalResult.get(TotMaFe.totalMaleCloset)  + 
            totalResult.get(TotMaFe.totalMaleUrinals) -
            totalResult.get(TotMaFe.totalFemaleCloset);
        }
    }

    // This is to make it will compli to Note 4 of Table 422_1.
    ReducableFixture(){
        let totalResult: Map<TotMaFe, number> = this.GetTotalMaleFemaleClosetUrinals();
        this.maleUrinalsAllowedToBeAdded = totalResult.get(TotMaFe.totalMaleCloset) * 2.0/3.0;

    }

    GetTotalMaleFemaleClosetUrinals(): Map<TotMaFe,number>{
        let totalMaleUrinals: number = 0;
        let totalFemaleCloset: number = 0;
        let totalMaleCloset: number = 0;

        for (const item of this.fixtureUnitArray) {
            for (const [k,v] of item.unit) {
                if(k[0] == table422_1Categories.urinals && k[1] == table422_1Units.male){
                    totalMaleUrinals += v;
                } else if(k[0] == table422_1Categories.waterClosets && k[1] == table422_1Units.male){
                    totalMaleCloset += v;
                } else if(k[0] == table422_1Categories.waterClosets && k[1] == table422_1Units.female){
                    totalFemaleCloset += v;
                }
            }
        }
        return new Map<TotMaFe, number>([
            [TotMaFe.totalFemaleCloset, totalFemaleCloset],
            [TotMaFe.totalMaleCloset,   totalFemaleCloset],
            [TotMaFe.totalMaleUrinals,  totalMaleUrinals]
        ]);
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
            item.Recalculate();
            this.AddToTotalFixtureRequired(item.FixtureRequireds);
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