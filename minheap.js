function minHeap() {
    this.items = [];
}

// helpers 
minHeap.prototype.getLeftChildIndex = function (parentIndex) {
    return (2 * parentIndex) + 1;
};
minHeap.prototype.getRightChildIndex = function (parentIndex) {
    return (2 * parentIndex) + 2;
};
minHeap.prototype.getParentIndex = function (childIndex) {
    return Math.floor((childIndex - 1) / 2);
};
minHeap.prototype.getLeftChild = function (parentIndex) {
    return this.items[this.getLeftChildIndex(parentIndex)];
};
minHeap.prototype.getRightChild = function (parentIndex) {
    return this.items[this.getRightChildIndex(parentIndex)];
};
minHeap.prototype.getParent = function (childIndex) {
    return this.items[this.getParentIndex(childIndex)];
};
minHeap.prototype.size = function () {
    return this.items.length;
}
minHeap.prototype.peek = function () {
    if (this.size === 0) {
        throw "heap is empty";
    }
    return this.items[0];
}
minHeap.prototype.poll = function () {
    let item = this.peek();
    this.items[0] = this.items[this.size - 1];
    this.items.splice(this.size - 1, 1);
    this.heapifyDown();
    return item;
}
minHeap.prototype.add = function (item) {
    this.items.push(item);
    this.heapifyUp();
}

minHeap.prototype.heapifyUp = function () {
    let index = this.size() - 1;
    while (this.getParent(index) > this.items[index]) {
        this.swap(this.getParentIndex(index), index);
        index = this.getParentIndex(index);
    }
}

minHeap.prototype.heapifyDown = function () {
    let index = 0;
    while (this.getLeftChild(index)) {
        let smallest = this.getLeftChildIndex(index);
        if (this.getRightChild(index) && this.getRightChild(index) < this.items[smallest]) {
            smallest = this.getRightChildIndex(index);
        }
        if (this.items[smallest] > this.items[index]) {
            break;
        } else {
            this.swap(smallest, index);
        }
        index = smallest;
    }
}
minHeap.prototype.swap = function (i, j) {
    let temp = this.items[i];
    this.items[i] = this.items[j];
    this.items[j] = temp;
}





let heap = new minHeap();

heap.add(100);
heap.add(5);
heap.add(3);
heap.add(2);
heap.poll();

console.log(heap.items);
