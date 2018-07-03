const data = require("./data");

module.exports = {
  Studio: {
    developers: (studio, _args, _context, _info) => {
      console.log(
        chalk.blue("Calling ") +
          chalk.red("Studio") +
          chalk.white(".") +
          chalk.red("developers") +
          chalk.blue(" resolver function.")
      );
      return studio.developers.map(id => data.getDeveloperById(id));
    }
  }
};
