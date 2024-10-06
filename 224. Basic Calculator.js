/**
 * @param {string} s
 * @return {number}
 */
var calculate = function (s) {

    let tokens = []
    let i = 0;
    let set = new Set()

    set.add("+")
    set.add("-")
    set.add("(")
    set.add(")")
    let temp = ""

    s = s.trim()

    while (i < s.length) {

        let ch = s.charAt(i)
        // This is to handle the negative numbers 
        if (ch == '-'
            && (i == 0 || (tokens.length > 0 && tokens[tokens.length - 1] == '(' && temp == ''))) {

            temp += ch
        }
        else if (set.has(ch)) {
            if (temp.length > 0) {
                tokens.push(temp)
                temp = ""
            }
            tokens.push(ch)
        }
        else if (ch != " ") {
            temp += ch
        }
        i++
    }

    if (temp.length != 0) tokens.push(temp)
    let opndStack = [], oprStack = []
    i = 0;

    let opndCount = 0

    const evaulate = (tns) => {

        let op = [], opnd = []
        let i = 0;

        while (i < tns.length) {

            let t = tns[i]
            if (t == '+' || t == '-') {
                if (opnd.length == 0) {
                    opnd.push(0)
                }
                op.push(t)
            }
            else if (op.length > 0) {

                let left = parseInt(opnd.pop())
                let right = parseInt(t)
                let operator = op.pop()

                switch (operator) {
                    case '+': opnd.push(left + right)
                        break;
                    case '-': opnd.push(left - right)
                        break;
                }
            }
            else {
                opnd.push(t);
            }
            i++
        }

        return parseInt(opnd[opnd.length - 1])
    }

    while (i < tokens.length) {

        if (tokens[i] != ')') {
            opndStack.push(tokens[i])
        }
        else {
            let infixTokens = []
            while (opndStack[opndStack.length - 1] != '(') {

                infixTokens.push(opndStack.pop())
            }
            infixTokens.reverse()

            let val = evaulate(infixTokens)
            opndStack.pop()
            opndStack.push(val)
        }
        i++
    }


    let ans = evaulate(opndStack)
    return ans;
}