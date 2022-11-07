import { Tile } from "./tile";

class PlayerHand {
    tiles: Set<Tile>;
    gang_tiles: Set<Tile> | undefined;
    flower_tiles: Set<Tile> | undefined;

    constructor(
        tiles: Set<Tile>,
        gang_tiles?: Set<Tile>,
        flower_tiles?: Set<Tile>
    ) {
        this.tiles = tiles;
        this.gang_tiles = gang_tiles;
        this.flower_tiles = flower_tiles;
    }
}

abstract class ScoredHand {
    abstract displayName: string;
    abstract faan: number;
    abstract appliesToPlayerHand(playerHand: PlayerHand): boolean;

    getFaan(): number {
        return this.faan;
    }

    getDisplayName(): string {
        return this.displayName;
    }
}

class NoFlowers extends ScoredHand {
    displayName = "No Flowers";
    faan = 1;

    appliesToPlayerHand(playerHand: PlayerHand): boolean {
        return playerHand.flower_tiles?.size == 0;
    }
}

const ALL_HANDS: Set<ScoredHand> = new Set([new NoFlowers()]);

export { ScoredHand, PlayerHand, ALL_HANDS };
