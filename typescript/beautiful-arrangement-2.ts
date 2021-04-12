type Solution = [isSolved: boolean, solution: number[]];

function constructArray(n: number, k: number): number[] {
  const [result, solution] = getBeautifulArrangement([], n, k)
  if (result === true) {
    return solution
  } else {
    // console.log(`Failed to find a valid solution for n: ${n}, k: %{k}`)
    return []
  }
};

function getBeautifulArrangement(arrangement: number[], n: number, k: number): Solution {
  if (isBeautifulArrangement(arrangement, n, k)) {
    // console.log(`Beautiful arrangement found: ${arrangement}`)
    return [true, arrangement]
  }

  if (arrangement.length === 0) {
    const newArrangement = [1]
    return getBeautifulArrangement(newArrangement, n, k)
  }

  const differences = getDifferences(arrangement)
  const distinctDifferencesCount = getDistinctDifferencesCount(differences)

  if (distinctDifferencesCount < k) {
    return getNumberThatCreatesDistinctDifference(arrangement, n, k)
  } else {
    return getNumberThatMatchesExistingDifference(arrangement, n, k)
  }
  // throw new Error("Unable to find beautiful arrangement")
}

function isBeautifulArrangement(arrangement: number[], n: number, k: number): boolean {
    const differences = getDifferences(arrangement)
    const distinctDifferencesCount = getDistinctDifferencesCount(differences)
    const possibleNumbers = new Set(Array.from(Array(n).keys()).map(i => i += 1))
    const usedNumbers = new Set(arrangement)

    const usedAllPossibleNumbers = possibleNumbers.size === usedNumbers.size
    const distinctDifferencesCountMatchesK = distinctDifferencesCount === k
    return usedAllPossibleNumbers && distinctDifferencesCountMatchesK
}


function getNumberThatCreatesDistinctDifference(arrangement: number[], n: number, k: number): Solution {
    const differences = getDifferences(arrangement)
    const distinctDifferences = new Set([...differences])
    const possibleNumbers = new Set(Array.from(Array(n).keys()).map(i => i += 1))
    const usedNumbers = new Set(arrangement)
    const unusedNumbers = new Set([...possibleNumbers].filter(x => !usedNumbers.has(x)))
    const mostRecentNumber = arrangement[arrangement.length - 1]
    for (let unusedNumber of unusedNumbers) {
      if (!distinctDifferences.has(Math.abs(mostRecentNumber - unusedNumber))) {
         const newArrangement = Object.assign([], arrangement);
         newArrangement.push(unusedNumber)
         const [result, solution] = getBeautifulArrangement(newArrangement, n, k)
         if (result === true) {
           return [result, solution]
         }
      }
    }
    // console.log(`No number that creates distinct difference found for arrangement ${arrangement}, n ${n}, mostRecentNumber ${mostRecentNumber}, unusedNumbers: ${[...unusedNumbers]}`)
    return [false, []]
}

function getNumberThatMatchesExistingDifference(arrangement: number[], n: number, k: number): Solution {
    const differences = getDifferences(arrangement)
    const distinctDifferences = new Set([...differences])
    const possibleNumbers = new Set(Array.from(Array(n).keys()).map(i => i += 1))
    const usedNumbers = new Set(arrangement)
    const unusedNumbers = new Set([...possibleNumbers].filter(x => !usedNumbers.has(x)))
    const mostRecentNumber = arrangement[arrangement.length - 1]
    for (let unusedNumber of unusedNumbers) {
      if (distinctDifferences.has(Math.abs(mostRecentNumber - unusedNumber))) {
         const newArrangement = Object.assign([], arrangement);
         newArrangement.push(unusedNumber)
         const [result, solution] = getBeautifulArrangement(newArrangement, n, k)
         if (result === true) {
           return [result, solution]
         }
      }
    }
    // console.log(`No number that matches existing difference found for arrangement: ${arrangement}, n: ${n}, mostRecentNumber: ${mostRecentNumber}, unusedNumbers: ${[...unusedNumbers]}`)
    return [false, []]
}

function getDistinctDifferencesCount(differences: number[]): number {
  const distinctDifferencesCount = new Set([...differences]).size;
  // console.log(`distinctDifferencesCount: ${distinctDifferencesCount}`)
  return distinctDifferencesCount
}

function getDifferences(arrangement: number[]): number[] {
  let differences = new Array();
  pairwise(arrangement, (curr, next) => differences.push(Math.abs(curr - next)))
  // console.log(`differences: ${differences}`)
  return differences
}

function pairwise(arr: number[], func: (curr: number, next: number) => {}){
    for(var i=0; i < arr.length - 1; i++){
        func(arr[i], arr[i + 1])
    }
}

// const result = constructArray(3, 2)
// console.log(`result: ${result}`)
// const differences = getDifferences([1,3,2])
// const distinctDifferences = getDistinctDifferences(differences)
