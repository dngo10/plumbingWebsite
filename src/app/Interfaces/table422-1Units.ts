export const enum table422_1Units{
    person,
    male,
    female,
    apartment,
    floorOrcellBlock,
    floor,
    room,
    familydwelling,
    cell,
    sleepingroom,
    patient,
    servicesinkkOrlaundrytray,
    otherMultiple1, // "1 kitchen sink per apartment. 1 laundry tray or 1 automatic clothes washer connection per unit or 1 laundry tray or 1automaticclothes washerconnection foreach 12 units"
    otherMultiple2, // "1 kitchen sink and 1 automatic clothes washer connection per one and two family dwelling"
}

export const enum table422_1Categories{
    waterClosets,
    urinals,
    lavatories,
    bathtubsOrShowers,
    DrinkingFountains,
    other
}

export let table422_1CategoriesSet : Set<table422_1Categories> = new Set<table422_1Categories>();
table422_1CategoriesSet.add(table422_1Categories.DrinkingFountains);
table422_1CategoriesSet.add(table422_1Categories.bathtubsOrShowers);
table422_1CategoriesSet.add(table422_1Categories.lavatories);
table422_1CategoriesSet.add(table422_1Categories.other);
table422_1CategoriesSet.add(table422_1Categories.urinals);
table422_1CategoriesSet.add(table422_1Categories.waterClosets);

export const enum table422_1Ids{
    A1 = 1,
    A2,
    A3,
    A4,
    A5,
    B,
    E,
    F1,
    F2,
    I1,
    I2_1,
    I2_2,
    I2_3,
    I3_1,
    I3_2,
    I3_3,
    I4,
    M,
    R1,
    R2_1,
    R2_2,
    R2_3,
    R3_1,
    R3_2,
    R4,
    S1,
    S2
}

export const table422_1Units_Names: Map<table422_1Units, string> = new Map(
    [
        [table422_1Units.apartment, "apartment"],
        [table422_1Units.male, "male"],
        [table422_1Units.female, "female"],
        [table422_1Units.person, "person"],
        [table422_1Units.floorOrcellBlock, "cellblock/floor"],
        [table422_1Units.room, "room"],
        [table422_1Units.floor, "floor"],
        [table422_1Units.cell, "cell"],
        [table422_1Units.familydwelling, "family dwelling"],
        [table422_1Units.sleepingroom, "sleeping room"],
        [table422_1Units.servicesinkkOrlaundrytray, "service sink or laundry tray"],
        [table422_1Units.otherMultiple1, "1 kitchen sink per apartment. 1 laundry tray or 1 automatic clothes washer connection per unit or 1 laundry tray or 1automaticclothes washerconnection foreach 12 units"],
        [table422_1Units.otherMultiple2, "1 kitchen sink and 1 automatic clothes washer connection per one and two family dwelling"]
    ]
);

export const typeAndAllowance : Map<[table422_1Categories, table422_1Units], Array<table422_1Ids>> = new Map(
[
    [[table422_1Categories.waterClosets, table422_1Units.person], [15]],
    [[table422_1Categories.waterClosets, table422_1Units.male],  [1,2,3,4,5,6,7,8,9,10,13,16,17,18,20,21,23,25,26,27]],
    [[table422_1Categories.waterClosets, table422_1Units.female],[1,2,3,4,5,6,7,8,9,10,13,16,17,18,20,21,23,25,26,27]],
    [[table422_1Categories.waterClosets, table422_1Units.room],  [11,12]],
    [[table422_1Categories.waterClosets, table422_1Units.apartment], [22]],
    [[table422_1Categories.waterClosets, table422_1Units.cell], [14]],
    [[table422_1Categories.waterClosets, table422_1Units.sleepingroom], [19]],
    [[table422_1Categories.waterClosets, table422_1Units.familydwelling], [24]],
    [[table422_1Categories.waterClosets, table422_1Units.patient], [11]],

    [[table422_1Categories.urinals, table422_1Units.male], [1,2,3,4,5,6,7,10,18,20]],

    [[table422_1Categories.lavatories, table422_1Units.person], [15]],
    [[table422_1Categories.lavatories, table422_1Units.male],  [1,2,3,4,5,6,7,8,9,10,13,16,17,18,20,21,23,25,26,27]],
    [[table422_1Categories.lavatories, table422_1Units.female],[1,2,3,4,5,6,7,8,9,10,13,16,17,18,20,21,23,25,26,27]],
    [[table422_1Categories.lavatories, table422_1Units.room], [11,12]],
    [[table422_1Categories.lavatories, table422_1Units.apartment], [22]],
    [[table422_1Categories.lavatories, table422_1Units.cell], [14]],
    [[table422_1Categories.lavatories, table422_1Units.sleepingroom], [19]],
    [[table422_1Categories.lavatories, table422_1Units.familydwelling], [24]],
    [[table422_1Categories.lavatories, table422_1Units.patient], [11]],

    [[table422_1Categories.bathtubsOrShowers, table422_1Units.person], [8.9,10,14,15,20,23,25]],
    [[table422_1Categories.bathtubsOrShowers, table422_1Units.room], [11]],
    [[table422_1Categories.bathtubsOrShowers, table422_1Units.patient], [11]],
    [[table422_1Categories.bathtubsOrShowers, table422_1Units.room], [19]],
    [[table422_1Categories.bathtubsOrShowers, table422_1Units.apartment],[22]],
    [[table422_1Categories.bathtubsOrShowers, table422_1Units.familydwelling], [24]],

    [[table422_1Categories.DrinkingFountains, table422_1Units.person], [1,2,3,4,5,6,7,8,9,11,16,17,18,20,23,25,26,27]],
    [[table422_1Categories.DrinkingFountains, table422_1Units.servicesinkkOrlaundrytray], [10]],
    [[table422_1Categories.DrinkingFountains, table422_1Units.floorOrcellBlock], [14]],
    [[table422_1Categories.DrinkingFountains, table422_1Units.floor], [15]],

    [[table422_1Categories.other, table422_1Units.servicesinkkOrlaundrytray], [1,2,3,4,5,6,7,8,9,11,15,17,18,20,21,23,25,26,27]],
    [[table422_1Categories.other, table422_1Units.otherMultiple1], [22]],
    [[table422_1Categories.other, table422_1Units.otherMultiple2], [24]],
]

);