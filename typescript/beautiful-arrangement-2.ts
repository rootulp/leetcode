function constructArray(n: number, k: number): number[] {
  let beautifulArrangement: number[] = []
  
  for (let i = 0; i < n; i++) {
      beautifulArrangement.push(getNextArrangementNumber(beautifulArrangement, n, k))
  }
    
  return beautifulArrangement;
};

function getNextArrangementNumber(arrangement: number[], n: number, k:number): number {
  if (arrangement.length === 0) {
    return 1
  }

  const differences = getDifferences(arrangement)
  const distinctDifferencesCount = getDistinctDifferencesCount(differences)
  
  if (distinctDifferencesCount < k) {
    return getNumberThatCreatesDistinctDifference(arrangement, n)
  } else {
    return getNumberThatMatchesExistingDifference(arrangement, n)
  }
}

function getNumberThatCreatesDistinctDifference(arrangement: number[], n: number): number {
    const differences = getDifferences(arrangement)
    const distinctDifferences = new Set([...differences])
    const possibleNumbers = new Set(Array.from(Array(n).keys()).map(i => i += 1))
    const usedNumbers = new Set(arrangement)
    const unusedNumbers = new Set([...possibleNumbers].filter(x => !usedNumbers.has(x)))
    const mostRecentNumber = arrangement[arrangement.length - 1]
    for (let unusedNumber of unusedNumbers) {
      if (!distinctDifferences.has(Math.abs(mostRecentNumber - unusedNumber))) {
         return unusedNumber
      }
    }
    throw new Error(`No number that creates distinct difference found for arrangement ${arrangement}, n ${n}, mostRecentNumber ${mostRecentNumber}, unusedNumbers: ${[...unusedNumbers]}`)

}

function getNumberThatMatchesExistingDifference(arrangement: number[], n: number): number {
    const differences = getDifferences(arrangement)
    const distinctDifferences = new Set([...differences])
    const possibleNumbers = new Set(Array.from(Array(n).keys()).map(i => i += 1))
    const usedNumbers = new Set(arrangement)
    const unusedNumbers = new Set([...possibleNumbers].filter(x => !usedNumbers.has(x)))
    const mostRecentNumber = arrangement[arrangement.length - 1]
    for (let unusedNumber of unusedNumbers) {
      if (distinctDifferences.has(Math.abs(mostRecentNumber - unusedNumber))) {
        return unusedNumber
      }
    }
    throw new Error(`No number that matches existing difference found for arrangement: ${arrangement}, n: ${n}, mostRecentNumber: ${mostRecentNumber}, unusedNumbers: ${[...unusedNumbers]}`)
}

function getDistinctDifferencesCount(differences: number[]): number {
  const distinctDifferencesCount = new Set([...differences]).size;
  console.log(`distinctDifferencesCount: ${distinctDifferencesCount}`)
  return distinctDifferencesCount
}

function getDifferences(arrangement: number[]): number[] {
  let differences = new Array();
  pairwise(arrangement, (curr, next) => differences.push(Math.abs(curr - next)))
  console.log(`differences: ${differences}`)
  return differences
}

function pairwise(arr: number[], func: (curr: number, next: number) => {}){
    for(var i=0; i < arr.length - 1; i++){
        func(arr[i], arr[i + 1])
    }
}

const result = constructArray(3, 2)
console.log(`result: ${result}`)
// const differences = getDifferences([1,3,2])
// const distinctDifferences = getDistinctDifferences(differences)

