/* Queues */

function Queue() {
  collection = [];
  this.print = function() {
    console.log(collection);
  };

  this.enqueue = function (element) {
    collection.push(element)
  }

  this.dequeue = function () {
    return collection.shift();
  }

  this.front = function () {
    return collection[0];
  }

  this.back = function () {
    var total = "";
    for (var i = 0; i < collection.length; i++) {
      total = collection[i];
    }
    return total;
  }

  this.size = function () {
    return collection.length;
  }

  this.empty = function () {
    return (collection.length === 0);
  }

  this.size = function () {
    return collection.length;
  }
}

// var myQueue = new Queue();
// myQueue.enqueue('a');
// myQueue.enqueue('b');
// myQueue.enqueue('d');
// console.log(myQueue.back());
// console.log(myQueue.front());


function priorityQueue() {
  var collection = [];
  this.printCollection = function () {
    (console.log(collection));
  }
  this.enqueue = function (element) {
    if (this.isEmpty()) {
      collection.push(element);
    } else {
      var added = false;
      for (var i = 0; i < collection.length; i++) {
        if (element[1] < collection[i][1]) {
          collection.splice(i, 0, element);
          added = true;
          break;
        }
      }
      if (!added) {
        collection.push(element);
      }
    }
  };

  this.dequeue = function () {
    var value = collection.shift();
    return value[0];
  }
  this.front = function () {
    return collection[0];
  }
  this.size = function () {
    return collection.length;
  }
  this.isEmpty = function () {
    return (collection.length === 0);
  }
}

var p = new priorityQueue();
p.enqueue(["Utama", 3]);
p.enqueue(["Muhammad", 1]);
p.enqueue(["Sulthan", 2]);
p.printCollection();