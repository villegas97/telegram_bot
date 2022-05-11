const Reader = require("./../../lib/utils/Reader");
describe("Unit Test for Reader Class", () => {
    test("1)Testing JSON parse", () => {
        const explorers = Reader.readJsonFile("explorers.json");
        expect(explorers[0].name).toBe("Woopa1");
    });
});
