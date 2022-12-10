import tasks from './../tasks/index.js';
import { execProcess } from './../utils/utils.js';

const setup = () => {
   tasks.forEach(({ title, task: { process, args } }) => {
      // console.log('title', title);
      // console.log('process', process);
      // console.log('args', args);
      execProcess(process,args)

   })
}

export default setup;