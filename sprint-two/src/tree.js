var Tree = function(value) {
  var newTree = {};
  newTree.value = value;
  _.extend(newTree,treeMethods);

  // your code here


  newTree.children = [];  // fix me

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  // your code here
  this.children.push(Tree(value));  // fix me
};

treeMethods.contains = function(target) {
  var containsTarget = false;
  var treeTraversal = function(obj){
    if(obj.value === target){
      containsTarget = true;
      return;
    } else if (obj.children.length === 0){
      return;
    } else {
      _.each(obj.children,function(elem){
        treeTraversal(elem);
      })
    }
  }
  treeTraversal(this);
  return containsTarget;
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
