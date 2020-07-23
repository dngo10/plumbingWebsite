import {TypeOfOccupancy} from '../../Interfaces/occupancy-category';
import {table422_1Categories, table422_1CategoriesNames, table422_1Units, table422_1Units_Names} from '../../Interfaces/table422-1Units';
import {typeAndAllowance} from '../../Interfaces/table422-1Units';
import * as watercloset from "./WaterClosetsCal";
import * as bathtubs_shower from "./bathtubs_showerCal";
import * as drinkingfountain from "./DrinkingFoutainsCal";
import * as urinals from "./UnrinalsCal";
import * as lavatories from "./LavatoriesCal";
import * as otherFixtures from "./OtherFixturesCal";


export class fixtureUnit {

    public occupancy: TypeOfOccupancy;

    // This is UNIT INPUT
    public unit : Map<[table422_1Categories, table422_1Units] , number>;

    // This is UNIT OUTPUT
    public FixtureRequireds: Map<table422_1Categories, number>;
    
    //Employee
    constructor(occupancy: TypeOfOccupancy) {
        this.occupancy = occupancy;
        this.unit = new Map<[table422_1Categories, table422_1Units] , number>();
        this.InitUnitMapAndAmmountMap();

        this.FixtureRequireds = new Map<table422_1Categories, number>();

        for (const [k,v] of table422_1CategoriesNames) {
            this.FixtureRequireds.set(k, 0);
        }

    }

    private InitUnitMapAndAmmountMap(){
        //Check which units a
        for (const [k,v] of typeAndAllowance) {
            if(v.includes(this.occupancy.id.valueOf())){
                this.unit.set(k, 0);
            }
        }
    }

    public Recalculate(): Map<table422_1Categories, number>{
        this.FixtureRequireds.set(table422_1Categories.DrinkingFountains, this.DrinkingFoutainsCal());
        this.FixtureRequireds.set(table422_1Categories.bathtubsOrShowers, this.BathTubShowersCal());
        this.FixtureRequireds.set(table422_1Categories.lavatories, this.LavatoriesCal());
        this.FixtureRequireds.set(table422_1Categories.other, this.OtherCal());
        this.FixtureRequireds.set(table422_1Categories.urinals, this.UrinalsCal());
        this.FixtureRequireds.set(table422_1Categories.waterClosets, this.WaterclosetCal());

        return this.FixtureRequireds;
    }

    public GetUnitsAllowanceStrings() : Set<string>{
        let ans: Set<string> = new Set<string>();
        for (let key of this.unit.keys()) {
            ans.add(table422_1Units_Names.get(key[1]));
        }
        return ans;
    }

    public GetUnitsAllowanceEnum() : Set<table422_1Units>{
        let ans: Set<table422_1Units> = new Set<table422_1Units>();
        for (let [k,v] of this.unit) {
            ans.add(k[1]);
        }
        return ans;
    }

    public GetUnitsByCategories(tableCat: table422_1Categories): Set<table422_1Units>{
        let ans: Set<table422_1Units> = new Set<table422_1Units>();
        for (const value of this.unit.keys()) {
            if(value[0] == tableCat){
                ans.add(value[1]);
            }
        }
        return ans;
    }

    public WaterclosetCal(): number{
        let ans: number = 0;

        for (const [k,v] of this.unit) {
            if(k[0] == table422_1Categories.waterClosets){
                if(k[1] == table422_1Units.male){
                    ans += watercloset.MaleWaterClosetsCount(this.occupancy, v);
                } else if(k[1] += table422_1Units.female){
                    ans = watercloset.FemaleWaterClosetsCount(this.occupancy, v);
                } else if(k[1] += table422_1Units.cell){
                    ans = watercloset.CellWaterClosetCount(this.occupancy, v);
                } else if(k[1] += table422_1Units.apartment){
                    ans = watercloset.ApartmentWaterClosetsCount(this.occupancy, v);
                } else if(k[1] += table422_1Units.familydwelling){
                    ans = watercloset.FamilyDwellingWaterClosetsCount(this.occupancy, v);
                } else if(k[1] += table422_1Units.patient){
                    ans = watercloset.PatientsWaterClosetsCount(this.occupancy, v);
                } else if(k[1] += table422_1Units.sleepingroom){
                    ans = watercloset.SleepingRoomWaterClosetsCount(this.occupancy, v);
                } else if(k[1] += table422_1Units.person){
                    ans = watercloset.PersonWaterClosetCount(this.occupancy, v);
                } else if(k[1] += table422_1Units.room){
                    ans = watercloset.RoomWaterClosetsCount(this.occupancy,v);
                }
            }
        }
        return ans;
    }

