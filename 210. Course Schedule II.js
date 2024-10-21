/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function(numCourses, prerequisites) {

    let graph = new Map()

    for (let i in prerequisites) {

        let e = prerequisites[i]

        if (graph.has(e[0])) {
            graph.get(e[0]).push(e[1])
        }
        else {
            graph.set(e[0], [e[1]])
        }
    }

    let visited = new Set()
    let resMap = new Set()
    let res = []
    const dfs = (node, path) => {

        if (path.has(node)) return false

        let nei = graph.get(node)
        visited.add(node)
        path.add(node)
        for (let i in nei) {
            let r = dfs(nei[i], path)
            if (r == false) return false
            path.delete(nei[i])
        }
        if (resMap.has(node) == false) {
            res.push(node)
            resMap.add(node)
        }

        return true
    }

    for (let i = 0; i < numCourses; i++) {

        if (visited.has(i) == false) {
            let r = dfs(i, new Set())
            if (r == false) return []
        }
    }

    return res
    
};