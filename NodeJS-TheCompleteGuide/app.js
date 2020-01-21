const http = require('http');
const fs = require('fs');

const server =  http.createServer((req, res)=>{
   const url = req.url;
   const method = req.method;
   if(url === '/'){
    res.write('<html><head><title>sdfadsf</title><body><form action="/message" method="POST"><input type = "text" name="message"><input type = "submit" name="btn"></form></body></head></html>');
    return res.end();
   }

   if(url === '/message' && method ==="POST"){
       fs.writeFileSync('message.txt', 'Write STH');
       res.statusCode = 302;     
       res.setHeader('Location', '/');
       return res.end();
   }

   //process.exit();
   res.setHeader('Content-Type','text/html');
   res.write('<html><head><title>aaaaa</title></head></html>');
   res.end();
});



server.listen(3000);