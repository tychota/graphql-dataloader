const data = require("./data");

module.exports = {
  Query: {
    hello: () => "world",
    game: (_root, args, context, _info) => {
      console.log(
        chalk.blue("Calling ") +
          chalk.red("Query") +
          chalk.white(".") +
          chalk.red("game(id)") +
          chalk.blue(" resolver function.")
      );
      return context.loaders.games.load(args.id);
    },
    games: () => {
      console.log(
        chalk.blue("Calling ") +
          chalk.red("Query") +
          chalk.white(".") +
          chalk.red("games") +
          chalk.blue(" resolver function.")
      );
      return data.getGames();
    }
  }
};
