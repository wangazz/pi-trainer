const fs = require('fs');
const http = require('http');
const path = require('path');
const port = process.env.PORT || 5000;

http.createServer((request, response) => {
    let filePath = '.' + request.url;
    if (filePath == './') {
        filePath = './index.html';
    }

    let contentType;
    const extname = path.extname(filePath);
    switch (extname) {
        case '.js':
            contentType = 'text/javascript';
            break;
        case '.css':
            contentType = 'text/css';
            break;
        default:
            contentType = 'text/html';
            break;
    }

    fs.readFile(filePath, (error, content) => {
        if (error) {
            response.writeHead(500);
            response.end();
        } else {
            response.writeHead(200, { 'Content-Type': contentType });
            response.end(content, 'utf-8');
        }
    });
}).listen(port);

console.log(`Server listening on http://127.0.0.1:${port}/`);
