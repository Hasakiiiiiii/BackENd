const http = require('http');
const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end('Welcome to home page');
    }
    if (req.url === '/detail') {
        res.end('Welcome to detail page');
    }
    res.end('Error');
});

server.listen(5000, () => {
    console.log('Server is running on port 5000');
});