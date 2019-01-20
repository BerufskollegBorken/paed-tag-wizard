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
tagesablauf.themaDesTages = "Pädagogischer Tag 2019"
tagesablauf.titel = "Tagesablauf"
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
optionen.titel = "Das Workshop-Angebot für Sie:"
optionen.beschreibung = "Informieren Sie sich hier über die verschiedenen Angebote. Welche beiden Themen wecken Ihr Interesse?"
optionen.push({id:"Laptops", name:"Workshop", label:"Umgang mit (Schüler-)Laptops", beschreibung:"", moderator: ""})
optionen.push({id:"Padlet", name:"Workshop", label:"Padlet", beschreibung:"Padlet Beschreibung", moderator: ""})
optionen.push({id:"Egmond",name:"Workshop", label:"Egmond", beschreibung:"", moderator: ""})
optionen.push({id:"LearningApps",name:"Workshop", label:"Learning Apps", beschreibung:"", moderator: ""})
optionen.push({id:"Videos",name:"Workshop", label:"Erklärvideos", beschreibung:"", moderator: ""})
optionen.push({id:"Brainstorming",name:"Workshop", label:"Andere Art 'brainstorming'", beschreibung:"", moderator: ""})
optionen.push({id:"Schreibwerkstatt",name:"Workshop", label:"Schreibwerkstatt", beschreibung:"", moderator: ""})

wahlen.push(new Wahl("Workshop 1", "09:15","10:15", "Ihre Auswahl des Workshop Nr.1", optionen, "workshop1")) 
wahlen.push(new Wahl("Workshop 2", "10:30","11:30", "Ihre Auswahl des Workshop Nr.2", optionen, "workshop2")) 

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

let footer = renderFooter(wahlen)

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
    if(istAngemeldetAls(req.cookies)){        
        let lehrerKrz = istAngemeldetAls(req.cookies)   
        dbVerbindung.query("SELECT * from lehrer WHERE lehrerkrz = '" + lehrerKrz + "';", (err, rows) => {             
            if (err) return next(err)                   
            if(rows[0] === undefined){
                console.log("Cookies werden gelöscht .")
                res.cookie('istAngemeldetAls', '')              
                res.render('anmelden.ejs', {               
                    header : renderHeader(tagesablauf.themaDesTages,"Infos und Wahlen zum Projekttag","Bitte melden Sie sich mit den Zugangsdaten an, die Ihnen per E-Mail zugegangen sind."),
                    footer : footer
                })
            }else{                
                let badges = []            
                badges.push({type:"danger", links:'<i class="fa fa-heart" aria-hidden="true"></i>', rechts:"Willkommen, " + lehrerKrz + "!"})                
                for(i = 0; i < wahlen.length; i++){          
                    let rechts = "noch nichts gewählt"
                    if(eval('rows[0].' + wahlen[i].dbFeld)){
                        rechts = eval('rows[0].' + wahlen[i].dbFeld)                        
                    }
                    badges.push({type:"success", links:wahlen[i].name, rechts:rechts})
                }

                res.render('index.ejs', {                     
                    header : renderHeader(tagesablauf.themaDesTages,"Infos und Wahlen zum Projekttag","Hallo"),
                    badges : renderBadges(badges),                    
                    wahlen : wahlen,
                    footer : footer
                })
            }        
        })   
    }else{
        console.log("Cookies werden gelöscht ......")
        res.cookie('istAngemeldetAls', '')
        res.render('anmelden.ejs', {               
            header : renderHeader(tagesablauf.themaDesTages,"Infos und Wahlen zum Projekttag","Bitte melden Sie sich mit den Zugangsdaten an, die Ihnen per E-Mail zugegangen sind."),
            footer : footer
        })
    }
})

app.post('/',(req, res, next) => {        
    let lehrerKrz = req.body.lehrerKrz
    let pin = req.body.pin

    dbVerbindung.query("SELECT * from lehrer WHERE lehrerkrz = '" + lehrerKrz + "' AND pin = " + pin + ";", (err, rows) => { 
        if (err) return next(err)       
        
        if(rows[0] === undefined){    
            console.log("Cookies werden gelöscht ....")                
            res.cookie('istAngemeldetAls', '')            
            res.render('anmelden.ejs', {               
                header : renderHeader(tagesablauf.themaDesTages,"Infos und Wahlen zum Projekttag","Bitte melden Sie sich mit den Zugangsdaten an, die Ihnen per E-Mail zugegangen sind."),
                footer : footer            
            })
        }else{     
            res.cookie('istAngemeldetAls', lehrerKrz)

            let badges = []            
            badges.push({type:"danger", links:'<i class="fa fa-heart" aria-hidden="true"></i>', rechts:"Willkommen, " + lehrerKrz + "!"})                
            for(i = 0; i < wahlen.length; i++){          
                let rechts = "noch nichts gewählt"
                if(eval('rows[0].' + wahlen[i].dbFeld)){
                    rechts = eval('rows[0].' + wahlen[i].dbFeld)                        
                }
                badges.push({type:"success", links:wahlen[i].name, rechts:rechts})
            }            
        
            res.render('index.ejs', {   
                header : renderHeader(tagesablauf.themaDesTages,"Infos und Wahlen zum Projekttag","Hallo"),
                badges : renderBadges(badges),                    
                wahlen : wahlen,
                footer : footer                
            })
        }        
    })     
         
})

