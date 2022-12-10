import { execProcess, createDir2 } from '../utils/helper.js';

const task = [
    {
        title: 'Creating the direactorty ',
        task: async () => {
            createDir2(process.env.CLIENT_BUILD_DIR)
        },
    }, {

        title: 'Clone the package',
        task: async () => {
            // return { 'process': 'git', 'args': "clone https://github.com/github/training-kit.git" }
            const projectPath = `${process.env.CLIENT_BUILD_DIR}/temp`;
            await execProcess('git', `clone https://github.com/github/training-kit.git ${projectPath}`)
        },


        // task: { 'process': 'git', 'args': "clone https://github.com/gvikash16/to-do-list" }

    }];

export default task;
