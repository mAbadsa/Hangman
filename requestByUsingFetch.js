const getPuzzle = async (wordCount) => {
    const response = await fetch('http://puzzle.mead.io/puzzle?wordCount=' + wordCount, {});
    if (response.status === 200) {
        const data = await response.json();
        return data;
    } else {
        throw new Error('Unable to fetch the puzzle!');
    }
}

const getPuzzleOld = (wordCount) => {
    return fetch('http://puzzle.mead.io/puzzle?wordCount=' + wordCount, {
        headers: {
            'Content-Type': 'application/json'
        },
        method: 'GET'
    }).then(res => {
        if (res.status === 200) {
            return res.json();
        } else {
            throw new Error('Unable to fetch the puzzle!');
        }
    }).then(data => {
        return data.puzzle;
    })
}
