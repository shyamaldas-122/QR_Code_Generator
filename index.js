import inquirer from 'inquirer';
// Importing Inquirer Package for User Input
import qr from 'qr-image';
// To create Qr Code Image
import fs from "fs"

inquirer
  .prompt([
    /* Pass your questions in here */
    // It is javaScript object so we have {} around it
    {
        "message": "Type your URL: ",
        // To store the answer/URL
        "name": "URL"
    },
  ])
  .then((answers) => {
    // Use user feedback for... whatever!!
    const url=answers.URL;
    console.log(url);
    var qr_svg = qr.image(url);
    qr_svg.pipe(fs.createWriteStream('qr_img.png'));

    fs.writeFile('URL.txt',url,(err)=>{
        if (err) throw err;
        console.log("The file has been saved!");
    })
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });
