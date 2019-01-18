const express = require('express')

// Cookies speichern kleine Code-Schnipsel im Browser.
// Cookies sind stets Key-Value-Paare.

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

// Die Funktion soll auswerten, ob jemand angemeldet ist oder nicht.
// Wenn jemand angemeldet ist, dann wird 1 zurückgegeben, ansonsten 0.
// Der Cookie wird als Key-Value-Paar als Parameter in die Funktion gegeben.

function istAngemeldet(cookie){   // cookie = { istAngemeldet: '0' } oder { istAngemeldet: '1' }
    
    // Der Value des Keys "istAngemeldet" wird ausgelesen.

    let cookieNullEinsString = cookie["istAngemeldet"]   // "0" oder "1"
    
    // Der Value "1" wird in die Ganzahl 1 umgewandelt.
    // Der Value "0" wird in die Ganzahl 0 umgewandelt.

    let cookieNullEinsInt = parseInt(cookieNullEinsString)  // 0 oder 1 bzw. false oder true

    console.log("istAngemeldet: " + cookie["istAngemeldet"])
    
    // Es wird die Ziffer 0 oder 1 zurückgegeben.
    // 0 hat den boolschen Wert false.
    // 1 hat den boolschen Wert true.

    return cookieNullEinsInt     
}

// Die app.get wird aufgerufen, sobald die Webseite aufgerufen wird.

app.get('/',(req, res, next) => { 
    
    // Es wird geprüft, ob der Anwender bereits angemeldet ist.

    if(istAngemeldet(req.cookies)){        

        // Falls der Anwender bereits angemeldet ist, wird er begrüßt.

        res.render('index.ejs', {                    
            anzeigen: ["Sie sind angemeldet.", "Herzlich willkommen!"]
        })
    }else{

        // Falls der Anwender nicht angemeldet ist, wird er zur 'anmelden.ejs'-Seite
        // weitergeleitet.

        res.render('anmelden.ejs', {            
        })
    }
})

// Die app.post wird aufgerufen, sobald der Button im Formular geklickt wird.

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