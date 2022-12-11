import tasks from './../tasks/index.js';
import alert from '../utils/alert.js';
import config from '../config/index.js';
// alert({type: 'info', msg: 'Loading...'});
// alert({type: 'success', msg: `Package cloning done`});


function setEnvVars(root, config) {
   const home = process.env.HOME;
   // process.env.CURRENT_DIR = root;
   process.env.CLIENT_BUILD_DIR = `${home}/${config.PROJECT_NAME}`;
   // process.env.NEXT_WP_DIR = `${process.env.CLIENT_BUILD_DIR}/${NEXT_WP}`;
   // process.env.DIGITAL_APP_CHASSIS_DIR = `${process.env.CLIENT_BUILD_DIR}/${DIGITAL_APP_CHASSIS}`;
   // process.env.CONFIG_DIR = `${process.env.CLIENT_BUILD_DIR}/.${PROJECT_CONFIG}`;
   // process.env.RE_TRY = 2;
}

const setup = () => {
   alert({type: 'info', msg: 'Loading from preset config'});
   const pathToScript = new URL('.', import.meta.url).pathname;
   // CLIENT_BUILD_DIR
   setEnvVars(pathToScript, config);
   tasks.forEach(async ({ title, task, success, error }) => {
      await task().catch((err)=> {
         alert({type: 'error', msg: error});
         throw err;
      });
      console.log('finish');
      alert({type: 'success', msg: success});
   })
}

export default setup;