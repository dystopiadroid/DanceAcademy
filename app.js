const express = require('express')
const app = express()
const path = require('path')
const port = 3000

//EXPRESS RELATED STUFF----------------------------------------------------------------------------------

app.use('/static', express.static('static'))       //For Serving static files

//PUG RELATED STUFF---------------------------------------------------------------------------------------

app.set('view engine', 'pug')       //Setting template engine as pug 
app.set('views', path.join(__dirname, 'views'))         //Setting views directory

//ENDPOINTS-----------------------------------------------------------------------------------------------

app.get('/' , (req,res) => {
    const param = {}
    res.status(200).render('index.pug' , param)
})

//STARTING THE SERVER--------------------------------------------------------------------------------------

app.listen(port, () => {
    console.log('Server is listening in port ' + port)
})