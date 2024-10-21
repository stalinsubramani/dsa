/**
 * @param {string} startGene
 * @param {string} endGene
 * @param {string[]} bank
 * @return {number}
 */
var minMutation = function(startGene, endGene, bank) {
    
    let bankSet = new Set(bank)
    let choices = ['A', 'C', 'G', 'T']
    let visited = new Set()
    visited.add(startGene)
    if (bankSet.has(endGene) == false) return -1
    let q = [[startGene, 0]]
    while(q.length > 0) {

        let [gene, mutation] = q.shift();
        if (gene == endGene) return mutation

        for (let i = 0; i < gene.length; i++) {

            let j = 0;
            while(j < choices.length) {
                
                let mutatedGene = gene.slice(0, i) + choices[j] + gene.slice(i+1)
                if (bankSet.has(mutatedGene) && visited.has(mutatedGene) == false) {
                    visited.add(mutatedGene)
                    q.push([mutatedGene, mutation+1])
                }
                j++
            }
        }
    }

    return -1
};