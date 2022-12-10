import { execProcess, createDir2 } from '../utils/helper.js';

const task = [
    {
        title: 'Creating the directory ',
        task: async () => {
            createDir2(process.env.CLIENT_BUILD_DIR)
        },
    }, {
        title: 'Clone the package',
        task: async () => {
            const repoLink = 'https://.com/sindresorhus/execa';
            const splitted = repoLink.split('/');
            const pathArray = splitted[splitted.length - 1].split('.');
            const projectPath = `${process.env.CLIENT_BUILD_DIR}/${pathArray[0]}`;
            try {
                await execProcess('git', `clone ${repoLink} ${projectPath}`)
            } catch (error) {
                console.log('error', error);
            }

        },


        // task: { 'process': 'git', 'args': "clone https://github.com/gvikash16/to-do-list" }

    }];

export default task;
