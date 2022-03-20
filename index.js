const http = require("http")
const fetch = require('node-fetch');


const server = http.createServer((req, res) => {
    if (req.url == '/') {
        forwardRequest(req, res);
    }
})

server.listen(process.env.PORT || 3000, () => {
    console.log("Server is Running")
})

async function forwardRequest(req, res) {
    fetch('http://antischwitzomat.glitch.me/measurements', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: req.body
    });
    res.write("sending request");
    res.statusCode = 200;
    res.end();
    // .then(res => res.text())
    // .then(body => {
    //     res.write("Glitch response:\n" + body);
    //     res.statusCode = 200
    //     res.end()
    // });
}