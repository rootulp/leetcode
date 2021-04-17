interface Pair {
    character: string;
    occurences: number;
}

function removeDuplicates(s: string, k: number): string {
    const stack: Pair[] = [];
    for (let i = 0; i < s.length; i++) {
        if(stack.length === 0) {
            stack.push({character: s[i], occurences: 1})
        } else if (stack[stack.length - 1].character === s[i]) {
            let topOfStack = stack[stack.length - 1];
            topOfStack = {...topOfStack, occurences: topOfStack.occurences + 1}
            stack[stack.length - 1] = topOfStack;
        } else {
            stack.push({character: s[i], occurences: 1})
        }

        if(stack[stack.length - 1].occurences === k) {
            stack.pop();
        }
    }
    console.log(`stack: ${JSON.stringify(stack)}`);
    return stackToString(stack);
};

function stackToString(stack: Pair[]): string {
    let result = "";
    while (stack.length !== 0) {
        const topOfStack = stack.pop();
        const stringForPair = topOfStack.character.repeat(topOfStack.occurences);
        result = stringForPair + result;
    }
    return result;
}
