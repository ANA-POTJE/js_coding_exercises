const {
    sumDigits,
    createRange,
    getScreentimeAlertList,
    hexToRGB,
    findWinner
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

describe("getScreentimeAlertList", () => {
    test("it throws an error if not passed a date.", () => {
        const users = [
            {username: "sam_j_1989", name: "Sam Jones",
            screenTime: [{ date: "2019-05-04", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 31} }]}
        ];
        expect(() => {
            getScreentimeAlertList(users);
        }).toThrow("date and users are required");
    });

    test("it throws an error if not passed the array of user objects.", () => {
        expect(() => {
            getScreentimeAlertList( "2019-05-04");
        }).toThrow("date and users are required");
    });

    test("only Beth used more than 100 minutes of screentime for a given date.", () => {
        const users = [
            {username: "beth_1234", name: "Beth Smith",
            screenTime: [
                { date: "2019-05-01", usage: { twitter: 34, instagram: 22, facebook: 40} },
                { date: "2019-05-02", usage: { twitter: 56, instagram: 40, facebook: 31} },
                { date: "2019-05-03", usage: { twitter: 12, instagram: 15, facebook: 19} },
                { date: "2019-05-04", usage: { twitter: 10, instagram: 56, facebook: 61} }]
            },
            {username: "sam_j_1989", name: "Sam Jones",
            screenTime: [
                { date: "2019-06-11", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 10} },
                { date: "2019-06-13", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 16} },
                { date: "2019-06-14", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 31} }]
            }
        ];
        const result = getScreentimeAlertList(users, "2019-05-04");
        const expected = [ ["beth_1234"] ];
        expect(result).toEqual(expected);
    });
    test("Beth and Sam used more than 100 minutes of screentime for a given date.", () => {
        const users = [
            {username: "beth_1234", name: "Beth Smith",
            screenTime: [{ date: "2019-05-04", usage: { twitter: 10, instagram: 56, facebook: 61} }]},
            {username: "sam_j_1989", name: "Sam Jones",
            screenTime: [{ date: "2019-05-04", usage: { mapMyRun: 90, whatsApp: 0, facebook: 0, safari: 31} }]}
        ];
        const result = getScreentimeAlertList(users, "2019-05-04");
        const expected = [ ["beth_1234", "sam_j_1989"] ];
        expect(result).toEqual(expected);
    });
    test("Nobody used more than 100 minutes of screentime for a given date.", () => {
        const users = [
            {username: "beth_1234", name: "Beth Smith",
            screenTime: [{ date: "2019-05-04", usage: { twitter: 10, instagram: 56, facebook: 1} }]},
            {username: "sam_j_1989", name: "Sam Jones",
            screenTime: [{ date: "2019-05-04", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 31} }]}
        ];
        const result = getScreentimeAlertList(users, "2019-05-04");
        const expected = [ [] ];
        expect(result).toEqual(expected);
    });
    test("Given date does not exist in the array of user objects.", () => {
        const users = [
            {username: "beth_1234", name: "Beth Smith",
            screenTime: [{ date: "2019-05-04", usage: { twitter: 10, instagram: 56, facebook: 1} }]},
            {username: "sam_j_1989", name: "Sam Jones",
            screenTime: [{ date: "2019-05-04", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 31} }]}
        ];
        const result = getScreentimeAlertList(users, "2019-01-01");
        const expected = [ [] ];
        expect(result).toEqual(expected);
    });
});

describe("hexToRGB", () => {
    test("it throws an error if not passed the hexStr input parameter.", () => {
        expect(() => {
            hexToRGB();
        }).toThrow("hexStr is required");

        expect(() => {
            hexToRGB(4);
        }).toThrow("hexStr is required");

        expect(() => {
            hexToRGB(true);
        }).toThrow("hexStr is required");
    });

    test("it throws an error if the hexadecimal format is wrong.", () => {
        expect(() => {
            hexToRGB("WWWWWW");
        }).toThrow("The number is not an Hexadecimal");
        expect(() => {
            hexToRGB("XXXXXX");
        }).toThrow("The number is not an Hexadecimal");
    });

    test("if passed #FF1133 returns rgb(255,17,51).", () => {
        expect(hexToRGB("#FF1133")).toBe("rgb(255,17,51)");
    });    
    test("if passed #0080C0 returns rgb(0,128,192).", () => {
        expect(hexToRGB("#0080C0")).toBe("rgb(0,128,192)");
    });    

});
