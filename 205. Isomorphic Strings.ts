// Accepted
// Runtime: 7 ms, faster than 72.33%
// Memory Usage: 53.31 MB, less than 38.29%
function isIsomorphic(s: string, t: string): boolean {
    if (s.length != t.length) return false

    const mapS = new Map<string, string>()
    const mapT = new Map<string, string>()

    for (let i = 0; i < s.length; i++) {
        if (mapS.has(s[i]) && mapS.get(s[i]) != t[i]) {
            return false;
        }
        if (mapT.has(t[i]) && mapT.get(t[i]) != s[i]) {
            return false
        }
        mapS.set(s[i], t[i]);
        mapT.set(t[i], s[i]);
    }

    return true
};

console.log(isIsomorphic("badc", "baba"))