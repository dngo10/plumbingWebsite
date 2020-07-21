import { table422_1Units, table422_1Units_Names } from 'src/app/Interfaces/table422-1Units';
import {TypeOfOccupancy} from '../../Interfaces/occupancy-category';
import {table422_1Categories} from '../../Interfaces/table422-1Units';
import {typeAndAllowance} from '../../Interfaces/table422-1Units';


export class fixtureUnit {

    public occupancy: TypeOfOccupancy;
    public unit : Map<[table422_1Categories, table422_1Units] , number>;
    
    //Employee
    constructor(occupancy: TypeOfOccupancy) {
        this.occupancy = occupancy;
        this.unit = new Map<[table422_1Categories, table422_1Units] , number>();
        this.initUnitMapAndAmmountMap();
        this.getUnitsAllowance();
    }

    public initUnitMapAndAmmountMap(){
        //Check which units a
        for (const [k,v] of typeAndAllowance) {
            if(v.includes(this.occupancy.id.valueOf())){
                this.unit.set(k, 0);
            }
        }
    }

    public getUnitsAllowance() : Set<string>{
        let ans: Set<string> = new Set<string>();
        for (let key of this.unit.keys()) {
            ans.add(table422_1Units_Names.get(key[1]));
        }
        return ans;
    }

    public getUnitsByCategories(tableCat: table422_1Categories): Set<table422_1Units>{
        let ans: Set<table422_1Units> = new Set<table422_1Units>();
        for (const value of this.unit.keys()) {
            if(value[0] == tableCat){
                ans.add(value[1]);
            }
        }
        return ans;
    }
}