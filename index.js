import inquirer from "inquirer";

inquirer
  .prompt([
    {message: "Type the full url here to get the qr code:",
    name: "qr_url";
  }
  ])
  .then((answers) => {
    // Use user feedback for... whatever!!
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });