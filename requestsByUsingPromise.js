const getPuzzle = wordCount => {
    const promise = new Promise((resolve, reject) => {
        const request = new XMLHttpRequest();
        request.addEventListener('readystatechange', (e) => {
            if (e.target.readyState === 4 && e.target.status === 200) {
                const data = JSON.parse(e.target.responseText);
                // callback(null, data.puzzle);
                resolve(data.puzzle);
            } else if (e.target.readyState === 4) {
                // callback("An error has been occurred", null);
                reject("An error has been occurred")
            }
        })

        request.open('GET', 'http://puzzle.mead.io/puzzle?wordCount=' + wordCount);
        request.send();
    })
    return promise;
}