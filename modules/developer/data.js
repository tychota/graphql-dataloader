const _devs = require("./db");

class GameDataAccess {
  static async getDeveloperById(id) {
    console.log(
      chalk.yellow("Performing a ") +
        chalk.red("SELECT") +
        chalk.yellow(" sql query on table ") +
        chalk.red("Developers") +
        chalk.yellow(" with id ") +
        chalk.red(id) +
        chalk.yellow(".")
    );

    if (!_devs.has(id)) return null;

    return _devs.get(id);
  }
}

module.exports = GameDataAccess;
