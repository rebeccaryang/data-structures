var DoublyLinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;
  
  /*{head:null,tail:null}
  this.head = {value:something,next:tail}

    //creating a new node(value)
    //store previous next within a temp
    //add new node as previous's next
    //add temp as new tail
  list.tail = {value:something,next:tail}*/

  list.addToTail = function(value) {

    var traverseObject = function(object){
      if(object.next === null){
        object.next = Node(value);
      }
      else{
        traverseObject(object.next);
      };
    }




    if(list.head === null){
      this.head = Node(value);
    } else {
      traverseObject(this.head);
    }
    this.tail = Node(value);
  };


  list.removeHead = function() {
    var removed = this.head.value;
    this.head = this.head.next;
    return removed;

    //copy the contents of next
    //assign them to head
  };

  list.contains = function(target) {
    var containsTarget = false;
    var traverseFind = function (object){
      if(object.value === target){
        containsTarget = true;
      } else if(object.next === null){
        return;
      } else {
        traverseFind(object.next);
      }
    }
    traverseFind(this.head);
    return containsTarget;
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */

/*

{head:

    value: Q,
    next: {
      value: X,
      next: {
        value: L,
        next: {
          value:tail,
          next:null;
        }
      }
    }
  }
}

*/