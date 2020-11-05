const xlsxFile = require('read-excel-file/node');
const fs = require('fs');
const { stringify } = require('querystring');

function readExcel(savePath, srcPath) {
    xlsxFile(fs.createReadStream(srcPath)).then((rows) => {

        strArray = JSON.stringify(rows, null, '\t');

        fs.writeFile(savePath , strArray, function (err) {
            if (err) throw console.log(err);
            console.log('Wrote SMI Array');
            });
        console.log(rows);
        console.table(rows);

        console.log(rows[2]);
    });
};

// function writeExcel(savePath, srcPath) {
//     fs.writeFile(savePath , (readExcel(srcPath)), function (err) {
//         if (err) throw console.log(err);
//         console.log('Wrote SMI Array');
//         })
//     };

// let smi = xlsxFile('./TestSMI.xlsx');

readExcel('./test.txt', './TestSMI2.xlsx');