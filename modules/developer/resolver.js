const data = require("./data");

module.exports = {
  Studio: {
    developers: (studio, _args, context, _info) => {
      console.log(
        chalk.blue("Calling ") +
          chalk.red("Studio") +
          chalk.white(".") +
          chalk.red("developers") +
          chalk.blue(" resolver function.")
      );
      return context.loaders.developers.loadMany(studio.developers);
    }
  }
};
