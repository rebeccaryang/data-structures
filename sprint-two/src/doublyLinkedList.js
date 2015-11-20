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
        var toBeAddedTail = Node(value);
        toBeAddedTail.previous = object;
        object.next = toBeAddedTail;
      }
      else{
        traverseObject(object.next);
      };
    }


    if(list.head === null){
      var toBeAddedHeadNull = Node(value);
      toBeAddedHeadNull.previous = null;
      this.head = toBeAddedHeadNull;

    } else {
      traverseObject(this.head);
    }

    this.tail = Node(value);
  };


  list.removeHead = function() {
    //var removed = this.head.value;
    //this.head = this.head.next;
    //return removed;
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

  list.removeTail = function(){
     //traverse down the list
     var traverseRemoval = function(object){
        if(object.next === null){
          this.tail = object.previous;
          object.previous.next = null;
        } else {
          traverseRemoval(object.next);
        }

     }
     traverseRemoval(this.head);
  };

  list.addToHead = function(value) {
    var toBeAdded = Node(value);
    //var temp = this.head;
    //var tempJSON = JSON.stringify(temp);
    //tempJSON = JSON.parse(tempJSON);
    
    toBeAdded.next = this.head;
    this.head.previous = toBeAdded;
    toBeAdded.previous = null;
    this.head = toBeAdded;
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;
  node.previous = null;

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