var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var obj = {};
  obj.stackSize = 0;
  _.extend(obj,stackMethods);
  return obj;
};

var stackMethods = {
  push:function(val){
    this.stackSize++;
    this[this.stackSize] = val;
    console.log(this)
    console.log(this.stackSize);
  },
  size:function(){
    return this.stackSize;
  },
  pop:function(){
    if(this.stackSize > 0){
      var lastIn = this[this.stackSize];
      delete this[this.stackSize];
      this.stackSize--;
      return lastIn;
    }
  }
};


