import { ScoredHand, PlayerHand, ALL_HANDS } from "../lib/hands";

function faanToPoints(faan: number): number {
    if (faan > 9) {
        return 2 ** 6;
    } else if (faan > 6 && faan < 10) {
        return 2 ** 5;
    } else if (faan == 5 || faan == 6) {
        return 2 ** 4;
    } else {
        return 2 ** faan;
    }
}

// Main logic for scoring
function scoreHand(
    hand: PlayerHand,
    scoreCriteria: Set<ScoredHand> = ALL_HANDS
): number {
    let total_faan = 0;

    scoreCriteria.forEach((sc: ScoredHand) => {
        total_faan += sc.appliesToPlayerHand(hand) ? sc.getFaan() : 0;
    });

    return total_faan; // https://en.wikipedia.org/wiki/Hong_Kong_mahjong_scoring_rules#Point_translation_function do this
}

export { faanToPoints, scoreHand };
