import { Tile, TileType } from "./tile";

class HandValue {
    static ZERO: HandValue = new HandValue(0, 0);

    faan: number
    points: number

    constructor(faan: number, points: number) {
        this.faan = faan;
        this.points = points;
    }
}

abstract class Hand {
    abstract getPointContribution(tiles: Array<Tile>): HandValue;
}

class NoFlowers extends Hand {
    static handValue = new HandValue(1, 0);
    static displayName = "No Flowers"

    getPointContribution(tiles: Array<Tile>): HandValue {
        return !tiles.some((t: Tile) => t.type == TileType.Flower) ? NoFlowers.handValue : HandValue.ZERO
    }
}

const ALL_HANDS: Set<Hand> = new Set([NoFlowers]);


export { Hand, ALL_HANDS };