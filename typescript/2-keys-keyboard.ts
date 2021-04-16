interface NotepadState {
    characters: number;
    lastCopied: number;
}

function minSteps(n: number): number {
    if (n === 1) {
        return 0
    }
    return performOperation(n, 1, {
        characters: 1,
        lastCopied: 1
    })
};

function performOperation(target: number, steps: number, state: NotepadState): number {
    const {characters, lastCopied} = state;
    if (characters === target) {
        console.log(`target: ${target}, steps: ${steps}, state: ${JSON.stringify(state)}`)
        return steps
    }
    if (characters > target) {
        // Ideally we'd throw an error here
        return Number.MAX_SAFE_INTEGER;
    }
    const paste = performOperation(target, steps + 1, {
        characters: characters + lastCopied,
        lastCopied: lastCopied
    })

    if (characters === lastCopied) {
        return paste
    }

    const copy = performOperation(target, steps + 1, {
        characters: characters,
        lastCopied: characters
        }
    )
    return Math.min(copy, paste)
}
