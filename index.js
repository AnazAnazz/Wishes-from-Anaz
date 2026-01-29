import inquirer from 'inquirer';
import qr from 'qr-image';
import fs from 'fs';

inquirer
  .prompt([{
    /* Pass your questions in here */
    message : "Enter the URL", 
    name : "URL"

    }])
  .then((answers) => {
    // Use user feedback for... whatever!!
    const holdURL = answers.URL;
    fs.writeFile("Qr-002.txt",holdURL,(err)=>{
        if(err) throw err;
        console.log("Txt file has been Created for the Input givnen by user");
    });
    var qr_svg = qr.image(holdURL);
    qr_svg.pipe(fs.createWriteStream('Qr-002.jpeg'));  
    
    
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    //   console.log("its not  a URL");
    } else {
      // Something else went wrong
    //   console.log("check again the entry field");
    }
  });

    
    