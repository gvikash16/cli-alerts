import cli from './meow.js';
import alert from './utils/alert.js';
import setup from './setup/index.js';
const flags = cli.flags;
if (flags.preload) {
  alert({type: 'success', msg: `You can now trigger auto set up`});
  setup();
} else {
  alert({ type: 'error', msg: 'You have not entered any flag or input' });
}


