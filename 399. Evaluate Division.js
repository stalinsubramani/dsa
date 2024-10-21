/**
 * @param {string[][]} equations
 * @param {number[]} values
 * @param {string[][]} queries
 * @return {number[]}
 */
var calcEquation = function (equations, values, queries) {

    let graph = new Map()
    for (let i in equations) {

        let e = equations[i]
        if (graph.has(e[0])) {
            graph.get(e[0]).push([e[1], parseFloat(values[i])])
        }
        else {
            graph.set(e[0], [[e[1], parseFloat(values[i])]])
            // graph.get(e[0]).push([e[1], parseFloat(values[i])])
        }

        if (graph.has(e[1])) {
            graph.get(e[1]).push([e[0], parseFloat(1 / values[i])])
        }
        else {
            graph.set(e[1], [[e[0], parseFloat(1 / values[i])]])
        }
    }


    const bfs = (start, end, visited) => {

        if (!graph.has(start) || !graph.has(end)) {
            return -1
        }

        let q = [[start, 1]]
        visited.add(start)
        while (q.length > 0) {

            let [node, w] = q.shift()
            if (node == end) {
                return w
            }
            let ne = graph.get(node)
            for (let i in ne) {
                let n = ne[i]
                let child = n[0], weight = n[1]
                if (visited.has(child) == false) {
                    visited.add(child)
                    q.push([child, parseFloat(w) * parseFloat(weight)])
                }
            }
        }

        return -1
    }

    let res = []
    for (let q of queries) {

        let r = bfs(q[0], q[1], new Set())
        res.push(r)
    }

    return res
};