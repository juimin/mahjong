import { ScoredHand, PlayerHand, ALL_HANDS } from "../lib/hands";

// Main logic for scoring
function scoreHand(hand: PlayerHand, scoreCriteria: Set<ScoredHand> = ALL_HANDS) {
    let total_faan: number = 0;

    scoreCriteria.forEach((sc: ScoredHand) => {
        total_faan += (sc.appliesToPlayerHand(hand))? sc.getFaan() : 0;
    })

    return total_faan; // https://en.wikipedia.org/wiki/Hong_Kong_mahjong_scoring_rules#Point_translation_function do this
}

export default scoreHand;