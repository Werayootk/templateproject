/* const Evenemitter = require('events');
const emitter = new Evenemitter();

//Register listener
emitter.on(('messageLogged'), function() {
    console.log('Ok messageLog');
});

//Raise Even
emitter.emit('messageLogged'); */

const http = require('http');
const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.write('Hello world');
        res.end();
    }
});

server.listen(3000);

console.log('Listen on port 3000');