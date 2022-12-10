import inquirer from 'inquirer';
import fs from 'fs';

inquirer
  .prompt([
    /* Pass your questions in here */
    {
      type: 'input',
      name: 'name',
      message: 'What is your name?'
    },
    {
      type: 'input',
      name: 'username',
      message: 'What is your username?'
    }
  ])
  .then((answers) => {
    // Use user feedback for... whatever!!
    fs.writeFileSync('user-preset.json', JSON.stringify(answers), {encoding: 'utf8', flag: 'w'})
    console.log('answers', answers);
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });