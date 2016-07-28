var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newStack = Object.create(stackMethods);
  newStack.storage = {};
  return newStack;
};

var stackMethods = {};

stackMethods.push = function(value) {
  this.storage[this.size()] = value;
};

stackMethods.pop = function() {
  var lastKey = Math.max(this.size() - 1, 0);
  var lastValue = this.storage[lastKey];
  delete this.storage[lastKey];
  return lastValue;
};

stackMethods.size = function() {
  var size = Object.keys(this.storage).length;
  return size;
};

