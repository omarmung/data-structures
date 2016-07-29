var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
};

Stack.prototype.push = function(value) {
  this.storage[this.size()] = value;
};

Stack.prototype.pop = function() {
  var lastKey = Math.max(this.size() - 1, 0);
  var lastValue = this.storage[lastKey];
  delete this.storage[lastKey];
  return lastValue;
};

Stack.prototype.size = function() {
  var size = Object.keys(this.storage).length;
  return size;
};