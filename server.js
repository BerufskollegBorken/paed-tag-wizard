class Wahl{
    constructor(name, von, bis, beschreibung, optionen, dbFeld) {
        this.name = name
        this.von = von
        this.bis = bis
        this.beschreibung = beschreibung
        this.optionen = optionen
        this.dbFeld = dbFeld
    }
}

let tagesablauf = []
tagesablauf.themaDesTages = "Pädagogischer Tag 2019 am 5. März"
tagesablauf.titel = "Unser Tagesablauf"
tagesablauf.beschreibung = "Hier finden Sie den voraussichtlichen Tagesablauf für den pädagogischen Tag am 5.3.2019."
tagesablauf.push({von:"08:30", bis:"09:00", thema:"Eingangsreferat", beschreibung: "Von und mit Gerti Kohlruss"})
tagesablauf.push({von:"09:45", bis:"10:45", thema:"1. Workshop", beschreibung: "Jeder muss sich bis Mitte Februar einem Workshopangebot zuordnen!"})
tagesablauf.push({von:"11:00", bis:"12:00", thema:"2. Workshop", beschreibung: "Jeder muss sich bis Mitte Februar einem Workshopangebot zuordnen!"})
tagesablauf.push({von:"12:15", bis:"13:00", thema:"Mittagspause", beschreibung: "Guten Appetit!"})
tagesablauf.push({von:"13:15", bis:"14:15", thema:"Anwendungsphase", beschreibung: "Jeder muss sich bis Mitte Februar einem Workshopangebot zuordnen! Zuordnung nach Fächern. Leitfrage: Was kann ich konkret in meinem Unterricht umsetzen?"})
tagesablauf.push({von:"13:15", bis:"14:15", thema:"Plenum", beschreibung: "Gemeinsame Auswertung."})

let zuspruch = ["Wunderbar!", "Vorzüglich!", "Sehr schön!", "Wow!", "Traumhaft!", "Herrlich!", "Ausgezeichnet!"]

let wahlen = []
wahlen.titel = "Bitte wählen Sie!"
wahlen.beschreibung = "Speichern nicht vergessen!"

let optionen = []        
optionen.titel = "Unser Workshop-Angebot."
optionen.beschreibung = "Informieren Sie sich hier über die verschiedenen Angebote. Welche beiden Themen wecken Ihr Interesse?"
optionen.push({id:"Laptops", name:"Workshop", label:"Umgang mit (Schüler-)Laptops", beschreibung:""})
optionen.push({id:"Padlet", name:"Workshop", label:"Padlet", beschreibung:"Padlet Beschreibung"})
optionen.push({id:"Egmond",name:"Workshop", label:"Egmond", beschreibung:""})
optionen.push({id:"LearningApps",name:"Workshop", label:"Learning Apps", beschreibung:""})
optionen.push({id:"Videos",name:"Workshop", label:"Erklärvideos", beschreibung:""})
optionen.push({id:"Brainstorming",name:"Workshop", label:"Andere Art 'brainstorming'", beschreibung:""})
optionen.push({id:"Schreibwerkstatt",name:"Workshop", label:"Schreibwerkstatt", beschreibung:""})

wahlen.push(new Wahl("Workshopphase 1", "09:15","10:15", "Ihre Auswahl des Workshop Nr.1", optionen, "workshop1")) 
wahlen.push(new Wahl("Workshopphase 2", "10:30","11:30", "Ihre Auswahl des Workshop Nr.2", optionen, "workshop2")) 
optionen = []
optionen.push({id:"Deutsch", name:"Workshop", label:"Deutsch"})
optionen.push({id:"Mathe", name:"Workshop", label:"Mathe"})
optionen.push({id:"Englisch",name:"Workshop", label:"Englisch"})
optionen.push({id:"Sprachen",name:"Workshop", label:"Sprachen (ohne Englisch)"})
optionen.push({id:"Religion",name:"Workshop", label:"Religion"})
optionen.push({id:"Sport",name:"Workshop", label:"Sport"})
optionen.push({id:"Technik",name:"Workshop", label:"Technik"})
optionen.push({id:"Soziales",name:"Workshop", label:"Soziales"})
optionen.push({id:"Agrar",name:"Workshop", label:"Agrar"})
optionen.push({id:"Naturwissenschaften",name:"Workshop", label:"Naturwissenschaften (Bio, Physik)"})
optionen.push({id:"Politik",name:"Workshop", label:"Politik, Gesellschaftslehre / Geschichte"})
optionen.push({id:"Wirtschaft",name:"Workshop", label:"Wirtschaft"})

