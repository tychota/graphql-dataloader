const data = require("./data");

module.exports = {
  Game: {
    studio: (game, _args, _context, _info) => {
      console.log(
        chalk.blue("Calling ") +
          chalk.red("Game") +
          chalk.white(".") +
          chalk.red("studio") +
          chalk.blue(" resolver function.")
      );
      return data.getStudioById(game.studio);
    }
  }
};
