/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {

    let stack = []
    let i = 0;

    while (i < tokens.length) {

        switch (tokens[i]) {

            case '+': {
                let r = parseInt(stack.pop())
                let l = parseInt(stack.pop())
                stack.push(l + r)
            }
                break;
            case '-': {
                let r = parseInt(stack.pop())
                let l = parseInt(stack.pop())
                stack.push(l - r)
            }
                break;
            case '*': {
                let r = parseInt(stack.pop())
                let l = parseInt(stack.pop())
                stack.push(l * r)
            }
                break;
            case '/': {
                let r = parseInt(stack.pop())
                let l = parseInt(stack.pop())
                let v = Math.trunc(l/r)
                stack.push(v)

            }
                break;
            default: stack.push(tokens[i])
        }

        i++
    }

    return parseInt(stack[stack.length - 1])

};