app.post('/anmelden',(req, res, next) => {                
    res.cookie('istAngemeldetAls', '')    
    res.render('anmelden.ejs', {               
        header : renderHeader(tagesablauf.themaDesTages,"Infos und Wahlen zum Projekttag","Bitte melden Sie sich mit den Zugangsdaten an, die Ihnen per E-Mail zugegangen sind."),
        footer : footer
    })
})

app.get('/anmelden',(req, res, next) => {                
    res.cookie('istAngemeldetAls', '')    
    res.render('anmelden.ejs', {               
        header : renderHeader(tagesablauf.themaDesTages,"Infos und Wahlen zum Projekttag","Bitte melden Sie sich mit den Zugangsdaten an, die Ihnen per E-Mail zugegangen sind."),
        footer : footer
    })
})

app.get('/tagesablauf',(req, res, next) => {     
    if(istAngemeldetAls(req.cookies)){         
        let badges = []            
        
        for(i = 0; i < tagesablauf.length; i++){                  
            badges.push({type:"info", links:tagesablauf[i].von + " - " + tagesablauf[i].bis, rechts:tagesablauf[i].thema, beschreibung:tagesablauf[i].beschreibung})
        }      

        res.render('tagesablauf.ejs', {       
            header : renderHeader(tagesablauf.themaDesTages,tagesablauf.titel,tagesablauf.beschreibung),                
            badges : renderBadges(badges),
            footer: footer
        })   
    }else{
        res.render('anmelden.ejs', {       
            header : renderHeader(tagesablauf.themaDesTages,"Sie müssen sich anmelden", "Die Zugangsdaten sind Ihnen per E-Mail zugegangen."),                                  
            footer : footer   
        })
    }   
})

app.get('/workshops',(req, res, next) => {               
    if(istAngemeldetAls(req.cookies)){         
        let badges = []            
        
        for(i = 0; i < wahlen[0].optionen.length; i++){                  
            console.log(wahlen[0].optionen)
            badges.push({type:"primary", links:wahlen[0].optionen[i].label, rechts:wahlen[0].optionen[i].moderator, beschreibung:wahlen[0].optionen[i].beschreibung})
        }      
        
        res.render('workshops.ejs', {   
            header : renderHeader(tagesablauf.themaDesTages,wahlen[0].optionen.titel,wahlen[0].optionen.beschreibung),                
            badges : renderBadges(badges),        
            footer : footer
        })    
    }else{
        res.render('anmelden.ejs', {       
            header : renderHeader(tagesablauf.themaDesTages,"Sie müssen sich anmelden", "Die Zugangsdaten sind Ihnen per E-Mail zugegangen."),                                  
            footer : footer   
        })
    }  
})

app.get('/about',(req, res, next) => {  
    if(istAngemeldetAls(req.cookies)){         
        res.render('about.ejs', {                 
            header : renderHeader(tagesablauf.themaDesTages,"About", "über den Päd-Tag-Wizard"),
            jahr : (new Date()).getFullYear(),        
            footer : footer
        })  
    }else{
        res.render('anmelden.ejs', {       
            header : renderHeader(tagesablauf.themaDesTages,"Sie müssen sich anmelden", "Die Zugangsdaten sind Ihnen per E-Mail zugegangen."),                                  
            footer : footer   
        })
    }  
})

app.get('/wahl',(req, res, next) => {  
    if(req.query.w >= wahlen.length) return next(new Error("Unzulässiger Parameter!"))

    if(istAngemeldetAls(req.cookies)){
        dbVerbindung.query("SELECT " + wahlen[req.query.w].dbFeld + " FROM lehrer WHERE lehrerKrz = '" + istAngemeldetAls(req.cookies) + "';", (err, rows) => { 
            if (err) return next(err)       
        
            badges = []
            let rechts = "noch nichts gewählt"
            
            if(eval('rows[0].' + wahlen[req.query.w].dbFeld)){
                rechts = eval('rows[0].' + wahlen[req.query.w].dbFeld)
                badges.push({type:"warning", links:"Sie haben bereits gewählt.", rechts:"Nochmal ändern?"})
            }

            badges.push({type:"success", links:"Ihre bisherige Wahl:", rechts:rechts})

            if(istAngemeldetAls(req.cookies)){        
                res.render('wahl.ejs', { 
                    header : renderHeader(tagesablauf.themaDesTages, wahlen[req.query.w].name + ": " + wahlen.titel, wahlen.beschreibung),
                    badges : renderBadges(badges),                    
                    items : wahlen[req.query.w],
                    index: req.query.w,
                    footer : footer                
                })
            }else{
                res.render('anmelden.ejs', {               
                    header : renderHeader(tagesablauf.themaDesTages,"Infos und Wahlen zum Projekttag","Bitte melden Sie sich mit den Zugangsdaten an, die Ihnen per E-Mail zugegangen sind."),
                    footer : footer
                })
            }
        })
    }else{
        res.render('anmelden.ejs', {       
            header : renderHeader(tagesablauf.themaDesTages,"Sie müssen sich anmelden", "Die Zugangsdaten sind Ihnen per E-Mail zugegangen."),                                  
            footer : footer   
        })
    }
})

