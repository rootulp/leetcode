function maxScore(cardPoints: number[], k: number): number {
    const totalPoints = sum(cardPoints);
    const windowLength = cardPoints.length - k;
    let max = 0;
    for (let i = 0; i <= cardPoints.length - windowLength; i++) {
        const window = cardPoints.slice(i, i + windowLength);
        const windowSum = sum(window);
        const answer = totalPoints - windowSum;
        // console.log(`window: ${window}, windowSum: ${windowSum}, answer: ${answer}`)
        max = Math.max(max, answer);
    }
    return max;
};

function sum(arr: number[]): number {
    return arr.reduce((a, b) => a + b, 0);
}
