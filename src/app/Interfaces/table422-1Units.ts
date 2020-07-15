export enum table422_1Units{
    person,
    male,
    female,
    apartment,
    floor,
    room,
    familydwelling,
    cell,
    sleepingroom
}

export enum table422_1Categories{
    waterClosets,
    urinals,
    lavatories,
    bathtubsOrShowers,
    DrinkingFountains,
    other
}

export let typeAndAllowance : Map<[table422_1Categories, table422_1Units], Array<number>> = new Map(
[
    [[table422_1Categories.waterClosets, table422_1Units.person], [15]],
    [[table422_1Categories.waterClosets, table422_1Units.male],  [1,2,3,4,5,6,7,8,9,10,13,16,17,18,20,21,23,25,26,27]],
    [[table422_1Categories.waterClosets, table422_1Units.female],[1,2,3,4,5,6,7,8,9,10,13,16,17,18,20,21,23,25,26,27]],
    [[table422_1Categories.waterClosets, table422_1Units.room],  [11,12]],
    [[table422_1Categories.waterClosets, table422_1Units.apartment], [22]],
    [[table422_1Categories.waterClosets, table422_1Units.cell], [14]],
    [[table422_1Categories.waterClosets, table422_1Units.sleepingroom], [19]],
    [[table422_1Categories.waterClosets, table422_1Units.familydwelling], [24]],

    [[table422_1Categories.urinals, table422_1Units.male], [1,2,3,4,5,6,7,10,18,20]],

    [[table422_1Categories.lavatories, table422_1Units.person], [15]],
    [[table422_1Categories.lavatories, table422_1Units.male],  [1,2,3,4,5,6,7,8,9,10,13,16,17,18,20,21,23,25,26,27]],
    [[table422_1Categories.lavatories, table422_1Units.female],[1,2,3,4,5,6,7,8,9,10,13,16,17,18,20,21,23,25,26,27]],
    [[table422_1Categories.lavatories, table422_1Units.room], [11,12]],
    [[table422_1Categories.lavatories, table422_1Units.apartment], [22]],
    [[table422_1Categories.lavatories, table422_1Units.cell], [14]],
    [[table422_1Categories.lavatories, table422_1Units.sleepingroom], [19]],
    [[table422_1Categories.lavatories, table422_1Units.familydwelling], [24]]
]

);