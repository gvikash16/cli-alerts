const currentNodeVersion = process.versions.node.split('.')[0];
console.log(process.versions.node)
if (currentNodeVersion <= 12) {
  // alert({type: 'error', msg: 'Wrong node version. please upgrade to version 10'});
  const error = new Error(alert({ type: 'error', msg: 'Wrong node version. please upgrade to version 10' }));
  console.log('error', error.stack)
  console.log('error', error);
  process.exitCode = 1;
}