var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = [];
  extend(newTree, treeMethods);
  return newTree;
};

var extend = function(to, from) {
  for (var key in from) {
    to[key] = from[key];
  }
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  // your code here
  var newChild = {};
  newChild.value = value;
  newChild.children = [];
  extend(newChild, treeMethods);
  this.children.push(newChild);
};

treeMethods.contains = function(target) {
  // check current node for target
  return this.children[0].value === target;
  // check children (loop through all)
    // check children's children, etc
  // var currentNode = this;
  // while (!currentNode.children.length === 0) {

  // }
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
