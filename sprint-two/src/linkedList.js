var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    // constant time O(1)
    var newNode = Node(value);    
    if (list.head === null) {
      list.head = newNode;
      list.tail = newNode;
    } else {
      list.tail.next = newNode;
      list.tail = newNode;
    }
  };

  list.removeHead = function() {
    // constant time O(1)
    var car = list.head.value;
    var carTrailer = list.head.next;
    list.head = carTrailer;
    return car;
    
  };

  list.contains = function(target) {
    // linear time O(n)
    var currentNode = list.head;
    while (currentNode.value !== target && currentNode.next !== null) {
      currentNode = currentNode.next;
    }
    if (currentNode.value === target) {
      return true;
    } else {
      return false;
    }
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
// search is linear O(n), insertions & deletions are constant O(1)

