/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function (numCourses, prerequisites) {

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
    const dfs = (node, path) => {

        if (path.has(node)) return false
        if (visited.has(node)) return true
        let ne = graph.get(node)
        path.add(node)
        visited.add(node)
        for (let i in ne) {

            let n = ne[i]
            if (dfs(n, path) == false)
                return false

            path.delete(n)
        }
        return true
    }

    for (let i = 0; i < numCourses; i++) {

        if (visited.has(i) == false) {
            let status = dfs(i, new Set())
            if (status == false)
                return false
        }
    }

    return true
}