wahlen.push(new Wahl("Anwendungsphase", "13:30","14:30", "Ihre Auswahl für die Anwendungsphase", optionen, "anwendungsphase")) 

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

    console.log("User->" + istAngemeldetAls(req.cookies))

    if(istAngemeldetAls(req.cookies)){        
        let lehrerKrz = istAngemeldetAls(req.cookies)   
        dbVerbindung.query("SELECT * from lehrer WHERE lehrerkrz = '" + lehrerKrz + "';", (err, rows) => {             
            if (err) return next(err)                   
            if(rows[0] === undefined){
                console.log("Cookies werden gelöscht .")
                res.cookie('istAngemeldetAls', '')              
                res.render('anmelden.ejs', {               
                    themaDesTages: tagesablauf.themaDesTages,             
                    titel: "",
                    beschreibung : "",          
                    themaDesTages: tagesablauf.themaDesTages,
                    anzeigen: ["Es kann Lehrer mit dem Kürzel '" + lehrerKrz + "' und der von Ihnen eingetippten PIN gefunden werden!", "Versuchen Sie es erneut!", "Die PIN sollte Ihnen per E-Mail zugegagnen sein."],                
                })
            }else{                

                let alert = []

                for(i = 0; i < wahlen.length; i++){
                    if(eval('rows[0].' + wahlen[i].dbFeld)){
                        alert.push(wahlen[i].name + ": Sie haben " + eval('rows[0].' + wahlen[i].dbFeld) + " gewählt. " + zuspruch[Math.floor(Math.random()*zuspruch.length)] )
                    }
                }

                res.render('index.ejs', {     
                    alert: alert,
                    themaDesTages: tagesablauf.themaDesTages,               
                    wahlen : wahlen,
                    anzeigen: ["Sie sind erfolgreich angemeldet!", "Gut gemacht, " + lehrerKrz + "!", "Wie Sie das immer wieder hinkriegen!"],                
                })
            }        
        })   
    }else{
        console.log("Cookies werden gelöscht ......")
        res.cookie('istAngemeldetAls', '')
        res.render('anmelden.ejs', {  
            themaDesTages: tagesablauf.themaDesTages,             
            titel: "",
            beschreibung : "",          
            themaDesTages: tagesablauf.themaDesTages,            
            anzeigen : ["Bitte melden Sie sich mit den Zugangsdaten an, die Ihnen per E-Mail zugegangen sind.", "Bei Fragen fragen:-)"]          
        })
    }
})

// Die app.post wird aufgerufen, sobald der Button im Formular geklickt wird.

app.post('/',(req, res, next) => {    
    
    let lehrerKrz = req.body.lehrerKrz
    let pin = req.body.pin

    console.log(lehrerKrz + " " + pin)

    dbVerbindung.query("SELECT * from lehrer WHERE lehrerkrz = '" + lehrerKrz + "' AND pin = " + pin + ";", (err, rows) => { 
        if (err) return next(err)       
        
		if(rows[0] === undefined){    
            console.log("Cookies werden gelöscht ....")                
            res.cookie('istAngemeldetAls', '')            
            res.render('anmelden.ejs', {      
                themaDesTages: tagesablauf.themaDesTages,             
                titel: "",
                beschreibung : "",          
                themaDesTages: tagesablauf.themaDesTages,            
                anzeigen: ["Es kann Lehrer mit dem Kürzel '" + lehrerKrz + "' und der von Ihnen eingetippten PIN gefunden werden!", "Versuchen Sie es erneut!", "Die PIN sollte Ihnen per E-Mail zugegagnen sein."],                
            })
        }else{     
            res.cookie('istAngemeldetAls', lehrerKrz)
            let alert = []
            for(i = 0; i < wahlen.length; i++){
                if(eval('rows[0].' + wahlen[i].dbFeld)){
                    alert.push(wahlen[i].name + ": Sie haben " + eval('rows[0].' + wahlen[i].dbFeld) + " gewählt."  + zuspruch[Math.floor(Math.random()*zuspruch.length)] )
                }
            }            
            res.render('index.ejs', {   
                alert: alert,
                themaDesTages: tagesablauf.themaDesTages,                 
                wahlen : wahlen,
                anzeigen: ["Sie sind erfolgreich angemeldet!", "Gut gemacht, " + lehrerKrz + "!", "Wie Sie das immer wieder hinkriegen!"],                
            })
        }        
    })       
})

app.post('/anmelden',(req, res, next) => {                
    res.cookie('istAngemeldetAls', '')    
    res.render('anmelden.ejs', {                    
        themaDesTages: tagesablauf.themaDesTages,             
        titel: "Sie müssen sich einloggen.",
        beschreibung : "Geben Sie Ihr Kürzel und die PIN ein, die Ihnen per E-Mail zugegangen ist.",          
        themaDesTages: tagesablauf.themaDesTages,            
        anzeigen: []        
    })    
})

app.get('/anmelden',(req, res, next) => {                
    res.cookie('istAngemeldetAls', '')    
    res.render('anmelden.ejs', {         
        titel: "Sie müssen sich einloggen.",
        beschreibung : "Geben Sie Ihr Kürzel und die PIN ein, die Ihnen per E-Mail zugegangen ist.",          
        themaDesTages: tagesablauf.themaDesTages,            
        anzeigen: []        
    })    
})

