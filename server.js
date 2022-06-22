const express = require('express')
const serveStatic = require('serve-static')
const path = require('path')

const app = express()
const port = process.env.PORT || 8080

//here we are configuring dist to serve app files
app.use('/', serveStatic(path.join(__dirname, '/dist')))

// add another comment - complement comment with signed commit
// this * route is to serve project on different page routes except root `/`
app.get(/.*/, function (req, res) {
	res.sendFile(path.join(__dirname, '/dist/index.html'))
})

app.listen(port)

console.log(`app is listening on port: ${port}`)
