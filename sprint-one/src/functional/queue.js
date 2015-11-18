var Queue = function() {
  var someInstance = {};
  var queueSize = 0;
  var beginning = 0;
  var end = 0;

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value) {
    queueSize++;
    storage[end] = value;
    end++;
  };

  someInstance.dequeue = function() {
    if(queueSize>0){
      queueSize--;
      var dequeuedValue = storage[beginning];
      delete storage[beginning];
      beginning++;
      return dequeuedValue;
    };

  };

  someInstance.size = function() {
    return queueSize;
  };

  return someInstance;
};
