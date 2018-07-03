const data = require("./data");

module.exports = {
  Query: {
    hello: () => "world",
    game: (_root, args, _context, _info) => {
      console.log(
        chalk.blue("Calling ") +
          chalk.red("Query") +
          chalk.white(".") +
          chalk.red("game(id)") +
          chalk.blue(" resolver function.")
      );
      return data.getGameById(args.id);
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
