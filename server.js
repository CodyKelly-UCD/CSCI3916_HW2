var express = require('express')
var http = require('http')
var bodyParser = require('body-parser')

var app = express()
app.use(bodyParser.text({
    type: function(req) {
        return 'text'
    }
}))

app.post('/post', function (req, res) {
    console.log(req.body)
    res = res.status(200)
    if (req.get('Content-Type')) {
        console.log("Content-Type: " + req.get('Content-Type)'))
        res = res.type(req.get('Content-Type'))
    }
    res.send(req.body)
})

app.put('/put', function (req, res) {
    console.log(req.body)
    res = res.status(200)
    if (req.get('Content-Type')) {
        console.log("Content-Type: " + req.get('Content-Type)'))
        res = res.type(req.get('Content-Type'))
    }
    res.send(req.body)
})

app.get('/get', function (req, res) {
    console.log(req.body)
    res = res.status(200)
    if (req.get('Content-Type')) {
        console.log("Content-Type: " + req.get('Content-Type)'))
        res = res.type(req.get('Content-Type'))
    }
    res.send(req.body)
})

app.delete('/delete', function (req, res) {
    console.log(req.body)
    res = res.status(200)
    if (req.get('Content-Type')) {
        console.log("Content-Type: " + req.get('Content-Type)'))
        res = res.type(req.get('Content-Type'))
    }
    res.send(req.body)
})

http.createServer(app).listen(process.env.PORT || 8080)