function combinationSum(candidates, target) {
    
    let res = []

    const csum = (pos, sum, elements) => {

        if (sum === target) {
            res.push([...elements])
            return
        }

        if (sum > target) {
            return
        }

        for (let i = pos; i < candidates.length; i++) {

            
            elements.push(candidates[i])
            csum(i, sum+candidates[i], elements)
            elements.pop()
        }
    }

    candidates.sort((a, b) => a - b);

    csum(0,0,[])
    return res
}