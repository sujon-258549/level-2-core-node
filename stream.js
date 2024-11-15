const http = require('http');
const fs = require('fs');

//  create local servire 
const server = http.createServer()

server.on('request', (req, res) => {
    if (req.url === "/read-file"&& req.method === "GET") {
        const stream = fs.createReadStream(process.cwd() + '/texts/read.text')
        stream.on('data', (buffer) => {
            res.write(buffer)
        })
        stream.on('end', () => {

            res.end('hello servire Howare You')
        })
    };
    // Create a stream from some character device.

})

server.listen(3000, () => {
    console.log(' servire is raning')
})






//         // Create a stream to read the file
//         const stream = fs.createReadStream(process.cwd() + '/texts/read.text');

//         stream.on('data', (chunk) => {
//             res.write(chunk);
//         });

//         stream.on('end', () => {
//             res.end(); // End the response when the file has been completely read
//         });

//         stream.on('error', (error) => {
//             res.writeHead(500, { 'Content-Type': 'text/plain' });
//             res.end('Error reading file');
//         });
//     } else {
//         res.writeHead(404, { 'Content-Type': 'text/plain' });
//         res.end('Not Found');
//     }
// });

// server.listen(3000, () => {
//     console.log('Server is running on port 3000');
// });
