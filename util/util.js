function printMatrix(matrix) {
    getString(matrix[0].length, matrix[0][0].length);
    for (let i = 0; i < matrix.length; i++) {
        const row = matrix[i];
        let rowToPrint = [];
        for (let j = 0; j < row.length; j++) {
            const element = row[j];
            rowToPrint.push(element);
        }
        console.log("" + i, " |", rowToPrint.join(','));
    }
    console.log()
}

getString = function (rowLength, wordLength = 1) {
    let str = [getStr(4, ' ')];
    for (let index = 0; index < rowLength; index++) {
        const element = rowLength[index];
        str.push(index + getStr(wordLength - 1, ' '));
    }
    console.log(str.join(' '))
}

getStr = function (n, character) {
    let s = '';
    for (let i = 0; i < n; i++) {
        s = s + character;
    }
    return s;
}

module.exports = { printMatrix };