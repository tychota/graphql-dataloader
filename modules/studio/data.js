const _studios = require("./db");

class StudioDataAccess {
  static async getStudioById(id) {
    console.log(
      chalk.yellow("Performing a ") +
        chalk.red("SELECT") +
        chalk.yellow(" sql query on table ") +
        chalk.red("Studios") +
        chalk.yellow(" with id ") +
        chalk.red(id) +
        chalk.yellow(".")
    );

    if (!_studios.has(id)) return null;

    return _studios.get(id);
  }
}

module.exports = StudioDataAccess;
