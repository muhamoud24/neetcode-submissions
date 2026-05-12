class Solution {
  isAnagram(s, t) {
    if (s.length !== t.length) return false;
    const sortStr = str => str.split("").sort().join("");
    return sortStr(s) === sortStr(t);
  }
}