var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var obj = {};
  obj.queueSize = 0;
  obj.beginning = 0;
  obj.end = 0;

  _.extend(obj,queueMethods);
  return obj;

};

var queueMethods = {
  enqueue:function(val){

  },
  dequeue: function(){

  },
  size: function(){
    return this.queueSize;
  }
};


