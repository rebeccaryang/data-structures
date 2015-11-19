var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var obj = Object.create(queueMethods);
  obj.queueSize = 0;
  obj.beginning = 1;
  obj.end = 0;
  return obj;
};

var queueMethods = {
  enqueue:function(){
    this.end++;
    this.queueSize++;
  },
  dequeue:function(){},
  size:function(){
    return this.queueSize;
  }
};


