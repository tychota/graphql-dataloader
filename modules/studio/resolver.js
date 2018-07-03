const data = require("./data");

module.exports = {
  Game: {
    studio: (game, _args, context, _info) => {
      console.log(
        chalk.blue("Calling ") +
          chalk.red("Game") +
          chalk.white(".") +
          chalk.red("studio") +
          chalk.blue(" resolver function.")
      );
      return context.loaders.studios.load(game.studio);
    }
  }
};
