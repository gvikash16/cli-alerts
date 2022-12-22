import inquirer from 'inquirer';
import fs from 'fs';
// import inquirerPrompt from 'inquirer-autocomplete-prompt';
// inquirer.registerPrompt('autocomplete', inquirerPrompt);
const i = () => {
  inquirer
  .prompt([
    /* Pass your questions in here */
    {
      type: 'input',
      name: 'name',
      message: 'What is your name?',
      validate: function(input) {
        const done = this.async();

        // Do async stuff
        setTimeout(function() {
          if (isNaN(parseInt(input))) {
            // Pass the return value in the done callback
            done('You need to provide a number');
            return;
          }
          // Pass the return value in the done callback
          done(null, true);
        }, 1000);
      }
    },
    {
      type: 'input',
      name: 'username',
      message: 'What is your username?'
    },
    {
      type: 'rawlist',
      name: 'selected-branch',
      message: 'Choose branches from below',
      choices: ['master', 'main', 'branch-cloning'],
      default: 1
    }
  ])
  .then((answers) => {
    // Use user feedback for... whatever!!
    fs.writeFileSync('user-preset.json', JSON.stringify(answers, null, 2), {encoding: 'utf8', flag: 'w'})
    console.log('answers', answers);
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });
  
}
export default i;