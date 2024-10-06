/**
 * @param {number[]} ratings
 * @return {number}
 */
var candy = function(ratings) {

    let c = new Array(ratings.length).fill(1)

    let total = 0


    for (let i = 1; i < ratings.length; i++) {

        if (ratings[i] > ratings[i-1]) {
            c[i] = c[i-1] + 1
        }
    }

    total = c[ratings.length -1]
    for (let i = ratings.length - 2; i >= 0; i--) {

        if (ratings[i] > ratings[i+1]) {
            c[i] = Math.max(c[i+1] + 1, c[i])
        }

        total += c[i]
    }

    return total;
    
};