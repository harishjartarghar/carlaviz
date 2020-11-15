const express = require("express");
const bodyparser = require("body-parser");
const exec = require("child_process").exec;
const spawn = require("child_process").spawn;
var cors = require('cors');

const SERVER_PORT = 4000;

var app = express();

app.use(cors());
app.use(bodyparser.json());





app.post("/start",function(req,res){
	

	 //Running the run.sh
	const myShellScript = exec('cd ../backend/bin/ && ls && ./backend');
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
	//var stop = req.body.valStop;

	//Stopping the engine

});


app.listen(SERVER_PORT, () => {
  console.log("NodeJS Express server is running on port " + SERVER_PORT);
});
