var Tree = function(value) {
  debugger;
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
  this.children.push(newChild);
};

treeMethods.contains = function(target) {
  // check current node for target
  // check children (loop through all)
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
