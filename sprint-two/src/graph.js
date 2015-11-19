

// ------------------------
// Instantiate a new graph
var Graph = function() {
  //this = Object.create(Graph.prototype)

  //return this
};

// ------------------------
// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {    //to store a node within Graph
  this[node] = {};
  this[node][node] = 1; //to store relationship to itself
};

// ------------------------
// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  return this[node] === undefined ? false : true;
};

// ------------------------
// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  delete this[node]
  _.each(this,function(obj){
    obj[node] = 0;
  })
};

// ------------------------
// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  if(this[fromNode][toNode] === 1) {
    return true;
  }
  else {
    return false;
  }
};

// ------------------------
// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  this[fromNode][toNode] = 1;
  this[toNode][fromNode] = 1;
};

// ------------------------
// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  this[fromNode][toNode] = 0;
  this[toNode][fromNode] = 0;
};

// ------------------------
// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  _.each(this,function(node,key){
    cb(key);
  });
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


