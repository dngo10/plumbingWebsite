import * as tableUnit from "../../Interfaces/table422-1Units";

export class fixtureUnit {

    public unit : tableUnit.table422_1Units;
    public amount: Number;
    
    //Employee
    constructor(unit: tableUnit.table422_1Units, amount: number) {
        this.unit = unit;
        this.amount = amount;
    }
}