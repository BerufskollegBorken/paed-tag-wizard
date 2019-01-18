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

const mysql = require('mysql')
const dbVerbindung = mysql.createConnection({
    host: "130.255.124.99", 
    user: "placematman", 
    password: "BKB123456!", 
    database: "dbpaedtag"
})

dbVerbindung.connect()

function istAngemeldetAls(cookie){   // cookie = { istAngemeldetAls: '' } oder { istAngemeldetAls: 'BM' }
    return cookie["istAngemeldetAls"]     
}

// Die app.get wird aufgerufen, sobald die Webseite aufgerufen wird.

app.get('/',(req, res, next) => {     

    console.log("::")
    console.log(req.cookies)
    console.log(istAngemeldetAls(req.cookies))
    console.log("::")

    if(istAngemeldetAls(req.cookies)){        

        let lehrerKrz = istAngemeldetAls(req.cookies)

        dbVerbindung.query("SELECT * from lehrer WHERE lehrerkrz = '" + lehrerKrz + "';", (err, rows) => { 
            
            if (err) return next(err)       
            
            if(rows[0] === undefined){
                console.log("Cookies werden gelöscht")
                res.cookie('istAngemeldetAls', '')              
                res.render('anmelden.ejs', {                    
                    anzeigen: ["Es kann Lehrer mit dem Kürzel '" + lehrerKrz + "' und der von Ihnen eingetippten PIN gefunden werden!", "Versuchen Sie es erneut!", "Die PIN sollte Ihnen per E-Mail zugegagnen sein."],                
                })
            }else{                
                res.render('index.ejs', {                    
                    anzeigen: ["Sie sind erfolgreich angemeldet!", "Gut gemacht, " + lehrerKrz + "!", "Wie Sie das immer wieder hinkriegen!"],                
                })
            }        
        })   
    }else{
        console.log("Cookies werden gelöscht ...")
        res.cookie('istAngemeldetAls', '')
        res.render('anmelden.ejs', {  
            anzeigen : ["Bitte melden Sie sich an!", "Die Zugangsdaten sind Ihnen per E-Mail zugegangen.", "Bei Fragen fragen: <a href='mailto:stefan.baeumer@berufskolleg-borken.de?Subject=Hallo' target='_top'>Stefan Bäumer</a>"]          
        })
    }
})

// Die app.post wird aufgerufen, sobald der Button im Formular geklickt wird.

app.post('/',(req, res, next) => {    
    
    let lehrerKrz = req.body.lehrerKrz
    let pin = req.body.pin
    
    dbVerbindung.query("SELECT * from lehrer WHERE lehrerkrz = '" + lehrerKrz + "' AND pin = " + pin + ";", (err, rows) => { 
        if (err) return next(err)       
        
		if(rows[0] === undefined){    
            console.log("Cookies werden gelöscht ....")                
            res.cookie('istAngemeldetAls', '')            
            res.render('anmelden.ejs', {                    
                anzeigen: ["Es kann Lehrer mit dem Kürzel '" + lehrerKrz + "' und der von Ihnen eingetippten PIN gefunden werden!", "Versuchen Sie es erneut!", "Die PIN sollte Ihnen per E-Mail zugegagnen sein."],                
            })
        }else{     
            console.log("User wird jetzt angemeldet als: " + lehrerKrz)       
            res.cookie('istAngemeldetAls', lehrerKrz)            
            res.render('index.ejs', {                    
                anzeigen: ["Sie sind erfolgreich angemeldet!", "Gut gemacht, " + lehrerKrz + "!", "Wie Sie das immer wieder hinkriegen!"],                
            })
        }        
    })   
})

app.post('/anmelden',(req, res, next) => {                
    res.cookie('istAngemeldetAls', '')    
    res.render('anmelden.ejs', {                    
        anzeigen: ["Abgemeldet.", "Geben Sie Ihr Kürzel und die PIN ein, die Ihnen per E-Mail zugegangen ist."]        
    })    
})

app.get('/anmelden',(req, res, next) => {                
    res.cookie('istAngemeldetAls', '')    
    res.render('anmelden.ejs', {                    
        anzeigen: ["Abgemeldet.", "Geben Sie Ihr Kürzel und die PIN ein, die Ihnen per E-Mail zugegangen ist."]        
    })    
})

