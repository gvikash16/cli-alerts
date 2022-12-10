import tasks from './../tasks/index.js';
import { execProcess } from '../utils/helper.js';
import alert from '../utils/alert.js';
alert({type: 'info', msg: 'Loading...'});
const setup = () => {
   tasks.forEach(async({ title, task: { process, args } }) => {
      await execProcess(process,args);
      alert({type: 'success', msg: `Package cloning done`});
   })
}

export default setup;