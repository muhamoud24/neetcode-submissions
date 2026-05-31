class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        s = s.replace(/[^a-z0-9]/gi, "").toLowerCase();
        
        let cleaned = s.split("").reverse().join("");
        
        return s === cleaned; 
    }
}

const sol = new Solution();
console.log(sol.isPalindrome("tab a cat")); 