app.get('/tagesablauf',(req, res, next) => {                
    
    let tagesablauf = []

    tagesablauf.push("<b>08:30 - 09:00 Uhr Eingangsreferat</b>")
    tagesablauf.push("<b>09:45 - 10:45 Uhr 1.Workshop<b>")
    //tagesablauf.push("Sie müssen sich ab Mitte Februar für den 1.Workshop Ihrer Wahl amelden!")
    tagesablauf.push("<b>11:00 - 12:00 Uhr 2.Workshop<b>")
    //tagesablauf.push("Sie müssen sich ab Mitte Februar für den 2.Workshop Ihrer Wahl amelden!")
    tagesablauf.push("<b>12:15 - 13:00 Mittagspause<b>")
    //tagesablauf.push("Der Festausschuss ...")
    tagesablauf.push("<b>13:15 - 14:15 Anwendungsphase<b>")
    //tagesablauf.push("Geplant ist, dass sich wiederum jeder einer Gruppe zuordnet. Die Gruppen sich nach Fächern / Bereichen vorgesehen. Falls zwei Gruppen geeignet erscheinen, dann frei auswählen.")
    tagesablauf.push("<b>13:15 - 14:15 Plenum<b>")

    res.render('tagesablauf.ejs', {                    
        anzeigen: tagesablauf
    })    
})

app.get('/workshops',(req, res, next) => {                

    let workshops = []

    workshops.push("<h2>Workshop 1 Padlet</h2><p>Hallo <a href='http://www.padlet.com/' target='_blank'>Padlet</a>  </p>")
    workshops.push("<h2>Workshop 2 Padlet</h2><p>Hallo <a href='http://www.padlet.com/' target='_blank'>Padlet</a>  </p>")
    res.render('workshops.ejs', {                    
        anzeigen: workshops
    })    
})

app.get('/auswahl1',(req, res, next) => {                
    
    if(istAngemeldetAls(req.cookies)){        
        res.render('auswahl1.ejs', { 
            anzeigen : ["Sie müssen auswähen!"]                               
        })
    }else{
        res.render('anmelden.ejs', {            
        })
    }
})

app.get('/auswahl2',(req, res, next) => {                
    
    if(istAngemeldetAls(req.cookies)){        
        res.render('auswahl2.ejs', { 
            anzeigen : ["Sie müssen auswähen!"]                               
        })
    }else{
        res.render('anmelden.ejs', {            
        })
    }
})

app.get('/auswahl3',(req, res, next) => {                
    
    if(istAngemeldetAls(req.cookies)){        
        res.render('auswahl3.ejs', { 
            anzeigen : ["Sie müssen auswähen!"]                               
        })
    }else{
        res.render('anmelden.ejs', {            
        })
    }
})



app.post('/auswahl1',(req, res, next) => {        
    if(istAngemeldetAls(req.cookies)){      
        let anzeigen = []
        anzeigen.push("Hallo")
        
        res.render('auswahl1.ejs', {                                
            anzeigen : anzeigen
        })
    }else{
        res.render('anmelden.ejs', {            
        })
    }
})

app.post('/auswahl2',(req, res, next) => {                
    
    if(istAngemeldetAls(req.cookies)){      

        let anzeigen = []
        
        res.render('auswahl2.ejs', {                                
            anzeigen : anzeigen
        })
    }else{
        res.render('anmelden.ejs', {            
        })
    }
})

app.post('/auswahl3',(req, res, next) => {                
    
    if(istAngemeldetAls(req.cookies)){      

        let anzeigen = []
        anzeigen.push("Hallo")
        
        res.render('auswahl3.ejs', {                                
            anzeigen : anzeigen
        })
    }else{
        res.render('anmelden.ejs', {            
        })
    }
})





app.use((err, req, res, next) => {    
    console.log(err.stack)
    res.render('error.ejs', {        
        error:["F E H L E R", err.message, "Falls Du nicht automatisch weitergeleitet wirst, dann ...", "Seite neu laden, um fortzufahren."]
    }) 
})