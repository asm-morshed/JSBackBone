

function Emitter(){
    this.events = []; // Here the events are saved
}



Emitter.prototype.no = function(type, listener){
    this.events[type] = this.events[type] || [];
    this.events[type].push(listener);// Saving events in events array
}

Emitter.prototype.emit = function(type) {
    if(this.events[type]){ // check the emit type and if true then taking the events from events array and go to the events function
        this.events[type].forEach(function(listener){
            listener();// executing the function of the event
        });
    }
}

module.exports = Emitter;