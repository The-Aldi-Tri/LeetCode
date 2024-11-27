// Passed but slow
//
// function lengthOfLongestSubstring(s: string): number {
//   if (s.length <= 1) return s.length;

//   let maxLength = 0;

//   for (let i = 0; i < s.length - 1; i++) {
//     const subString = [s[i]];

//     for (let j = i + 1; j < s.length; j++) {
//       const char = s[j];

//       if (subString.includes(char)) break;

//       subString.push(char);
//     }

//     maxLength = Math.max(maxLength, subString.length);
//   }

//   return maxLength;
// }

function lengthOfLongestSubstring(s: string): number {
  const map = new Map();
  let maxLength = 0;
  let index = 0;

  for (let i = 0; i < s.length; i++) {
    const char = s[i];

    if (map.has(char) && map.get(char) >= index) {
      index = map.get(char) + 1;
    }

    maxLength = Math.max(maxLength, i - index + 1);

    map.set(char, i);
  }
  return maxLength;
}
