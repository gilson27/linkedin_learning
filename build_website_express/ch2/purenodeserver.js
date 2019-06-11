const http = require("http");
const url = require('url');

const handler = (req, res) => {
    const parsedURL = url.parse(req.url,true);
    console.log(parsedURL);
    if (parsedURL.pathname === '/') {
        res.writeHead(200, {'Content-type':'text/plain'});
        res.write("Helllo World");
        res.end();
    } else if(parsedURL.pathname === '/hello') {
        const name = parsedURL.query.name;
        if (!name) {
            res.writeHead(404, {'Content-type':'text/plain'});
            res.end();
            return;
        }
        res.writeHead(200, {'Content-type':'text/plain'});
        res.write(`Hello ${name}`);
        res.end();
    } else if(parsedURL.pathname.startsWith('/user')) {
        const regx = new RegExp('\/user\/(.+)');
        const matches = regx.exec(parsedURL.pathname);
        if (!matches || !matches[1]) {
            res.writeHead(404, {'Content-type':'text/plain'});
            res.end();
            return;
        }
        res.writeHead(200, {'Content-type':'text/plain'});
        res.write(`Hello ${matches[1]}`);
        res.end();
    } else if(parsedURL.pathname === '/time') {
        res.writeHead(200, {'Content-type':'text/plain'});
        res.write(new Date().toString());
        res.end();
    } else {
        res.writeHead(404, {'Content-type':'text/plain'});
        res.end();
    }

};

const server = http.createServer(handler);
server.listen(3000);