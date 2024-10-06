var RandomizedSet = function() {
    
    RandomizedSet.prototype.map = {}
    RandomizedSet.prototype.array = []
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function(val) {
    let map = RandomizedSet.prototype.map;
    let array = RandomizedSet.prototype.array;
    if (map[val] == undefined) {
        array.push(val)
        map[val] = array.length - 1;
        return true
    }

    return false

};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function(val) {
    let map = RandomizedSet.prototype.map;
    let array = RandomizedSet.prototype.array;

    if (map[val] != undefined) {

        if (map[val] != array.length - 1) {
            array[map[val]] = array[array.length - 1]
            map[array[array.length - 1]] = map[val]
        }

        array.pop()
        delete map[val]

        return true
    }

    return false
};

/**
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function() {
    let map = RandomizedSet.prototype.map;
    let array = RandomizedSet.prototype.array;

    let random = Math.floor(Math.random() * Math.pow(2, 31) - 1) % array.length
    return array[random]
};

/** 
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */ 