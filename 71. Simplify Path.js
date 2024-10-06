/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {

    let tokens = path.split('/')
    tokens = tokens.filter((t) => t.length != 0)
    let i = 0;
    let stack = []
    while (i < tokens.length) {

        if (tokens[i] == '..') {
            stack.pop()
            i++
            continue
        }
        else if (tokens[i] == '.') {
            i++
            continue;
        }

        stack.push(tokens[i])
        i++
    }

    let res = ""

    i = 0;

    while (i < stack.length) {
        res += '/'
        res += stack[i]
        i++
    }    

    return res == ''? "/":res
};