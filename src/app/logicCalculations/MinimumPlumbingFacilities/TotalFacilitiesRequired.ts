import * as watercloset from "./WaterClosetsCal";
import * as bathtubs_shower from "./bathtubs_showerCal";
import * as drinkingfountain from "./DrinkingFoutainsCal";
import * as urinals from "./UnrinalsCal";
import * as lavatories from "./LavatoriesCal";
import * as otherFixtures from "./OtherFixturesCal";
import * as fixtureUnit from "./FixtureAndUnit";



import {TypeOfOccupancy} from "../../Interfaces/occupancy-category";

export class TotalFacilitiesRequired{
    public waterclosetAmount: fixtureUnit.fixtureUnit;
    public bathtabs_showerAmount: fixtureUnit.fixtureUnit;
    public drinkingfountainAmount: fixtureUnit.fixtureUnit;
    public urinalsAmount: fixtureUnit.fixtureUnit;
    public lavatoriesAmount: fixtureUnit.fixtureUnit;
    public otherFixtureAmount: fixtureUnit.fixtureUnit;
    
    public constructor(typeOfOccupancy: TypeOfOccupancy){
        if(id == 1 ||
            id == 2 ||
            id == 3 ||
            id == 4 ||
            id == 5 ||
            id == 6 ||
            id == 7 ||
            id == 8 ||
            id == 9 ||
            id == 10 ||
            id == 13 ||
            id == 15 ||
            id == 17 ||
            id == 18 ||
            id == 20 ||
            id == 21 ||
            id == 23 ||
            id == 25 ||
            id == 26 ||
            id == 27
            ){
                this.waterclosetAmount.amount = watercloset.MaleWaterClosetsCount()
            }
    }
}