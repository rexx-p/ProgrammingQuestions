function printMatrix(matrix) {
   getString(matrix[0].length, matrix[0][0].length);
    for (let i = 0; i < matrix.length; i++) {
        const row = matrix[i];
        let rowToPrint = [];
        for (let j = 0; j < row.length; j++) {
            const element = row[j];
            rowToPrint.push(element);
        }
        console.log(""+i, " |", rowToPrint.join(','));
    }
    console.log()
}

getString = function (rowLength, wordLength) {
    let str = ['    '];
    for (let index = 0; index < rowLength; index++) {
        const element = rowLength[index];
        str.push(index+'   ');
    }
    console.log( str.join('  '))
}
module.exports = { printMatrix };