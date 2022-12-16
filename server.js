const http = require('http');
require('dotenv').config();

const PORT = process.env.PORT || 5001;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader("Content-Type","application/json");
    res.write(JSON.stringify({message:"Hello Aryan, let's learn node"}));
    res.end();
});

server.listen(PORT, () => {
    console.log(`server started on port : ${PORT}`)
})

