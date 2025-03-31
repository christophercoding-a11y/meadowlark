const express = require('express')
// for handlebars
const expressHandlebars = require('express-handlebars')
const fortune = require('./lib/fortune')


const app = express()

const port = process.env.port || 3000


// add public as static directory
app.use(express.static(__dirname + '/public'))

//configure view engine
app.engine('handlebars', expressHandlebars.engine({
    defaultLayout: 'main'
}))

app.set('view engine', 'handlebars')
// home page
// .get(path, callback func)
app.get('/', (req, res)=> res.render('home'))

// about page
app.get('/about', (req, res)=> {
    res.render('about', { fortune: fortune.getFortune()})
})

// custom 404 page
app.use((req, res)=> {
    // res.type('text/plain')
    res.status(404)
    // res.send('404 - Not Found')
    res.render('404')
})

// custom 500 page
app.use((err, req, res, next) => {
    console.error(err.message)
    res.status(500)
    res.render('500')
})

app.listen(port, ()=> console.log (
    `Express started on http://localhost:${port} ` + `press Ctrl-C to terminate.`
))