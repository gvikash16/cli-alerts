import alert from './utils/alert.js';
const flags = process.argv.slice(2)[0];
const input = process.argv.slice(2)[1];
if(flags || input) {
  console.log('flags', flags);
  console.log('input', input);
} else{
  alert({type: 'error', msg: 'You have not entered any flag or input'});
}
