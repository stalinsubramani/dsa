/**
 * // Definition for a _Node.
 * function _Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {_Node} node
 * @return {_Node}
 */
var cloneGraph = function(node) {

    if (node == null) return null

    let map = new Map()
    const clone = (root) => {


        if (map.has(root))
            return map.get(root)

        let clonedNode = new _Node(root.val);            
        map.set(root, clonedNode)

        for (let node of root.neighbors) {

            clonedNode.neighbors.push(clone(node))
        }

        return clonedNode
    }

    clone(node)

    return map.get(node)

};