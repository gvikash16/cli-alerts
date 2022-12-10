import fs from 'fs';
import { spawn } from 'child_process';
import { execa, execaSync, execaCommandSync } from 'execa';

const createDirCallBack = () => {
  console.log('file directory created');
};

const createDir = (path, cb = createDirCallBack) => {
  if (fs.existsSync(path)) {
    console.log('file directory already exists');
  } else {
    fs.mkdir(path, cb);
  }
};

const nodeProcess = (str) => {
  // git clone git@github.com:sindresorhus/execa
  const child = spawn(str, [], {
    shell: true,
    cwd: process.cwd(),
    env: process.env,
    stdio: ['inherit', 'pipe', 'pipe'],
    encoding: 'utf-8',
  });
  child.stdout.pipe(process.stdout);
}

const execProcess = async(process, args ) => {
  try {
    // const subprocess = execa('git', ['clone','git@github.com:sfdc-www/next-wp.git']).stdout.pipe(process.stdout)
    // await execa('git', ['clone', 'git@github.com:sindresorhus/execa'], { stdio: 'inherit' });

    await execa(process, args.split(' '), { stdio: 'inherit' });
  } catch ({ stderr, exitCode }) {
  }
}
// {
//     title: 'Starting webpack server',
//     task: async () => {
//       await execa('webpack-dev-server', ['--config=webpack/development.js'], { stdio: 'inherit' })
//     }
// }
export { createDir, nodeProcess, execProcess };
