var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newQueue = Object.create(queueMethods);
  newQueue.storage = {};
  return newQueue;
};

var queueMethods = {};

queueMethods.enqueue = function(value) {
  var lastKey;
  if (!this.size()) {
    lastKey = 0;
  } else {
    lastKey = Math.max(...Object.keys(this.storage)) + 1;
  }
  this.storage[lastKey] = value;
};

queueMethods.dequeue = function() {
  var firstKey = Math.min(...Object.keys(this.storage));
  var firstValue = this.storage[firstKey];
  delete this.storage[firstKey];
  return firstValue;
};

queueMethods.size = function() {
  return Object.keys(this.storage).length;
};