class Solution {

  groupAnagrams(strs) {

    const result = {};

    for (let word of strs) {

      const sorted = word
        .split("")
        .sort()
        .join("");

      if (result[sorted]) {

        result[sorted].push(word);

      } else {

        result[sorted] = [word];

      }
    }

    return Object.values(result);
  }
}

const solution = new Solution();

console.log(
  solution.groupAnagrams(
    ["act","pots","tops","cat","stop","hat"]
  )
);