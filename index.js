import alert from './utils/alert.js';
import setup from './setup/index.js';
const preLoadJSON = process.argv.slice(2)[0];
const input = process.argv.slice(2)[1];
if (preLoadJSON) {
  setup();
}
else if (input) {
  console.log('input', input);
} else {
  alert({ type: 'error', msg: 'You have not entered any flag or input' });
}

