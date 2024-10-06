/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {

    let needMap = {}, windowMap = {}
    let i = 0, l = 0, r = 0;

    if (s.length < t.length) return ""

    while (i < t.length) {
        needMap[t.charAt(i)] = (needMap[t.charAt(i)] || 0) + 1
        windowMap[t.charAt(i)] = 0
        i++
    }

    let start = 0, end = s.length + 2;

    let have = 0;
    let need = Object.keys(needMap).length

    let minLen = Number.MAX_SAFE_INTEGER

    while (l <= r && r < s.length) {

        let ch = s.charAt(r);

        if (windowMap[ch] != undefined && windowMap[ch] + 1 == needMap[ch]) {
            have++
            windowMap[ch]++
        }
        else if (windowMap[ch] != undefined) {
            windowMap[ch]++
        }

        if (have == need) {

            while (l <= r && have == need) {
                //if the character is not part of string 't', hence remove

                if (minLen > r - l + 1) {
                    start = l, end = r
                    minLen = r - l + 1
                }
                if (windowMap[s[l]] != undefined) {
                    if (windowMap[s[l]] <= needMap[s[l]]) {
                        have--
                    }
                    windowMap[s[l]]--
                }
                l++
            }

        }

        r++
    }

    if (minLen === Number.MAX_SAFE_INTEGER) return "";

    return s.substr(start, end - start + 1)
};