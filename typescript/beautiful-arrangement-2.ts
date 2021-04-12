// Based on https://twchen.gitbook.io/leetcode/array/beautiful-arrangement-ii

function constructArray(n: number, k: number): number[] {
  const result = new Array(n);

  // Put first k + 1 numbers in the order [1, k+1, 2, k, 3, ...]
  let left = 1;
  let right = k + 1;
  for(let i = 0; i < k + 1; i++){
    result[i] = i % 2 ? right-- : left++;
  }

  // Put the remaining numbers in ascending order
  for(let i = k + 1; i < n; i++){
    result[i] = i + 1;
  }

  return result;
};
