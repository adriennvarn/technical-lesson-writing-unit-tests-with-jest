import { pointsForWord } from "../utils"

describe("pointsForWord", () => {
    it("calculates the total points per word (1 for vowel, 2 for consonant)", () => {
        // Define test val
        const word = "test"

        // Pass test value as argument
        const points = pointsForWord(word)

        // Check that resturn value is 7
        expect(points).toBe(7)
    },
    it("ensure calculation is case insensitive", () => {
        const word = "TeSt"
        const points = pointsForWord(word)
        expect(points).toBe(7)
    }))
})