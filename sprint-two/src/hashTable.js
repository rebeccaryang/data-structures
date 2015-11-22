

var HashTable = function() {
  this._limit = 8;
  this._storage = new LimitedArray(this._limit);
  this._tuples = 0;
  this._temp = [];
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k,this._limit);
  if(!!this._storage.get(index)){ //if there is something in there
    var bucket = this._storage.get(index);
    var containsK = false
    for(var i = 0; i<bucket.length; i++){
      var tuple = bucket[i];
      if(tuple[0] === k){
        tuple[1] = v; // if k is already found in tuple bucket, replace
        containsK = true;
      } 
    }
    if(containsK === false){
      bucket.push([k,v]);
      this._tuples++;
    }
  } else { // there is nothing stored
    this._storage.set(index,[[k,v]]);
    this._tuples++;
  } 

  if (this._tuples > 0.75*this._limit) {
    this.resize(this._limit*2);
  }

}

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k,this._limit);

  var bucket = this._storage.get(index);
  for(var i = 0; i < bucket.length; i++){
    var tuple = bucket[i];
    if (tuple[0]===k) {
      return tuple[1];
    }
  }
}

HashTable.prototype.remove = function(k){
  var index = getIndexBelowMaxForKey(k,this._limit);
  var bucket = this._storage.get(index);
  var removedVal;
  for(var i = 0; i < bucket.length; i++){
    var tuple = bucket[i];
    if (tuple[0]===k) {
      bucket.splice(i,1);
      this._tuples > 0 ? this._tuples-- : this._tuples = 0;
      break;
    }
  }
  if (this._tuples < 0.25 * this._limit && this._tuples > 0){
    this.resize(Math.floor(this._limit*0.5));
  }
}

HashTable.prototype.resize = function(size){
  this._limit = size;
  var temp = [];
  this._tuples = 0;
  this._storage.each(function(bucket){
    if(bucket !== undefined && bucket !== null){
        for(var i = 0; i < bucket.length; i++){
          temp.push(bucket[i])
        }
    }
  });
  this._storage = new LimitedArray(this._limit);
  for(var i = 0; i < temp.length; i++){
    var tuple = temp[i];
    this.insert(tuple[0],tuple[1]);
  }
}






