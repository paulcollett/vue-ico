var fs = require('fs');
var rollup = require('rollup');
//var uglify = require('uglify-js');
//var buble = require('rollup-plugin-buble');
var package = require('../package.json');
var banner =
    "/*!\n" +
    " * vue-ico v" + package.version + "\n" +
    " * https://github.com/paulcollett/vue-ico\n" +
    " * Released under the MIT License.\n" +
    " */\n";

rollup.rollup({
  input: './src/browser.js',
  //plugins: [buble()]
})
.then(bundle =>
  bundle.generate({
    format: 'umd',
    banner: banner,
    name: 'VueIco'
  }).then(({code}) => write('./dist/vue-ico.browser.js', code, bundle))
)
.catch(logError);

rollup.rollup({
  input: './lib/icons-module.js',
  //plugins: [buble()]
})
.then(bundle =>
  bundle.generate({
    format: 'es',
  }).then(({code}) => write('./dist/vue-ico.module.js', code, bundle))
)
.catch(logError);
/*
rollup.rollup({
  input: './test/module.js',
  //plugins: [buble()]
})
.then(bundle =>
  bundle.generate({
    format: 'umd',
    name: 'VueIco'
  }).then(({code}) => write('./test/_module.js', code, bundle))
)
.catch(logError);
*/

function read(path) {
  return fs.readFileSync(path, 'utf8');
}

function write(dest, code, bundle) {
  return new Promise(function (resolve, reject) {
    fs.writeFile(dest, code, function (err) {
      if (err) return reject(err);
      console.log(blue(dest) + ' ' + getSize(code));
      resolve(bundle);
    });
  });
}

function getSize(code) {
  return (code.length / 1024).toFixed(2) + 'kb';
}

function logError(e) {
  console.log(e);
}

function blue(str) {
  return '\x1b[1m\x1b[34m' + str + '\x1b[39m\x1b[22m';
}
