//This program will include some text form a text file and split it with newline
//Then it will select only those line which is included some specific word


const fs = require('fs')

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

console.log("We are starting to collect data");