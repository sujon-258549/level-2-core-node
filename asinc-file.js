const fs = require('fs');

// use asince fs
fs.readFile('./texts/read.text', 'utf-8',(error, data) => {
    if(error) {
        throw new Error('error reding text')
    }
    fs.writeFile('./texts/write.text', data, 'utf-8',(error) =>{
        if(error){
            throw Error('vai moi nai')
        }
    })
    console.log(data)
})



