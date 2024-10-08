/**
 * @param {number} capacity
 */
var LRUCache = function (capacity) {

    this.hashMap = new Map()
    this.head = null
    this.tail = null
    this.capacity = capacity
    this.size = 0
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {

    let node = this.hashMap.get(key)
    if (node != undefined) {
        this.moveToRecentlyUsed(node)
        return node.value
    }
    else
        return -1

};

LRUCache.prototype.moveToRecentlyUsed = function (node) {

    if (node.next == null) return
    if (node.prev == null && node.next == null) return

    //first node
    if (node.prev == null) {

        let nextptr = node.next
        node.next = null
        node.prev = null
        nextptr.prev = null

        this.head = nextptr
    } /* middle node */
    else {

        let prev = node.prev
        let next = node.next

        node.prev = node.next = null

        prev.next = next
        next.prev = prev
    }

    this.tail.next = node
    node.prev = this.tail
    this.tail = node

}

LRUCache.prototype.insert = function (key, value) {

    let node = {
        prev: this.tail,
        key: key,
        value: value,
        next: null
    }

    if (this.head == null) {
        this.head = node;
    }
    else {
        this.tail.next = node
    }
    this.tail = node;
    this.hashMap.set(key, node)

}

LRUCache.prototype.evict = function () {

    let temp = this.head.next;
    if (temp != null) {
        temp.prev = null
    }
    this.hashMap.delete(this.head.key)

    this.head = temp

}


/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {

    if (this.hashMap.get(key) == undefined && this.size < this.capacity) {

        this.insert(key, value)
        this.size++
    }
    else if (this.hashMap.get(key)) {
        let node = this.hashMap.get(key)
        node.value = value
        this.moveToRecentlyUsed(node)
    }
    else if (this.size > 0 && this.size == this.capacity) {
        this.evict()

        this.insert(key, value)
    }

};