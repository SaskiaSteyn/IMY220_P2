// const http = require('http');
// const fileManager = require('./fileManager');
// const dataValidation = require('./dataValidation');
// const fs = require('fs');
// http.createServer((request, response) => {
//     fs.readFile('index.html', (err, data) => {
//         response.writeHead(200, {
//             'Content-Type': 'text/html',
//             'Content-Length': data.length
//             });
//             response.write(data);
//             response.end();
//     });
// }).listen(1337, '127.0.0.1', () => {
//     console.log('Server running at http://127.0.0.1:1337');
//     });


const fileManager = require('./fileManager');
const dataValidation = require('./dataValidation');
const filePath = 'events.json';

function main(){
    var data = fileManager.fileRead();
    console.log(data);

    var checkData = dataValidation.checkDate(filePath);
    console.log(checkData);

}

main();