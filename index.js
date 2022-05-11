const Reader = require("./lib/utils/Reader");
const ExplorerService = require("./lib/services/ExplorerService");

const explorers = Reader.readJsonFile("explorers.json");
// console.log(explorers);
const filter = ExplorerService.filterByMission(explorers, "node");
console.log(filter);
// const amountMission = ExplorerService.getAmountOfExplorers(explorers, "node");
// console.log(amountMission);