app.post('/wahl',(req, res, next) => { 
    if(istAngemeldetAls(req.cookies)){              
        badges = []    
        let wahl = ""    
        dbVerbindung.query("SELECT * FROM lehrer WHERE lehrerKrz = '" + istAngemeldetAls(req.cookies) + "';", (err, rows) => {         
            if (err) return next(err)       
            if(!rows[0]) return next(new Error("Fehlerhafte Abfrage."))            
         
            if(!req.body.element){            
                badges.push({type:"danger", links:"Nichts gewählt", rechts:"bzw. Wahl gelöscht"})
            }else{
                wahl = req.body.element
            }
            
            for(i = 0; i < wahlen.length; i++){  
                if(eval('rows[0].' + wahlen[i].dbFeld)){
                    if(eval('rows[0].' + wahlen[i].dbFeld) === req.body.element){
                        if(eval('rows[0].' + wahlen[req.body.index].dbFeld) == ""){
                            badges.push({type:"success", links:"Ihre bisherige Wahl:", rechts:"nichts gewählt"})
                        }else{
                            badges.push({type:"success", links:"Ihre bisherige Wahl:", rechts:eval('rows[0].' + wahlen[req.body.index].dbFeld)})
                        }

                        badges.push({type:"danger", links:req.body.element + " 2x wählen?", rechts:"Das geht nicht!"})

                        res.render('wahl.ejs', {
                            header : renderHeader(tagesablauf.themaDesTages,"Wählen Sie aus:", "Speichern nicht vergessen :-)"),                      
                            badges : renderBadges(badges),                    
                            index: req.body.index,                            
                            items : wahlen[req.body.index],
                            footer : footer    
                        })                    
                        return
                    }
                }
            }

            dbVerbindung.query("UPDATE lehrer SET " + wahlen[req.body.index].dbFeld + " = '" + wahl + "' WHERE lehrerKrz = '" + istAngemeldetAls(req.cookies) + "';", (err, rows) => { 
                if (err) return next(err)       
                if(req.body.element){
                    
                    badges.push({type:"success", links:"Sie haben gewählt:", rechts:req.body.element})
                }
                
                res.render('wahl.ejs', {                      
                    header : renderHeader(tagesablauf.themaDesTages,"Wählen Sie aus:", "Speichern nicht vergessen :-)"),                      
                    badges : renderBadges(badges),                    
                    index: req.body.index,                            
                    items : wahlen[req.body.index],
                    footer : footer    
                })                    
            })      
        })
    }else{
        res.render('anmelden.ejs', {       
            header : renderHeader(tagesablauf.themaDesTages,"Sie müssen sich anmelden", "Speichern nicht vergessen :-)"),                                  
            footer : footer   
        })
    }
})

app.use((err, req, res, next) => {    
    console.log(err.stack)
    res.render('error.ejs', {  
        header : renderHeader(tagesablauf.themaDesTages, "F E H L E R", "HOLY CRAP!!!"),        
        footer : footer,         
        error:["Das hätte absolut <b>nicht</b> passieren dürfen!", "Try again, Sam!", err.message, "Falls Du nicht automatisch weitergeleitet wirst, dann Startseite neu laden, um fortzufahren."]
    }) 
})


function renderFooter(wahlen){
    let footer = '<footer class="footer-distributed">\
                    <div class="footer-left"><p class="footer-links">\
                    <a href="/">HOME</a>\
                    ·\
                    <a href="/Tagesablauf">Tagesablauf</a>\
                    ·\
                    <a href="/workshops">Workshops</a>\
                    ·'

    for(var i=0; i < wahlen.length; i++){
        footer += footer + ' <a href="/wahl?w=' + i + '"> ' + wahlen[i].name + '</a> ·'  
    }

    footer += footer + ' <a href="/about">About</a> · <a href="/anmelden">Logout</a></p><p>Made with <i class="fa fa-heart"> by GW12A & Stefan Bäumer</p></div></footer>'
    
    return footer
}

function renderHeader(h1,h2,p){

return '<div class="top-container"><h1>' + h1 + '</h1><p>' + p + '</p></div><div class="header" id="myHeader"><h2>' + h2 + '</h2></div>'
}



function renderBadges(badges){
    
    let renderedBadges = ""

    for(var i=0; i < badges.length; i++){
        
        renderedBadges += '<div class="double-val-label"><span class="' + badges[i].type + '">'+ badges[i].links +'</span><span>' + badges[i].rechts + '</span></div><p></p>'

        if(badges[i].beschreibung){    
            renderedBadges += '<p style="text-align:justify">' + badges[i].beschreibung + '</p>' 
        }
    }
    return renderedBadges
}