var BinarySearchTree = function(value) {
  var bst = Object.create(methods);
  bst.left = null;
  bst.right = null;
  bst.value = value;
  bst.maxDepth = 0;
  bst.minDepth = 0;
  return bst;
};

var methods = {
  contains:function(target){
    var containsTarget = false;
    var containsCheck = function(tree){
      if(tree.value===target){
        containsTarget = true;
        return;
      }
      else if(target < tree.value){
        if(tree.left === null){
          return;
        }
        else{
          containsCheck(tree.left);  
        }  
      }
      else if(target > tree.value){
        if(tree.right === null){
          return;
        }
        else{
          containsCheck(tree.right);
        }
      }
    };
    containsCheck(this);
    return containsTarget;

  },
  insert:function(value){
    
    var traversal = function(tree){
      if(value > tree.value && tree.right === null){
        tree.right = BinarySearchTree(value);
      } else if (value > tree.value){
        traversal(tree.right);
      } else if (value < tree.value && tree.left === null){
        tree.left = BinarySearchTree(value);
      } else if (value < tree.value) {
        traversal(tree.left);
      }
    }

    traversal(this);
  },
  depthFirstLog:function(cb){
    var callbackTraversal = function(tree){
      cb(tree.value);
      if(tree.left !== null){
        callbackTraversal(tree.left);
      }
      if(tree.right !== null){
        callbackTraversal(tree.right);
      }
    }
    callbackTraversal(this);  
  },
  rebalance:function(){
    var storageArr = [];
    var treeTraversal = function(node){
      storageArr.push(node.value);
      if(node.left !== null){
        treeTraversal(node.left);
      } 
      if(node.right !== null){
        treeTraversal(node.right);
      }
    }
    treeTraversal(this);
    storageArr.sort(function(a,b){
      return a - b;
    })
    var splitIndex = Math.floor(storageArr.length/2);
  }


};















/*
 * Complexity: What is the time complexity of the above functions?
 */
