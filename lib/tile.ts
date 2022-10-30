class TileType {
    // Point tiles
    static Flower = new TileType("hua", 0);
    static Season = new TileType("tian", 1);
    // Basic Tiles
    static Bamboo = new TileType("tiao", 2);
    static Circle = new TileType("tong", 3);
    static TenThousand = new TileType("wan", 4);
    // Honor Tiles
    // Cardinal Directions
    static East = new TileType("dong", 5);
    static South = new TileType("nan", 6);
    static West = new TileType("xi", 7);
    static North = new TileType("bei", 8);
    // Dragons
    static RedDragon = new TileType("hong zhong", 9);
    static GreenDragon = new TileType("fa", 10);
    static WhiteDragon = new TileType("bai ban", 11);

    callout: string
    sortPriority: number

    constructor(callout: string, sortPriority: number) {
        this.callout = callout
        this.sortPriority = sortPriority
    }

    valueOf(): number {
        return this.sortPriority
    }
}


class Tile {
    type: TileType
    value: number // value can be 0 - 9 where 0 is not numbered

    constructor(type: TileType, value: number) {
        this.type = type
        this.value = value
    }

    valueOf() {
        return this.type.valueOf()
    }

}

export { Tile, TileType };