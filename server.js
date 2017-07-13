var express = require('express');
var mongojs = require('mongojs');
var bodyParser = require('body-parser');

var app = express();

app.use(express.static(__dirname+"/public"));
app.use(bodyParser.json());

var db = mongojs('Productlist', ['ListOfAppointment']);
var db2=mongojs('Productlist', ['ListOfDoc']);


app.get('/ListOfAppointment', function(req, res){
	console.log("Receive a GET request")

	db.ListOfAppointment.find(function(err,docs){
		console.log(docs);
		res.json(docs);
	});
});

app.get('/ListOfDoc', function(req, res){
	console.log("Receive a GET request")

	db.ListOfDoc.find(function(err,docs){
		console.log(docs);
		res.json(docs);
	});
});


app.post('/ListOfAppointment', function(req, res){
	console.log(req.body);
	db.ListOfAppointment.insert(req.body, function(err, doc){
		res.json(doc);
	});
});

app.post('/ListOfDoc', function(req, res){
	console.log(req.body);
	db.ListOfDoc.insert(req.body, function(err, doc){
		res.json(doc);
	});
});


app.delete('/ListOfAppointment/:id',function(req,res){
	var id=req.params.id;
	console.log(id);
	db.ListOfAppointment.remove({_id:mongojs.ObjectId(id)},function(err,doc){
		res.json(doc);
	});
});

app.delete('/ListOfDoc/:id',function(req,res){
	var id=req.params.id;
	console.log(id);
	db.ListOfDoc.remove({_id:mongojs.ObjectId(id)},function(err,doc){
		res.json(doc);
	});
});


app.get('/ListOfAppointment/:id',function(req,res){
	var id=req.params.id;
	console.log(id);
	db.ListOfAppointment.findOne({_id:mongojs.ObjectId(id)},function(err,doc){
		res.json(doc);
	});
});

app.get('/ListOfDoc/:id',function(req,res){
	var id=req.params.id;
	console.log(id);
	db.ListOfDoc.findOne({_id:mongojs.ObjectId(id)},function(err,doc){
		res.json(doc);
	});
});

app.put('/ListOfAppointment/:id',function(req,res){
	var id=req.params.id;
	console.log(req.body.LastName);
	db.ListOfAppointment.findAndModify({query:{_id:mongojs.ObjectId(id)},
		update:{$set:{FirstName:req.body.FirstName,LastName:req.body.LastName,DName:req.body.DName,DateTime:req.body.DateTime}},
		new:true},function(err,doc){
			res.json(doc);
		});
});

app.put('/ListOfDoc/:id',function(req,res){
	var id=req.params.id;
	console.log(req.body.DoctorName);
	db.ListOfDoc.findAndModify({query:{_id:mongojs.ObjectId(id)},
		update:{$set:{DoctorName:req.body.DoctorName}},
		new:true},function(err,doc){
			res.json(doc);
		});
});

app.listen(3000);
console.log("Server running on port 3000");
