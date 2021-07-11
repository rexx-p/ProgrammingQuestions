function printMatrix(matrix) {
    console.log(matrix.map(x => '__').join(''));
    for (let i = 0; i < matrix.length; i++) {
        const row = matrix[i];
        let rowToPrint = [];
        for (let j = 0; j < row.length; j++) {
            const element = row[j];
            rowToPrint.push(element);
        }
        console.log(rowToPrint.join(','));
    }
}

module.exports = { printMatrix };