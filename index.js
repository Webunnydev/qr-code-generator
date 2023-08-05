import inquirer from "inquirer";
import qr from "qr-image";

inquirer
  .prompt([
    {message: "Type the full url here to get the qr code:",
    name: "qr_url"
  }
  ])
  .then((answers) => {
    const qr_code = answers.qr_url;
    console.log(qr_code);
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });