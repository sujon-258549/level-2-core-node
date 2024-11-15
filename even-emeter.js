const EventEmeter = require('events')

const myEvent = new EventEmeter()

myEvent.on('hellow', ()=>{
    console.log('hellow how are you')
})
myEvent.on('hellow', (messang)=>{
    console.log(messang )
})

myEvent.emit('hellow', 'fien')