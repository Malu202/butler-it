// Importing http module
const http = require("http")

// Creating http server
const server = http.createServer((req, res) => {

    // Handling the request
    if (req.url == '/') {

        // Sending the response
        res.write("<h1>Worked!!<h1>")
        res.statusCode = 200

        // Ending the response
        res.end()
    }
})

// Listening the server
server.listen(process.env.PORT || 3000, () => {
    console.log("Server is Running")
})