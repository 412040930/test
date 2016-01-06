var jade = require('jade');

// äÖÈ¾ÎÄ¼þ
var city_names = [
	'武汉',
	'天津',
	'北京',
	'上海'
];

var city_scores = [
	'60',
	'62',
	'80',
	'70'
];



var http = require('http');
http.createServer(function (req, res) {
	
	jade.renderFile('./test.jade', { citys: city_names, cscores: city_scores, name:'许财', h1:'i just test the demo' }, function(err, html){
		if(err)throw err;
	res.writeHead(200, {'Content-Type': 'text/html'});
	console.log(html);
    res.end(html);
  
    });


}).listen(8080, '127.0.0.1');
console.log('Server running at http://127.0.0.1:8080/');
