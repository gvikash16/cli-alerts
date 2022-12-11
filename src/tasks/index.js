import { execProcess, createDir2 } from '../utils/helper.js';
import config from '../config/index.js';

const task = [
    {
        title: 'Creating the directory ',
        task: async () => {
            createDir2(process.env.CLIENT_BUILD_DIR)
        },
        error: `Task failed`,
        success: `Task completed`
    }, {
        title: 'Clone the package',
        task: async () => {
            const repoLink = 'https://github.com/sindresorhus/execa';
            const splitted = repoLink.split('/');
            const pathArray = splitted[splitted.length - 1].split('.');
            const projectPath = `${process.env.CLIENT_BUILD_DIR}/${config.APP1 || pathArray[0]}`;
            await execProcess('git', `clone ${repoLink} ${projectPath}`);
        },
        error: `Task failed`,
        success: `Task completed`

        // task: { 'process': 'git', 'args': "clone https://github.com/gvikash16/to-do-list" }

    }];

export default task;
