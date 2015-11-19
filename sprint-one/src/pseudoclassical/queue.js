var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.queueSize = 0;
  this.beginning = 1;
  this.end = 0;
};

Queue.prototype.enqueue = function(val){
  this.end++;
  this.queueSize++;
  this[this.end] = val;
};

Queue.prototype.dequeue = function(){
  if(this.queueSize > 0){
    var dequeued = this[this.beginning];
    delete this[this.beginning];
    this.beginning++;
    this.queueSize--;
    return dequeued;
  }
};

Queue.prototype.size = function(){
    return this.queueSize;
};



