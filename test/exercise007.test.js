const {
    sumDigits,
    createRange
} = require("../challenges/exercise007");

const { TestScheduler } = require("jest");

describe("sumDigits", () => {
    test("it throws an error if not passed a number.", () => {
        expect(() => {
            sumDigits();
        }).toThrow("n is required");

        expect(() => {
            sumDigits("foo");
        }).toThrow("a number is required");

        expect(() => {
            sumDigits(true);
        }).toThrow("a number is required");
    });
    test("if passed 123 returns 6.", () => {
        expect(sumDigits(123)).toBe(6);
    });
    test("if passed 1148 returns 14.", () => {
        expect(sumDigits(1148)).toBe(14);
    });
    test("if passed -316 returns 4 (takes negative numbers into account).", () => {
        expect(sumDigits(-316)).toBe(4);
    });
});

describe("createRange", () => {
    test("it throws an error if not passed a number.", () => {
        expect(() => {
            createRange();
        }).toThrow("start is required");

        expect(() => {
            createRange("foo");
        }).toThrow("a number is required");

        expect(() => {
            createRange(true);
        }).toThrow("a number is required");
    });
    test("it throws an error if end value equal to start value", () => {
        expect(() => {
            createRange(5, 5, 2);
        }).toThrow("end value is equal to start value");
    });
    test("it throws an error if end value smaller than start value", () => {
        expect(() => {
            createRange(5, 4, 2);
        }).toThrow("end value must be greater than start value");
    });
    test("it throws an error if end value not included in the array", () => {
        expect(() => {
            createRange(2, 9, 2);
        }).toThrow("end value not included in the array!");
    });
    test("if passed (3, 11, 2) returns [3, 5, 7, 9, 11].", () => {
        const result = createRange(3, 11, 2);
        const expected = [3, 5, 7, 9, 11]; // => complex value
        expect(result).toEqual(expected);
    });
    test("if passed (5, 15, 5) returns [5, 10, 15].", () => {
        const result = createRange(5, 15, 5);
        const expected = [5, 10, 15]; // => complex value
        expect(result).toEqual(expected);
    });
    test("if passed (-1, 5, 2) returns [-1, 1, 3, 5] (CHECK NEGATIVE NUMBER)", () => {
        const result = createRange(-1, 5, 2);
        const expected = [-1, 1, 3, 5]; // => complex value
        expect(result).toEqual(expected);
    });
    test("if passed (20, 25) returns [20, 21, 22, 23, 24, 25] (NO STEP == 1!).", () => {
        const result = createRange(20, 25);
        const expected = [20, 21, 22, 23, 24, 25]; // => complex value
        expect(result).toEqual(expected);
    });
});