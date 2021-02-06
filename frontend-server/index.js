const express = require("express");
const bodyparser = require("body-parser");
const exec = require("child_process").exec;
const spawn = require("child_process").spawn;
var cors = require('cors');

const SERVER_PORT = 7000;

var app = express();

app.use(cors());
app.use(bodyparser.json());





app.post("/start",function(req,res){
	

	 //Running the run.sh
	const myShellScript = exec('sh backend.sh');
	myShellScript.stdout.on('data', (data)=>{
    	console.log(data); 
    	// do whatever you want here with data
	});
	myShellScript.stderr.on('data', (data)=>{
    	console.error(data);
	});

	return res.json("sucess");
	
});

app.post("/stopEngine",function(req,res){

	

});


app.listen(SERVER_PORT, () => {
  console.log("NodeJS Express server is running on port " + SERVER_PORT);
});
