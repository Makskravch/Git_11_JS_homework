const http = require('http')
const fs = require('fs')
const server = http.createServer(
    (req, resp) => {
        if(req.url == '/date') {
            resp.end(new Date().toString())
        } else if(req.url == '/name') {
            resp.end('Maksym')
        } else if(req.url == '/surname') {
            resp.end('Kravchuk')
        } else if(req.url == '/file') {
            fs.readFile('index.js', function(err, data) {
                if(err) {
                    console.error(err)
                    resp.statusCode = 500
                    resp.end('Помилка на сервері!')
                    return
                }
                resp.writeHead(200, {'content-type': 'text/plain'})
                resp.write('Hello readFile!')
                resp.end()
            })
        } else {
            resp.writeHead(200, {'content-type': 'text/plain'})
            resp.write('Hello world!')
            resp.end()
        }
    }
)
server.listen(2500)
console.log('Server started');
