var express = require('express');
var formidable = require('formidable');
var fs = require('fs');
var router = express.Router();

/* GET home page. */
router.post('/', function(req, res, next) {
    var form = new formidable.IncomingForm();
    // form.uploadDir="./files";
	form.parse(req,function(err,fields,files){
		console.log(fields.password);
		fs.rename(files.inputFile.path,'./files/1.jpg',function(err){
			console.log('rename succeed');
		});
		res.send('upload succeed');
	});
});

module.exports = router;