    public UrinalsCal() : number{
        let ans: number = 0;
        for (const [k,v] of this.unit) {
            if(k[0] == table422_1Categories.urinals){
                if(k[1] == table422_1Units.male){
                    ans += urinals.MaleUrinalsCount(this.occupancy, v);
                }
            }
        }
        return ans;
    }

    public LavatoriesCal(): number{
        let ans: number = 0;
        for (const [k,v] of this.unit) {
            if(k[0] == table422_1Categories.lavatories){
                if(k[1] == table422_1Units.male){
                    ans += lavatories.MaleLavatoriesCount(this.occupancy, v);
                } else if(k[1] == table422_1Units.female){
                    ans += lavatories.FemaleLavatoriesCout(this.occupancy, v);
                } else if(k[1] == table422_1Units.cell){
                    ans += lavatories.CellLavatoriesCount(this.occupancy, v);
                } else if(k[1] == table422_1Units.apartment){
                    ans += lavatories.ApartmentLavatoriesCount(this.occupancy, v);
                } else if(k[1] == table422_1Units.familydwelling){
                    ans += lavatories.FamilyDwellingLavatoriesCount(this.occupancy, v);
                } else if(k[1] == table422_1Units.patient){
                    ans += lavatories.PatientsLavatoriesCount(this.occupancy, v);
                } else if(k[1] == table422_1Units.sleepingroom){
                    ans += lavatories.SleepingRoomLavatoriesCount(this.occupancy, v);
                } else if(k[1] == table422_1Units.person){
                    ans += lavatories.PersonLavatoriesCount(this.occupancy, v);
                } else if(k[1] == table422_1Units.room){
                    ans += lavatories.RoomLavatoriesCount(this.occupancy,v);
                }
            }
        }
        return ans;
    }

    public BathTubShowersCal(): number{
        let ans: number = 0;
        for (const [k,v] of this.unit) {
            if(k[0] == table422_1Categories.bathtubsOrShowers){
                if(k[1] == table422_1Units.apartment){
                    ans += bathtubs_shower.ApartmentBathTubShowerCounts(this.occupancy, v);
                } else if(k[1] == table422_1Units.familydwelling){
                    ans += bathtubs_shower.DwellingBathTubShowerCounts(this.occupancy, v);
                } else if(k[1] == table422_1Units.patient){
                    ans += bathtubs_shower.PatientsBathTubShowerCounts(this.occupancy, v);
                } else if(k[1] == table422_1Units.person){
                    ans += bathtubs_shower.PersonBathTubShowerCounts(this.occupancy, v);
                } else if(k[1] == table422_1Units.room){
                    ans += bathtubs_shower.RoomsBathTubShowerCounts(this.occupancy, v);
                } else if(k[1] == table422_1Units.sleepingroom){
                    ans += bathtubs_shower.SleepingRoomBathTubShowerCounts(this.occupancy, v);
                }
            }
        }
        return ans;       
    }

    public DrinkingFoutainsCal(): number{
        let ans: number = 0;
        for (const [k,v] of this.unit) {
            if(k[0] == table422_1Categories.DrinkingFountains){
                if(k[1] == table422_1Units.person){
                    ans += drinkingfountain.PersonDrinkingFountainsCounts(this.occupancy, v);
                } else if(k[1] == table422_1Units.floor){
                    ans += drinkingfountain.FloorDrinkingFountainsCounts(this.occupancy, v);
                } else if(k[1] == table422_1Units.floorOrcellBlock){
                    ans += drinkingfountain.CellBlockFloorDrinkingFountainsCounts(this.occupancy, v);
                } else if(k[1] == table422_1Units.room){
                    ans += drinkingfountain.RoomsDrinkingFountainsCounts(this.occupancy, v);
                } else if(k[1] == table422_1Units.servicesinkkOrlaundrytray){
                    ans += drinkingfountain.ServiceAndLaundryDrinkingFountainsCounts(this.occupancy);
                }
            }
        }
        return ans;
    }

    public OtherCal(): number{
        let ans: number = 0;
        for (const [k,v] of this.unit) {
            if(k[0] == table422_1Categories.other){
                if(k[1] == table422_1Units.servicesinkkOrlaundrytray){
                    ans += otherFixtures.ServiceSinkOrLaundryTrayOtherFixureNeeded(this.occupancy);
                } else if(k[1] == table422_1Units.otherMultiple1){
                    ans += otherFixtures.Multiple1OtherFixureNeeded(this.occupancy, v);
                } else if(k[1] == table422_1Units.otherMultiple2){
                    ans += otherFixtures.Multiple2OtherFixureNeeded(this.occupancy, v);
                }
            }
        }
        return ans;
    }
}