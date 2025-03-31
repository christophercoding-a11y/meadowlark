const express = require('express')
// for handlebars
const expressHandlebars = require('express-handlebars')


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
// app.get('/', (req, res)=> {
//     res.type('text/plain')
//     res.send('Meadowlark Travel')
// })
app.get('/', (req, res)=> res.render('home'))

// app.get('/about', (req, res)=> {
//     res.type('text/plain')
//     res.send('About Meadowlark Travel')
// })
app.get('/about', (req, res)=> res.render('about'))

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
    // res.type('text/plain')
    res.status(500)
    // res.send('500 - Server Error')
    res.render('500')
})

app.listen(port, ()=> console.log (
    `Express started on http://localhost:${port} ` + `press Ctrl-C to terminate.`
))