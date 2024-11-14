const fs = require('fs');

// use asince fs
fs.readFile('./texts/read.text', 'utf-8',(error, data) => {
    if(error) {
        throw new Error('error reding text')
    }
    console.log(data)
})



