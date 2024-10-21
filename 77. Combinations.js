/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function (n, k) {

    let numbers = []
    for (let i = 1; i <= n; i++) {
        numbers.push(i)
    }

    let res = [];
    const combination = (bucket, pos, choosen) => {

        if (pos > n) return

        if (choosen.length == k) {
            res.push(choosen)
            return
        }

        combination(bucket, pos + 1, [...choosen, bucket[pos]])
        combination(bucket, pos + 1, [...choosen])

    }

    combination(numbers, 0, [])
    return res
};  