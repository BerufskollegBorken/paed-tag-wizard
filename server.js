const express = require('express')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')

const app = express()
app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(cookieParser())
app.use(bodyParser.urlencoded({extended: true}))

const server = app.listen(process.env.PORT || 3000, () => {
    console.log('Server lauscht auf Port %s', server.address().port)    
})

function istAngemeldet(cookie){   // cookie = { istAngemeldet: '0' } oder { istAngemeldet: '1' }
    
    let cookieNullEinsString = cookie["istAngemeldet"]   // "0" oder "1"
    
    let cookieNullEinsInt = parseInt(cookieNullEinsString)  // 0 oder 1 bzw. false oder true

    console.log("istAngemeldet: " + cookie["istAngemeldet"])
    
    return cookieNullEinsInt     
}

app.get('/',(req, res, next) => {   
    if(istAngemeldet(req.cookies)){        
        res.render('index.ejs', {                    
            anzeigen: ["Sie sind angemeldet.", "Herzlich willkommen!"]
        })
    }else{
        res.render('anmelden.ejs', {            
        })
    }
})

app.post('/',(req, res, next) => {    
    if(req.body.password === "123"){    
        res.cookie('istAngemeldet', 1)    
        res.render('index.ejs', {                    
            anzeigen: ["Erfolgreich eingeloggt!"]        
        })    
    }else{
        res.cookie('istAngemeldet', 0)
        res.render('anmelden.ejs', {                                        
        })
    }
})

app.post('/abmelden',(req, res, next) => {                
    res.cookie('istAngemeldet', 0)    
    res.render('anmelden.ejs', {                    
        anzeigen: "Angemeldet"        
    })    
})

app.use((err, req, res, next) => {    
    console.log(err.stack)
    res.render('error.ejs', {        
        error:["F E H L E R", err.message, "Falls Du nicht automatisch weitergeleitet wirst, dann ...", "Seite neu laden, um fortzufahren."]
    }) 
})