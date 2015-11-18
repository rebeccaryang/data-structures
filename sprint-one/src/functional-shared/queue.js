var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var obj = {};
  obj.queueSize = 0;
  obj.beginning = 1;
  obj.end = 0;

  _.extend(obj,queueMethods);
  return obj;

};

var queueMethods = {
  enqueue:function(val){
    this.queueSize++;
    this.end++;
    this[this.end] = val;
  },
  dequeue: function(){
    if(this.queueSize>0){
      var dequeuedValue = this[this.beginning];
      delete this[this.beginning];
      this.queueSize--;
      this.beginning++;
      return dequeuedValue;

    }
  },
  size: function(){
    return this.queueSize;
  }
};


