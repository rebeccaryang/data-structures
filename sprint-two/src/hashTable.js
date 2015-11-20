

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  if(this._storage[index] !== undefined){
    var isContained = false
    for(var i = 0; i<this._storage[index].length;i++){
      if(this._storage[index][i][0] === k){
        this._storage[index][i][1] = v;
        isContained = true;
      }
    }
    if(!isContained){
      this._storage[index].push([k,v]);
    }
  }
  else{
    this._storage[index] = [[k,v]];
  }
  //check if stored at this_storage[index] is defined
    //then push
  //else 
    //create array 
    //and push the key-value pair to newly created array

};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);

  for(var i = 0;i<this._storage[index].length;i++){
    if(this._storage[index][i][0]=== k){
      return this._storage[index][i][1];
    }
  }
  //for loop through elements of this._storage[index]
    //if element[0] === k
      //return element[1]
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);

  for(var i = 0; i<this._storage[index].length;i++){
    if(this._storage[index][i][0]===k){
      this._storage[index].splice(i,1)
    }
  }
  //loop through elements of this._storage[index]
    //if element[0] === k
      //splice this._storage[index] to remove the match
 
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


