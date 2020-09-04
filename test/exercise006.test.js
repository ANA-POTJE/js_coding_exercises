const {sumMultiples} = require("../challenges/exercise006");
const { TestScheduler } = require("jest");

describe("sumMultiples", () => {
    test("it throws an error if not passed an array.", () => {
        expect(() => {
            sumMultiples();
        }).toThrow("arr is required");

        expect(() => {
            sumMultiples("foo");
        }).toThrow("an Array is required");

        expect(() => {
            sumMultiples(4);
        }).toThrow("an Array is required");
    });

    test("it returns the sum of any numbers that are a multiple of 3 or 5.", () => {
        const result = sumMultiples([1, 3, 5]);
        const expected = 8;
        expect(result).toBe(expected);
    });

    test("it works ok with decimal numbers.", () => {
        const result = sumMultiples([1, 3, 5.0, 2, 12, 10]);
        const expected = 30;
        expect(result).toBe(expected);
    })

    test("returns zero if there are no multiples of 3 or 5.", () => {
        expect(sumMultiples([1, 2, 8, 13, 7])).toBe(0);
    })

});

