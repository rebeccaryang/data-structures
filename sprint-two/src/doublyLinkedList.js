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

    /*
    var traverseObject = function(object){
      if(object.next === null){
        var toBeAddedTail = Node(value);
        toBeAddedTail.previous = object;
        object.next = toBeAddedTail;
        list.tail = toBeAddedTail;

      }
      else{
        traverseObject(object.next);
      };
    }
    */


    if(list.head === null){
      var toBeAddedHeadNull = Node(value);
      // toBeAddedHeadNull.previous = null;
      list.head = toBeAddedHeadNull;
      list.tail = list.head;

    } else {
      //traverseObject(this.head);
      var newNode = Node(value);
      //var currentTail = this.tail;
      list.tail.next = newNode;
      newNode.previous = list.tail;
      list.tail = newNode;
    }

    
  };


  list.removeHead = function() {
    //var removed = this.head.value;
    //this.head = this.head.next;
    //return removed;
    if(this.head === null){
      //return undefined;
    } else {
      var removed = this.head.value;
      this.head = this.head.next;
      if(this.head !== null) {
       this.head.previous = null; 
      }
      return removed;
    }
    //copy the contents of next
    //assign them to head
  };

  list.contains = function(target) {
    /*var containsTarget = false;
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
    return containsTarget;*/

    //
    var currentNode = this.head;
    while(currentNode !== null){
      if(currentNode.value === target){
        return true;
      }
      currentNode = currentNode.next;
    }
    return false;
  };

  list.removeTail = function(){
     //traverse down the list
     if(list.head === null){

     } else { 
      var removed = list.tail.value;
      list.tail = list.tail.previous;
      if(list.tail !== null){
        list.tail.next = null;
      };
      return removed;
     }
     
     //list.tail.next = null;
     
    /* var removedTail;
     var traverseRemoval = function(object){
        if(object.next === null){
          removedTail = object.value;
          this.tail = object.previous;
          object.previous.next = null;
        } else {
          traverseRemoval(object.next);
        }

     }
     traverseRemoval(this.head);
     return removedTail;*/
  };

  list.addToHead = function(value) {
    var toBeAdded = Node(value);
    //var temp = this.head;
    //var tempJSON = JSON.stringify(temp);
    //tempJSON = JSON.parse(tempJSON);
    if(this.head === null){
      this.head = toBeAdded;
      // NOTE FOR LATER -- We need to assign tail here :-)
    } else {
      toBeAdded.next = this.head;
      toBeAdded.next.previous = toBeAdded;
      toBeAdded.previous = null;
      this.head = toBeAdded;
    }

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