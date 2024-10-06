/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {

    let roman = [    
        ['M',1000], ['CM',900],
        ['D',500], ['CD', 400], ['C',100],['XC', 90], 
        ['L',50], ['XL', 40], ['X',10], ['IX', 9], ['V',5], ['IV', 4], ['I',1]
    ];

    let result = "";
    let i = 0;
    while (i < roman.length) {

        let count = Math.floor(num / roman[i][1])
        
        let j = 0
        while (j < count) {
            result += roman[i][0]
            j++
        }

        num = num % roman[i][1]
        i++
        
    }

    return result
    


};