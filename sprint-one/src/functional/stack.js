var Stack = function() {
  var someInstance = {};
  var stackSize = 0;

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  someInstance.push = function(value) {
    //assign something to someInstance(stackSize);
    someInstance[stackSize] = value;
    stackSize++;

    //should add stuff into Instance
  };

  someInstance.pop = function() {
    //return someInstance(stackSize)
      //if zero then should not subtract, otherwise stackSize becomes negative
    stackSize--;
    var poppedValue = someInstance[stackSize];
    delete someInstance[stackSize];
    return poppedValue;
    //should subtract stuff from instance and delete key
  };

  someInstance.size = function() {
    return stackSize>=0 ? stackSize : 0;
  };

  return someInstance;
};