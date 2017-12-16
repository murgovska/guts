// require('babel-core/polyfill');
var context = require.context('.', true, /__test__\/.+\.js$/);
context.keys().forEach(context);