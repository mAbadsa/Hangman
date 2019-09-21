const getPuzzle = (wordCount) => {
    return fetch('http://puzzle.mead.io/puzzle?wordCount=' + wordCount, {
        headers: {
            'Content-Type': 'application/json'
        },
        method: 'GET'
    }).then(res => {
        if(res.status === 200) {
            return res.json();
        } else {
            throw new Error('Unable to fetch the puzzle!');
        }
    })
}
