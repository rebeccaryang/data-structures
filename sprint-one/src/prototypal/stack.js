var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var obj = Object.create(stackMethods);
  obj.stackSize = 0;
  return obj;

};

var stackMethods = {
  pop: function(){
    if(this.stackSize>0){
      var poppedOff = this[this.stackSize];
      delete this[this.stackSize];
      this.stackSize--;
      return poppedOff;

    }
  },
  push: function(val){
    this.stackSize++;
    this[this.stackSize] = val;
  },
  size: function(){
    return this.stackSize;
  }
};


