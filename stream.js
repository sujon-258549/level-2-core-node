const http = require('http')


//  create local servire 
// 
const servire = http.createServer()

servire.on('request', (req, res) => {
    console.log(req.url, req.method);
    res.end('hello servire Howare You')
})

servire.listen(3000, () => {
    console.log(' servire is raning')
})