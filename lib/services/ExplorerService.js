class ExplorerService {
  static filterByMission(explorer, mission) {
    let explorers = explorer.filter((explorer) => explorer.mission === mission);
    const explorersMap = explorers.map((explorer) => explorer.name);
    return explorersMap;
  }
  static getAmountOfExplorers(explorers, mission) {
    const filtroExplorers = explorers.filter(
      (explorer) => explorer.mission == mission
    );
    return filtroExplorers.length;
  }
  static getExplorersUsernamesByMission(explorers, mission) {
    const explorersInMission = explorers.filter(
      (explorer) => explorer.mission == mission
    );
    return explorersInMission.map((explorer) => explorer.githubUsername);
  }
}
module.exports = ExplorerService;
