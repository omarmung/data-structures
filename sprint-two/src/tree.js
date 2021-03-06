var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

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
  var newChild = {};
  newChild.value = value;
  newChild.children = [];
  extend(newChild, treeMethods);
  this.children.push(newChild);
};

treeMethods.contains = function(target) {
  var checkNode = function(node) {
    if (node.value === target) {
      return true;
    }
    if (node.children.length > 0) {
      for (var i = 0; i < node.children.length; i++) {
        if (checkNode(node.children[i])) {
          return true;
        }
      } 
    }
    return false;
  };
  return checkNode(this);
};

/*
 * Complexity: What is the time complexity of the above functions?
 */

// addChild is O(1)
// contains is O(n)