app.get('/tagesablauf',(req, res, next) => {              
    res.render('tagesablauf.ejs', {       
        themaDesTages: tagesablauf.themaDesTages,             
        tagesablauf: tagesablauf
    })    
})

app.get('/workshops',(req, res, next) => {           
    res.render('workshops.ejs', {         
        themaDesTages: tagesablauf.themaDesTages,             
        optionen: wahlen[0].optionen
    })    
})

app.get('/about',(req, res, next) => {           
    res.render('about.ejs', {                 
        jahr : (new Date()).getFullYear()
    })    
})

app.get('/wahl',(req, res, next) => {                    
    
    console.log("User: " + istAngemeldetAls(req.cookies))

    if(req.query.w >= wahlen.length) return next(new Error("Unzulässiger Parameter!"))

    let alert = "Ihre vorzügliche Wahl für " + wahlen[req.query.w].name + ": " 

    dbVerbindung.query("SELECT " + wahlen[req.query.w].dbFeld + " FROM lehrer WHERE lehrerKrz = '" + istAngemeldetAls(req.cookies) + "';", (err, rows) => { 
        
        if (err) return next(err)       
    
        if(eval('rows[0].' + wahlen[req.query.w].dbFeld)){
            alert += eval('rows[0].' + wahlen[req.query.w].dbFeld)
        }else{
            alert = ""
        }

        if(istAngemeldetAls(req.cookies)){        
            res.render('wahl.ejs', { 
                themaDesTages: tagesablauf.themaDesTages,
                titel: wahlen.titel,
                alert: alert,
                beschreibung: wahlen.beschreibung,        
                hinweis : wahlen[req.query.w].beschreibung,
                index: req.query.w,
                anzeigen : [],
                items : wahlen[req.query.w]
            })
        }else{
            res.render('anmelden.ejs', {            
                themaDesTages: tagesablauf.themaDesTages,             
                titel: "",
                beschreibung : "",          
                themaDesTages: tagesablauf.themaDesTages,
                anzeigen: ""
            })
        }
    })
})

app.post('/wahl',(req, res, next) => { 
    if(istAngemeldetAls(req.cookies)){      
        let wahl = ""
        let alert = "Sie haben nicht gewählt, bzw. Ihre bisherige Wahl wieder gelöscht."

        if(req.body.element){
            wahl = req.body.element
            alert = "Sie haben vorzüglich gewählt: " + req.body.element
        }
        
        dbVerbindung.query("SELECT * FROM lehrer WHERE lehrerKrz = '" + istAngemeldetAls(req.cookies) + "';", (err, rows) => {         
            if (err) return next(err)       
            if(!rows[0]) return next(new Error("Fehlerhafte Abfrage."))            
            
            for(i = 0; i < wahlen.length; i++){                
                console.log(i + " " + wahlen.length)
                if(eval('rows[0].' + wahlen[i].dbFeld)){
                    if(eval('rows[0].' + wahlen[i].dbFeld) === req.body.element){
                        res.render('wahl.ejs', {                      
                            themaDesTages: tagesablauf.themaDesTages,  
                            titel: wahlen.titel,
                            alert: "Sie wollen den selben Workshop 2x wählen. Das geht nicht :-(",
                            beschreibung: wahlen.beschreibung,        
                            hinweis : wahlen[req.query.w].beschreibung,
                            index: req.body.index,
                            anzeigen : [],
                            items : wahlen[req.body.index]
                        })                    
                        return
                    }
                }
            }

            dbVerbindung.query("UPDATE lehrer SET " + wahlen[req.body.index].dbFeld + " = '" + wahl + "' WHERE lehrerKrz = '" + istAngemeldetAls(req.cookies) + "';", (err, rows) => { 
                if (err) return next(err)       
                
                res.render('wahl.ejs', {                      
                    themaDesTages: tagesablauf.themaDesTages,  
                    titel: wahlen.titel,
                    alert: alert,
                    beschreibung: wahlen.beschreibung,        
                    hinweis : wahlen[req.query.w].beschreibung,
                    index: req.body.index,
                    anzeigen : [],
                    items : wahlen[req.body.index]
                })                    
            })      
        })
    }else{
        res.render('anmelden.ejs', {       
            themaDesTages: tagesablauf.themaDesTages,             
            titel: "",
            beschreibung : "",          
            themaDesTages: tagesablauf.themaDesTages,
            anzeigen: ""
        })
    }
})

app.use((err, req, res, next) => {    
    console.log(err.stack)
    res.render('error.ejs', {        
        error:["HOLY CRAP!!!", "Das hätte absolut <b>nicht</b> passieren dürfen!", "Try again, Sam!", err.message, "Falls Du nicht automatisch weitergeleitet wirst, dann Startseite neu laden, um fortzufahren."]
    }) 
})