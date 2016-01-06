var jade = require('jade');
var fn = jade.compile('test.jade');
console.log(fn(locals));
var htmlOutput = fn({
  maintainer: {
    name: 'Forbes Lindesay',
    twitter: '@ForbesLindesay',
    blog: 'forbeslindesay.co.uk'
  }
});
