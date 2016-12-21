var Emitter = require('./eventem');

var emtr = new Emitter();
//creating an event
emtr.on('greet',function(){
    console.log("Salam from 1");
});

emtr.on('greet',function(){
    console.log('Salam from 2');
});
emtr.on('test',function(){
    console.log("How are you buddy???")
})
console.log("*******************");

emtr.emit('greet');
emtr.emit('test');
