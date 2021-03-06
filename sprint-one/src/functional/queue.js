var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value) {
    var lastKey;
    if (!someInstance.size()) {
      lastKey = 0;
    } else {
      lastKey = Math.max(...Object.keys(storage)) + 1;
    }
    storage[lastKey] = value;
  };

  someInstance.dequeue = function() {
    var firstKey = Math.min(...Object.keys(storage));
    var firstValue = storage[firstKey];
    delete storage[firstKey];
    return firstValue;
  };

  someInstance.size = function() {
    return Object.keys(storage).length;
  };

  return someInstance;
};