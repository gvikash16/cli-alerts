// const alert = require('./index');
import alert from './utils/alert.js';
alert();
alert({msg: 'Missing type'});
alert({type: 'success', msg: 'Mission Accomplished'});
alert({type: 'error', msg: 'Alert listen to this carefully'});
alert({type: 'warning', msg: 'Dont be shy'});
alert({type: 'info', msg: 'You will get the repository right here'});