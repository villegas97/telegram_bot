const ExplorerService = require("./../services/ExplorerService");
const Reader = require("./../utils/Reader");
const FizzBuzzService = require("./../services/FizzBuzzService");
class ExplorerController {
  static getExplorersByMission(mission) {
    const explorers = Reader.readJsonFile("explorers.json");
    const explorerByMission = ExplorerService.filterByMission(
      explorers,
      mission
    );

    return explorerByMission;
  }
  static getExplorersUsernamesByMission(mission) {
    const explorers = Reader.readJsonFile("explorers.json");
    const usernameByMission = ExplorerService.getExplorersUsernamesByMission(
      explorers,
      mission
    );
    return usernameByMission;
  }
  static getExplorersAmonutByMission(mission) {
    const explorers = Reader.readJsonFile("explorers.json");
    const amountByMission = ExplorerService.getAmountOfExplorers(
      explorers,
      mission
    );
    return amountByMission;
  }
  static applyFizzBuzz(data) {
    const fizz = FizzBuzzService.FizzBuzz(data);
    return fizz;
  }
}
module.exports = ExplorerController;
