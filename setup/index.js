import tasks from './../tasks/index.js';
import { execProcess } from '../utils/helper.js';

const setup = () => {
   tasks.forEach(async({ title, task: { process, args } }) => {
      await execProcess(process,args)
      console.log('dddd')

   })
}

export default setup;