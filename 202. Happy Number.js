/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {

    let set = new Set()

    while ( n != 1 && set.has(n) == false) {

        set.add(n)
        let newVal = 0
        while(n > 9) {

            let lastDigit = n % 10
            n = Math.floor(n / 10)
            newVal += Math.pow(lastDigit, 2)
        }

        newVal += Math.pow(n, 2)
        n = newVal
    }

    if (set.has(n) == true) return false

    return true
    
};