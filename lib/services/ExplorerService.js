class ExplorerService {
    static filterByMission(explorer, mission) {
        return explorer.filter((explorer) => explorer.mission === mission);
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
