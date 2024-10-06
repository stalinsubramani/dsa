/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {

    let hash =  {}

    let len = magazine.length
    let i = 0;

    while( i < len) {
        hash[magazine.charAt(i)] =  (hash[magazine.charAt(i)] || 0) + 1
        i++
    }

    i = 0; 
    
    while ( i < ransomNote.length) {
        if (hash[ransomNote.charAt(i)] == undefined || (hash[ransomNote.charAt(i)] == 0)) return false
        if (hash[ransomNote.charAt(i)] > 0)
            hash[ransomNote.charAt(i)]--

        i++
    }

    return true


    
};