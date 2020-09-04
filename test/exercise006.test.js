const {
    sumMultiples, 
    isValidDNA,
    getComplementaryDNA,
    isItPrime,
    createMatrix
} = require("../challenges/exercise006");

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

describe("isValidDNA", () => {
    test("it throws an error if not passed a string.", () => {
        expect(() => {
            isValidDNA();
        }).toThrow("str is required");

        expect(() => {
            isValidDNA(4);
        }).toThrow("a string is required");

        expect(() => {
            isValidDNA(true);
        }).toThrow("a string is required");
    });

    test("returns false if string has a character other than  C, G, T or A", () => {
        expect(isValidDNA("CGTX")).toBe(false);
        expect(isValidDNA("QT")).toBe(false);
        expect(isValidDNA("RYT")).toBe(false);
        expect(isValidDNA(" ")).toBe(false);
        expect(isValidDNA("CCC AAA")).toBe(false);
    });
    
    test("returns true if string has only  C, G, T or A", () => {
        expect(isValidDNA("C")).toBe(true);
        expect(isValidDNA("TAA")).toBe(true);
        expect(isValidDNA("GCTAGCTA")).toBe(true);
    });
});

describe("getComplementaryDNA", () => {
    test("it throws an error if not passed a string.", () => {
        expect(() => {
            getComplementaryDNA();
        }).toThrow("str is required");

        expect(() => {
            getComplementaryDNA(4);
        }).toThrow("a string is required");

        expect(() => {
            getComplementaryDNA(true);
        }).toThrow("a string is required");
    });

    test("it throws an error if a string passed has characters other than CGTA.", () => {
        expect(() => {
            getComplementaryDNA("SSQQ");
        }).toThrow("string must only have characters CGTA!");

        expect(() => {
            getComplementaryDNA(" ");
        }).toThrow("string must only have characters CGTA!");
    });

    test("returns complimentary DNA when string only has characters CGTA", () => {
        expect(getComplementaryDNA("AAAAAA")).toBe("TTTTTT");
        expect(getComplementaryDNA("AT")).toBe("TA");
        expect(getComplementaryDNA("GC")).toBe("CG");
        expect(getComplementaryDNA("ACTG")).toBe("TGAC");
        expect(getComplementaryDNA("CCCGGGAT")).toBe("GGGCCCTA");
    });
});

describe("isItPrime", () => {
    test("it throws an error if not passed a number.", () => {
        expect(() => {
            isItPrime();
        }).toThrow("n is required");

        expect(() => {
            isItPrime("foo");
        }).toThrow("a number is required");

        expect(() => {
            isItPrime(true);
        }).toThrow("a number is required");
    });

    test("returns true if the number is prime", () => {
        expect(isItPrime(7)).toBe(true);
        expect(isItPrime(13)).toBe(true);
        expect(isItPrime(479)).toBe(true);
    });

    test("returns false if the number is NOT prime", () => {
        expect(isItPrime(1)).toBe(false);
        expect(isItPrime(10)).toBe(false);
        expect(isItPrime(150)).toBe(false);
        expect(isItPrime(2000)).toBe(false);
    });
});

describe("createMatrix", () => {
    test("it throws an error if not passed a number in n.", () => {
        expect(() => {
            createMatrix();
        }).toThrow("n is required");

        expect(() => {
            createMatrix("foo", "foo");
        }).toThrow("a number is required");

        expect(() => {
            createMatrix(true, "foo");
        }).toThrow("a number is required");
    });

    test("it throws an error if not passed a string in fill.", () => {
        expect(() => {
            createMatrix(1, 1);
        }).toThrow("a string is required");

        expect(() => {
            createMatrix(1, true);
        }).toThrow("a string is required");
    });

    test("it throws an error if n <= 0", () => {
        expect(() => {
            createMatrix(0, "foo");
        }).toThrow("n must be > 0");

        expect(() => {
            createMatrix(-3, "foo");
        }).toThrow("n must be > 0");
    });

    test("it throws an error if n is not integer", () => {
        expect(() => {
            createMatrix(1.2, "foo");
        }).toThrow("n must be integer");
    });

    test("it returns a matrix of 1 * 1 when passed 1", () => {
        const result = createMatrix(1, "foo");
        const expected = [ ["foo"] ]; // => complex value
        expect(result).toEqual(expected);
    });

    test("it returns a matrix of 5 * 5 when passed 5", () => {
        const result = createMatrix(5, "foo");
        const expected = [ ["foo", "foo", "foo", "foo", "foo"],
                           ["foo", "foo", "foo", "foo", "foo"],
                           ["foo", "foo", "foo", "foo", "foo"],
                           ["foo", "foo", "foo", "foo", "foo"],
                           ["foo", "foo", "foo", "foo", "foo"] ]; // => complex value
        expect(result).toEqual(expected);
    });

});
