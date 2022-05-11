const Reader = require("./../../lib/utils/Reader");
const ExplorerService = require("./../../lib/services/ExplorerService");
describe("Unit Test for ExplorerService", () => {
    test("1) Function filterByMission() test", () => {
        const explorers = Reader.readJsonFile("explorers.json");
        const filteredAnswer = ExplorerService.filterByMission(explorers, "java");
        expect(filteredAnswer.length).toBe(5);
    });
    test("2) Function getAmountofExplorers() test", () => {
        const explorers = Reader.readJsonFile("explorers.json");
        const amount = ExplorerService.getAmountOfExplorers(explorers, "node");
        expect(amount).toBe(10);
    });
    test("3) Function getExplorersUsernameByMission", () => {
        const explorers = Reader.readJsonFile("explorers.json");
        const names = ExplorerService.getExplorersUsernamesByMission(
            explorers,
            "java"
        );
        expect(names[0]).toBe("ajolonauta6");
    });
});
