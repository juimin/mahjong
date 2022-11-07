import {PlayerHand, ScoredHand} from '../../lib/hands';
import scoreHand from '../../scoring/scorer';

class TestScoredHand extends ScoredHand {
    displayName = "Hello";
    faan = 69;

    appliesToPlayerHand(): boolean {
        return true;
    }
}

describe("Scorer", () => {
    it("should return faan for a hand", () => {
        const faan = scoreHand(
            new PlayerHand(
                new Set()
            ),
            new Set(
                [new TestScoredHand()]
            )
        )
        expect(faan).toEqual(69);
    });
  });