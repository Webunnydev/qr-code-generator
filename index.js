import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";

inquirer
  .prompt([
    {message: "Type the full url here to get the qr code:",
    name: "qr_url"
  }
  ])
  .then((answers) => {
    const qr_code = answers.qr_url;
    console.log(qr_code);

    var qr_svg = qr.image(qr_code);
    qr_svg.pipe(fs.createWriteStream('qr_code.png'));

    fs.writeFile("qr_url.txt", qr_code, (err)=>{
        if (err) throw err;
        console.log("QR code generated successfully");
    });
  });