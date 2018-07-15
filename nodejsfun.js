//creating a node server

const http = require('http');
const fs = require('fs');
const url = require('url');

function renderHTML (path, res){
    fs.readFile(path, null, function(err, data){
        if(err){
            res.writeHead(404);
            res.write("File not found");
        }else{
            res.write(data);
        }
        res.end();
    })
}
function onRequest(req,res){
    res.writeHead(200, {'content-type': 'text/html'})
    const path = url.parse(req.url).pathname;
    switch(path){
        case '/' :
            renderHTML('./view/index.html',res)
            break;
        case '/about':
            renderHTML('./view/about.html',res)
            break;
        default:
            res.writeHead(404)
            res.write("Route is not defined");
            res.end()

    }
}

http.createServer(onRequest).listen(8080);


//creating a server and fetchin html file to display on web browser


//This program will include some text form a text file and split it with newline
//Then it will select only those line which is included some specific word




fs.readFile('data.txt','utf-8',function(err, value){
    
    //print the value of the txt file
    console.log(value)

    //This is make the values an array
    const lines = value.split('\n')
    //console.log(lines[1])

    //This function will return just the line will contains a specific word

    const selectedLines = lines.filter(function(line){
        return line.includes('Dinajpur')

    })
    console.log(selectedLines);
})
//Using ES6 Code 
fs.readFile('data.txt','utf-8',(err,value)=>{
    value.split('\n').filter(line=>line.includes('Dinajpur')).forEach(line=>console.log(line));
})

console.log("We are starting to collect data");