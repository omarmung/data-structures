var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newStack = {};
  newStack.storage = {};
  newStack.push = function(value) {
    newStack.storage[newStack.size()] = value;
  };
  newStack.size = function() {
    var size = Object.keys(storage).length;
    debugger;
    return size;
  };
  return newStack;
};

var stackMethods = {
  
};


