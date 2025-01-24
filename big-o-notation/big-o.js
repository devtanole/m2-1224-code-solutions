/* exported uniqueQuadratic, uniqueLinear */

function uniqueLinear(words) {
  const seen = {}; // 1_ * _1 = O(1)
  const unique = []; // _1 * 1_ = O(1)
  for (
    let i = 0; // 1_ * _1 = O(1)
    i < words.length; // _2 * n_ = O(n)
    i++ // _1 * n_ = O(n)
  ) {
    const word = words[i]; // 1_ * _n = O(n)
    if (!seen[word]) {
      // _2 * 1_ = O(n)
      seen[word] = true; // _2 * n_ = O(n)
      unique[unique.length] = word; // _2 * _n = O(n)
    }
  }
  return unique; // _1 * 1_ = O(1)
} // Big O Notation for uniqueLinear: O(n)

function uniqueQuadratic(words) {
  const unique = []; // _1 * 1_ = O(1)
  for (
    let i = 0; // _1 * _1 = O(1)
    i < words.length; // _2 * _n = O(n)
    i++ // _1 * _n = O(n)
  ) {
    const word = words[i]; // _1 * _n = O(n)
    let isUnique = true; // 1_ * n_ = O(n)
    for (
      let c = 0; // _1 * _n = O(n)
      c < i; // _2 * _n * n = O(n^2)
      c++ // _1 * n *n_ = O(n^2)
    ) {
      const comparing = words[c]; // _1 * _n * n = O(n^2)
      if (comparing === word) {
        // _3 * _n * n = O(n^2)
        isUnique = false; // _1 * _n * n = O(n^2)
      }
    }
    if (isUnique) {
      // _1 * n_ = O(n)
      unique[unique.length] = word; // _2 * _n = O(n)
    }
  }
  return unique; // 1_ * _1 = O(1)
} // Big O Notation for uniqueQuadratic: O(n^2)
