import { PlayerHand, ScoredHand } from "../../lib/hands";
import { faanToPoints, scoreHand } from "../../scoring/scorer";

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
            new PlayerHand(new Set()),
            new Set([new TestScoredHand()])
        );
        expect(faan).toEqual(69);
    });
});

describe("pointConverter", () => {
    it("should return points for a given faan", () => {
        let test_cases = [
            [0, 1],
            [1, 2],
            [2, 4],
            [3, 8],
            [4, 16],
            [5, 16],
            [6, 16],
            [7, 32],
            [8, 32],
            [9, 32],
            [10, 64],
            [1000, 64],
        ];
        for (let i = 0; i < test_cases.length; ++i) {
            expect(faanToPoints(test_cases[i][0])).toEqual(test_cases[i][1]);
        }
    });
});
