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

const execProcess = async (process, args) => {
  await execa(process, args.split(' '), { stdio: 'inherit' });
  // try {
  //   // const subprocess = execa('git', ['clone','git@github.com:sfdc-www/next-wp.git']).stdout.pipe(process.stdout)
  //   // await execa('git', ['clone', 'git@github.com:sindresorhus/execa'], { stdio: 'inherit' });

  //   await execa(process, args.split(' '), { stdio: 'inherit' }).catch((err)=> {
  //     throw err;
  //   });
  // } catch ({ stderr, exitCode }) {
  //   // console.log('stderr', stderr);
  //   throw Error("Whoops!");
  // }
}
// {
//     title: 'Starting webpack server',
//     task: async () => {
//       await execa('webpack-dev-server', ['--config=webpack/development.js'], { stdio: 'inherit' })
//     }
// }

function writeToFile(path, data) {
  data = data || CONFIG;
  fs.writeFileSync(path, JSON.stringify(data, null, 4));
}

function isPluginPathExist(pathList, path) {
  const checkPath = (obj) => obj.path === path;
  return pathList.some(checkPath);
}

const createDir2 = (dir) => {
  console.log('dir', dir)
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }

}
export { createDir, nodeProcess, execProcess, writeToFile, isPluginPathExist, createDir2 };
