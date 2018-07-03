const _games = require("./db");

class GameDataAccess {
  static async getGameById(id) {
    console.log(
      chalk.yellow("Performing a ") +
        chalk.red("SELECT") +
        chalk.yellow(" sql query on table ") +
        chalk.red("Games") +
        chalk.yellow(" with id ") +
        chalk.red(id) +
        chalk.yellow(".")
    );

    if (!_games.has(id)) return null;

    return _games.get(id);
  }

  static async getGames() {
    console.log(
      chalk.yellow("Performing a ") +
        chalk.red("SELECT") +
        chalk.yellow(" sql query on table ") +
        chalk.red("Games") +
        chalk.yellow("without any specified id (all table).")
    );

    return _games.values();
  }
}

module.exports = GameDataAccess;
