const http = require('http');
const app = require('./app');
const port = 3000;

var server = http.createServer(app);
server.listen(port,() => {
    console.log(`Server Run on port ${port}`);
})