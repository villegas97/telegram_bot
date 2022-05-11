const FizzBuzzService = require("./../../lib/services/FizzBuzzService");
describe("FizzBuzzService unit testing", () => {
    test("1) Fizz Test", () => {
        const explorer = { name: "Luis", score: 6 };
        FizzBuzzService.applyValidationInExplorer(explorer);
        expect(explorer.trick).toBe("FIZZ");
    });
    test("2) Buzz Test", () => {
        const explorer = { name: "Alberto", score: 5 };
        FizzBuzzService.applyValidationInExplorer(explorer);
        expect(explorer.trick).toBe("BUZZ");
    });
    test("3) FizzBuzz Test", () => {
        const explorer = { name: "Villegas", score: 15 };
        FizzBuzzService.applyValidationInExplorer(explorer);
        expect(explorer.trick).toBe("FIZZBUZZ");
    });
});
