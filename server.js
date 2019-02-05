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
tagesablauf.beschreibung = "Am 5.3.2019 steht unser gemeinsamer, erster Pädagogischer Tag 2019 an. Jede Kollegin und jeder Kollege ist herzlich engeladen, an zwei Workshops und der Anwendungsphase teilzunehmen. Bitte wählen Sie auf dieser Webseite aus dem interessanten Angebot."
tagesablauf.push({von:"08:30", bis:"08:40", thema:'<i class="fa fa-fire"></i> Begrüßung und Denkanstöße', beschreibung: "Annette Sühling"})
tagesablauf.push({von:"08:40", bis:"09:10", thema:'<i class="fa fa-fire"></i> Intro', beschreibung: "Gerti Kohlruss"})
tagesablauf.push({von:"09:15", bis:"10:45", thema:'<i class="fa fa-caret-square-o-right"></i> 1. Workshop', beschreibung: "Treffen Sie Ihre Wahl!"})
tagesablauf.push({von:"11:00", bis:"12:30", thema:'<i class="fa fa-caret-square-o-right"></i> 2. Workshop', beschreibung: "Treffen Sie Ihre Wahl!"})
tagesablauf.push({von:"12:30", bis:"13:15", thema:'<i class="fa fa-cutlery"></i> Mittagspause', beschreibung: 'Guten Appetit!'})
tagesablauf.push({von:"13:30", bis:"14:30", thema:'<i class="fa fa-caret-square-o-up"></i> Anwendungsphase', beschreibung: "Wie bringen wir die digitalen Impulse sinnvoll in unseren Unterricht? <br> Wählen Sie eine Fachgruppe!"})
tagesablauf.push({von:"14:45", bis:"15:00", thema:'<i class="fa fa-group"></i> Plenum', beschreibung: 'Wir wollen per <a href="https://www.menti.com/" style="color:red" target="_top">Mentimeter</a> evaluieren.'})

let wahlen = []
wahlen.titel = "Bitte wählen Sie!"
wahlen.beschreibung = "Speichern nicht vergessen!"
wahlen.hinweis=''

let beschreibungPadlet = '<h1><a href="https://padlet.com/stbaeumer/PaedTag" style="color:red" target="_top">Padlet</a> – Digitale Tafeln im Unterricht nutzen</h1>\
<p><b>Moderator:</b> Stefan Bäumer</p>\
<p><b>Beschreibung:</b></p>\
<p>Mit Hilfe einer  digitalen Tafel lässt sich die Beteiligung der Lernenden erhöhen, so kann man:</p>\
<ul>\
<li>Padlet für das kollaborative Sammeln von Ideen und Beiträgen nutzen,</li> \
<li>Informationen strukturiert sammeln </li>\
<li>Feedbackmöglichkeiten: Beiträge können auch kommentiert und bewertet werden.</li> \
<li>Ressourcen zur Verfügung stellen („das papierlose Stationenlernen“)</li>\
<p></ul>\
<p>Hierzu können folgende Funktionen des Tools Padlet kennengelernt und ausprobiert werden:</p>\
<ul>\
<li>Eine Tafel anlegen und mit den Lernenden teilen</li>\
<li>Informationen ergänzen: Bilder, Links, weitere Padlets, …</li>\
<li>Rechte und Einstellungen für die Tafel (Leserecht, Schreibrecht, Moderationsrecht)</li>\
</ul></p>\
<p><b>Anmerkung:</b></p>\
<p>Für das Tool muss sich der Erstellende registrieren. Bis zu 3 Padlets können alle kostenlos nutzen.</p>\
<p>Das Tool läuft im Browser (Chrome, Firefox).</p>\
<p>Hier der Link zum Padlet am Pädagogischen Tag: <a href="https://padlet.com/stbaeumer/PaedTag" style="color:red" target="_top">Padlet</a></p>'


let beschreibungApps = '<h1>LearningApps – Gimmick oder mehr?</h1>\
<p><b>Moderator:</b>Andreas Schraven</p>\
<p><b>Beschreibung:</b></p>\
<p>Die kostenlose Web 2.0-Plattform LearningApps.org ermöglicht es, mit wenig Aufwand multimediale Lernbausteine in ansprechender Form online zu erstellen und zu verwalten.</p>\
<p>LearningApps.org unterstützt mit seinen verschiedenen Aufgabentypen (Kreuzworträtsel, QuizAufgaben, Memory-Spiele, Hör-, Seh-, Schreib- und Zuordnungsübungen etc.) sowohl selbständiges als auch kooperatives Üben, Lernen und Erstellen.</p>\
<p>Im Workshop werden wir:</p>\
<ul>\
<li>unterschiedliche Aufgabentypen bereits vorhandener LearningApps ausprobieren,</li>\
<li>bestehende LearningApps an die eigenen Bedürfnisse anpassen,</li>\
<li>neue Apps erstellen,</li>\
<li>uns mit der Administration als Lehrer beschäftigen.</li>\
</ul></p>\
<p><b>Anmerkung:</b></p>\
<p>Für die Arbeit im Workshop müsst Ihr Euch vorher nicht registrieren. Das Tool läuft im Browser (Chrome, Firefox).</p>'


let optionen = []        
optionen.titel = "Das Workshop-Angebot für Sie:"
optionen.beschreibung = "Informieren Sie sich hier über die verschiedenen Angebote. Welche beiden Themen wecken Ihr Interesse?"
optionen.push({id:"Laptops", name:"Workshop", label:"Umgang mit (Schüler-) Laptops", beschreibung:"", moderator: "", raum:"N.N.", kapazitaet:25, anzahl:0, ausgebucht: "",checked: ""})
optionen.push({id:"Padlet", name:"Workshop", label:"Padlet", beschreibung:beschreibungPadlet, moderator: "", raum:"4007", kapazitaet:1, anzahl:0, ausgebucht: "",checked: ""})
optionen.push({id:"Egmond",name:"Workshop", label:"Egmond", beschreibung:"", moderator: "", raum:"N.N.", kapazitaet:25, anzahl:0, ausgebucht: "",checked: ""})
optionen.push({id:"LearningApps",name:"Workshop", label:"Learning Apps", beschreibung:beschreibungApps, moderator: "", raum:"N.N.", kapazitaet:25, anzahl:0, ausgebucht: "",checked: ""})
optionen.push({id:"Videos",name:"Workshop", label:"Erklärvideos", beschreibung:"", moderator: "", raum:"N.N.", kapazitaet:25, anzahl:0, ausgebucht: "",checked: ""})
optionen.push({id:"Brainstorming",name:"Workshop", label:"Andere Art 'brainstorming'", beschreibung:"", moderator: "", raum:"N.N.", kapazitaet:25, anzahl:0, ausgebucht: "",checked: ""})
optionen.push({id:"Schreibwerkstatt",name:"Workshop", label:"Schreibwerkstatt", beschreibung:"", moderator: "", raum:"N.N.", kapazitaet:25, anzahl:0, ausgebucht: "",checked: ""})

wahlen.push(new Wahl("Workshop 1", "09:15","10:45", "", optionen, "workshop1")) 
wahlen.push(new Wahl("Workshop 2", "11:00","12:30", "", optionen, "workshop2")) 

optionen = []
optionen.push({id:"Deutsch", name:"Workshop", label:"Deutsch", moderator:"Reinhild Conrad", raum:"N.N.", kapazitaet:99, anzahl:0, ausgebucht: "",checked: ""})
optionen.push({id:"Niederländisch", name:"Workshop", label:"Niederländisch, Spanisch", moderator:"Eva Finke", raum:"N.N.", kapazitaet:99, anzahl:0, ausgebucht: "",checked: ""})
optionen.push({id:"Englisch",name:"Workshop", label:"Englisch", moderator:"Kerstin Schneider", raum:"N.N.", kapazitaet:99, anzahl:0, ausgebucht: "",checked: ""})
optionen.push({id:"Mathematik",name:"Workshop", label:"Mathematik", moderator:"", raum:"N.N.", kapazitaet:99, anzahl:0, ausgebucht: "",checked: ""})
optionen.push({id:"Religion",name:"Workshop", label:"Religion", moderator:"Theresa Schroer", raum:"N.N.", kapazitaet:99, anzahl:0, ausgebucht: "",checked: ""})
optionen.push({id:"Sport",name:"Workshop", label:"Sport", moderator:"Jonas Harlacher", raum:"N.N.", kapazitaet:99, anzahl:0, ausgebucht: "",checked: ""})
optionen.push({id:"Politik / GG",name:"Workshop", label:"Politik / GG", moderator:"Raluca Frincu", raum:"N.N.", kapazitaet:99, anzahl:0, ausgebucht: "",checked: ""})
optionen.push({id:"Grüner Bereich",name:"Workshop", label:"Grüner Bereich", moderator:"Uwe Sobbe", raum:"N.N.", kapazitaet:99, anzahl:0, ausgebucht: "",checked: ""})
optionen.push({id:"Naturwissenschaften",name:"Workshop", label:"Naturwissenschaften", moderator:"Eva Hansen", raum:"N.N.", kapazitaet:99, anzahl:0, ausgebucht: "",checked: ""})
optionen.push({id:"WirtschaftA",name:"Workshop", label:"Wirtschaft (Anlage A)", moderator:"Andreas Schraven", raum:"N.N.", kapazitaet:99, anzahl:0, ausgebucht: "",checked: ""})
optionen.push({id:"Soziales",name:"Workshop", label:"Soziales", moderator:"NN", raum:"N.N.", kapazitaet:99, anzahl:0, ausgebucht: "",checked: ""})
optionen.push({id:"Wirtschaft",name:"Workshop", label:"Wirtschaft", moderator:"", raum:"N.N.", kapazitaet:99, anzahl:0, ausgebucht: "",checked: ""})
optionen.push({id:"Technik",name:"Workshop", label:"Technik", moderator:"KS", raum:"N.N.", kapazitaet:99, anzahl:0, ausgebucht: "",checked: ""})
optionen.push({id:"Weitere",name:"Workshop", label:"Weitere Fächer", moderator:"Steuergruppe", raum:"N.N.", kapazitaet:99, anzahl:0, ausgebucht: "",checked: ""})

wahlen.push(new Wahl("Anwendungsphase", "13:30","14:30", "Jede Kollegin und jeder Kollegen soll sich zu einem seiner Fächer bzw. zu seinem Bereich zuordnen, um dann gemeinsam Überlegungen zu entwickeln und Schritte zu planen, wie die gewonnenen Erkenntnisse im Unterricht, in bestimmten Klassen, zu bestimmten Themen etc. sinnvoll eingesetzt werden können.", optionen, "anwendungsphase")) 

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

function istAngemeldetAls(cookie){
    return cookie["istAngemeldetAls"]     
}

app.get('/',(req, res, next) => {
    if(istAngemeldetAls(req.cookies)){        
        let lehrerKrz = istAngemeldetAls(req.cookies)
        dbVerbindung.query("SELECT * from lehrer WHERE lehrerkrz = '" + lehrerKrz + "';", (err, rows) => {    
            if (err) return next(err)
            if(rows[0] === undefined){
                console.log("Cookies werden gelöscht .")
                res.cookie('istAngemeldetAls', '')
                res.render('anmelden.ejs', {      
                    header : renderHeader(tagesablauf.themaDesTages,"",false, false),
                    lehrerKrz : req.query.lehrerKrz,
                    pin : req.query.pin,
                    footer : footer
                })
            }else{       
                let badges = []            
                let lehrerWahlen = []

                //badges.push({type:"danger", links:'Das BKB', rechts:'heißt Sie <i class="fa fa-heart" aria-hidden="true"></i>-lich Willkommen, ' + lehrerKrz + "!"})
                
                for(i = 0; i < wahlen.length; i++){ 
                    let rechts = "nichts gewählt"
                    let color = "rgb(226, 100, 25)"
                    let icon = "close"
                    let label = "Bitte " + wahlen[i].name + " wählen!"

                    if(eval('rows[0].' + wahlen[i].dbFeld)){

                        let x = eval('rows[0].' + wahlen[i].dbFeld);

                        rechts = x                       
                        color="green"
                        icon="check"
                        
                        label = wahlen[i].name + " gewählt"

                        for(o = 0; o < wahlen[i].optionen.length; o++){      
                            //console.log(x +"= = ="+ wahlen[i].optionen[o].id + "-")
                            if(x == (wahlen[i].optionen[o].id)){               
                                label = wahlen[i].name + ": " +  wahlen[i].optionen[o].id + "<br>(um " + wahlen[i].von + " im Raum " + wahlen[i].optionen[o].raum +")"                   
                                //console.log("Treffer" +  label)
                            }
                        }
                    }                    
                    
                    lehrerWahlen.push({name: wahlen[i].name, color: color, icon: icon, label: label })
                }

                res.render('index.ejs', {            
                    badges : renderBadges(badges, false, false, lehrerKrz, "", wahlen.hinweis),                    
                    lehrerWahlen : lehrerWahlen,
                    footer : footer
                })
            }        
        })
    }else{
        console.log("Cookies werden gelöscht ......")
        res.cookie('istAngemeldetAls', '')
        res.render('anmelden.ejs', {      
            header : renderHeader(tagesablauf.themaDesTages,"",false, false),
            lehrerKrz : req.query.lehrerKrz,
            pin : req.query.pin,
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
                badges : renderBadges([], false, false, lehrerKrz, "",""),                    
                lehrerKrz : req.query.lehrerKrz,
                pin : req.query.pin,
                footer : footer            
            })
        }else{     
            res.cookie('istAngemeldetAls', lehrerKrz)
            
            let lehrerWahlen = []
            let badges = []            
            
            //badges.push({type:"danger", links:'<i class="fa fa-heart" aria-hidden="true"></i>', rechts:"Willkommen, " + lehrerKrz + "!"})
            
            for(i = 0; i < wahlen.length; i++){ 
                let rechts = "nichts gewählt"
                let color = "red"
                let icon = "" //"close"
                let label = "Bitte " + wahlen[i].name + " wählen!"

                label = wahlen[i].name + " gewählt"

                if(eval('rows[0].' + wahlen[i].dbFeld)){

                    let x = eval('rows[0].' + wahlen[i].dbFeld)

                    rechts = eval('rows[0].' + wahlen[i].dbFeld)
                    color="green"
                    icon="check"       
                    label = wahlen[i].name + " gewählt."               

                    for(o = 0; o < wahlen[i].optionen.length; o++){      
                        //console.log(x +"= = ="+ wahlen[i].optionen[o].id + "-")
                        if(x == (wahlen[i].optionen[o].id)){               
                            label = wahlen[i].name + ": " +  wahlen[i].optionen[o].id + "<br>(um " + wahlen[i].von + " im Raum " + wahlen[i].optionen[o].raum +")"                   
                            //console.log("Treffer" +  label)
                        }
                    }
                }
                
                lehrerWahlen.push({name: wahlen[i].name, color: color, icon: icon, label: label })
            }            
        
            res.render('index.ejs', {          
                badges : renderBadges(badges, false, false, lehrerKrz, "", wahlen.hinweis),                                     
                lehrerWahlen : lehrerWahlen,
                footer : footer                
            })
        }        
    })
})

app.post('/anmelden',(req, res, next) => {
    res.cookie('istAngemeldetAls', '')
    res.render('anmelden.ejs', {
        badges : renderBadges(badges, false, false, "", "Bitte anmelden!",""),
        lehrerKrz : req.query.lehrerKrz,
        pin : req.query.pin,
        footer : footer
    })
})

app.get('/anmelden',(req, res, next) => {       
    //console.log(req.query.user)
    res.cookie('istAngemeldetAls', '')
    res.render('anmelden.ejs', {      
        badges : renderBadges([], false, false, "", "Bitte anmelden",""),                
        lehrerKrz : req.query.lehrerKrz,
        pin : req.query.pin,
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
            badges : renderBadges(badges, true, false, istAngemeldetAls(req.cookies), "Tagesablauf",""),             
            footer: footer
        })
    }else{
        res.render('anmelden.ejs', {       
            badges : renderBadges(badges, false, false, "", "Bitte anmelden!",""),                    
            lehrerKrz : req.query.lehrerKrz,
            pin : req.query.pin,
            footer : footer   
        })
    }   
})

app.get('/workshops',(req, res, next) => {      
    if(istAngemeldetAls(req.cookies)){
        let badges = []            
        
        for(i = 0; i < wahlen[0].optionen.length; i++){         
            //console.log(wahlen[0].optionen)
            badges.push({type:"primary", links:wahlen[0].optionen[i].label, rechts:wahlen[0].optionen[i].moderator, beschreibung:wahlen[0].optionen[i].beschreibung})
        }      
        
        res.render('workshops.ejs', {                
            badges : renderBadges(badges, true, false, istAngemeldetAls(req.cookies), "Workshops",""),    
            footer : footer
        })
    }else{
        res.render('anmelden.ejs', {       
            header : renderHeader(tagesablauf.themaDesTages,"",false, false),
            lehrerKrz : req.query.lehrerKrz,
            pin : req.query.pin,
            footer : footer   
        })
    }  
})

app.get('/about',(req, res, next) => {  
    if(istAngemeldetAls(req.cookies)){
        res.render('about.ejs', {        
            badges : renderBadges(badges, true, false, istAngemeldetAls(req.cookies), "",""),    
            jahr : (new Date()).getFullYear(),        
            footer : footer
        })
    }else{
        res.render('anmelden.ejs', {       
            header : renderHeader(tagesablauf.themaDesTages,"",false, false),
            lehrerKrz : req.query.lehrerKrz,
            pin : req.query.pin,
            footer : footer   
        })
    }  
})

app.get('/wahl',(req, res, next) => {  
    if(req.query.w >= wahlen.length) return next(new Error("Unzulässiger Parameter!"))

    if(istAngemeldetAls(req.cookies)){
        dbVerbindung.query("SELECT * FROM lehrer;", (err, rows) => { 
            if (err) return next(err)
        
            renderWahlen(req.query.w, rows)

            let lehrerIndex=0

            for(i = 0; i < rows.length; i++){  
                if(rows[i].lehrerKrz === istAngemeldetAls(req.cookies)){
                    lehrerIndex = i
                }                
            }

            badges = []

            let rechts = '<i class="fa fa-meh-o"></i> nichts gewählt'
            
            if(eval('rows[' + lehrerIndex + '].' + wahlen[req.query.w].dbFeld)){
                rechts = eval('rows[' + lehrerIndex + '].' + wahlen[req.query.w].dbFeld)
                badges.push({type:"warning", links:'bereits gewählt <i class="fa fa-exclamation-triangle"></i>', rechts:'nochmal ändern <i class="fa fa-question-circle"></i>'})
            }

            badges.push({type:"success", links:'Ihre bisherige Wahl:', rechts:rechts})

            if(istAngemeldetAls(req.cookies)){        
                res.render('wahl.ejs', {            
                    badges : renderBadges(badges, true, true, istAngemeldetAls(req.cookies), wahlen[req.query.w].name ,wahlen[req.query.w].beschreibung),                                    
                    wahl : wahlen[req.query.w],
                    index: req.query.w,
                    footer : footer                
                })
            }else{
                res.render('anmelden.ejs', {      
                    header : renderHeader(tagesablauf.themaDesTages,"",false, false),
                    lehrerKrz : req.query.lehrerKrz,
                    pin : req.query.pin,
                    footer : footer
                })
            }
        })
    }else{
        res.render('anmelden.ejs', {       
            header : renderHeader(tagesablauf.themaDesTages,"",false, false),
            lehrerKrz : req.query.lehrerKrz,
            pin : req.query.pin,
            footer : footer   
        })
    }
})

app.post('/wahl',  (req, res, next) => { 
    if(istAngemeldetAls(req.cookies)){     
        badges = []    
        let wahl = ""    
          
        dbVerbindung.query("SELECT * FROM lehrer;", (err, rows) => {
            if (err) return next(err)
            if(!rows[0]) return next(new Error("Fehlerhafte Abfrage."))
         
            if(!req.body.element){   
                badges.push({type:"warning", links:"Nichts gewählt", rechts:'bzw. Wahl gelöscht <i class="fa fa-frown-o"></i>'})
            }else{
                wahl = req.body.element
            }
            
            renderWahlen(req.query.w, rows)

            let lehrerIndex=0

            for(i = 0; i < rows.length; i++){  
                if(rows[i].lehrerKrz === istAngemeldetAls(req.cookies)){
                    lehrerIndex = i
                }                
            }
            
            // Alle Spalten dieses Lehrers werden durchlaufen ... 

            for(i = 0; i < 3; i++){ 

                // Wenn irgendeine andere Wahl dieser Wahl entspricht, dann Abbruch

                if(i != req.body.index){

                    //console.log(req.body.element + "===" + eval('rows[' + lehrerIndex + '].' + wahlen[i].dbFeld))

                    if(req.body.element === eval('rows[' + lehrerIndex + '].' + wahlen[i].dbFeld)){
                    
                        //console.log("Lehrerindex: " + lehrerIndex + " 2 " + req.body.element + "===" + eval('rows[' + lehrerIndex + '].'+ "  " + wahlen[i].dbFeld))
                    
                        badges.push({type:"warning", links:'1 Thema 2x wählen <i class="fa fa-question-circle-o"></i>', rechts:'Das geht nicht <i class="fa fa-exclamation-triangle"></i>'})
                        badges.push({type:"warning", links:'Es bleibt bei:', rechts:eval('rows[' + lehrerIndex + '].' + wahlen[req.body.index].dbFeld)})
                        console.log(i + " " + req.body.index + " " + eval('rows[' + lehrerIndex + '].' + wahlen[req.body.index].dbFeld) + " " + eval('rows[' + lehrerIndex + '].' + wahlen[i].dbFeld))

                        res.render('wahl.ejs', {                   
                            badges : renderBadges(badges, true, true, istAngemeldetAls(req.cookies), wahlen[req.query.w].name ,""),                                    
                            index: req.body.index,                            
                            wahl : wahlen[req.body.index],
                            footer : footer    
                        })
                        return    
                    }
                }                
            }

            setTimeout(function(){ }, 1000);

            if(eval('rows[' + lehrerIndex + '].' + wahlen[req.body.index].dbFeld)){
                if(eval('rows[' + lehrerIndex + '].' + wahlen[req.body.index].dbFeld) === req.body.element){
                    
                    if(eval('rows[' + lehrerIndex + '].' + wahlen[req.body.index].dbFeld) == ""){                   
                        badges.push({type:"success", links:"Ihre bisherige Wahl:", rechts:"nichts gewählt"})
                    }else{
                        badges.push({type:"success", links:"Ihre bisherige Wahl:", rechts:eval('rows[' + lehrerIndex + '].' + wahlen[req.body.index].dbFeld)})
                    }
                    
                    res.render('wahl.ejs', {                   
                        badges : renderBadges(badges, true, true, istAngemeldetAls(req.cookies), wahlen[req.query.w].name ,""),                                    
                        index: req.body.index,                            
                        wahl : wahlen[req.body.index],
                        footer : footer    
                    })
                    return
                }
                for(i = 0; i < wahlen[req.body.index].optionen.length; i++){        
                    if(wahlen[req.body.index].optionen[i].id === req.body.element){
                        if(wahlen[req.body.index].optionen[i].kapazitaet <= wahlen[req.body.index].optionen[i].anzahl){
                            badges.push({type:"warning", links:'leider ausgebucht <i class="fa fa-exclamation-triangle"></i>', rechts:'anderes wählen <i class="fa fa-exclamation-triangle"></i>'})
        
                            res.render('wahl.ejs', {                   
                                badges : renderBadges(badges, true, true, istAngemeldetAls(req.cookies), wahlen[req.query.w].name ,""),                                    
                                index: req.body.index,                            
                                wahl : wahlen[req.body.index],
                                footer : footer    
                            })
                            return
                        }
                    }                
                }   
            }   
            
            dbVerbindung.query("UPDATE lehrer SET " + wahlen[req.body.index].dbFeld + " = '" + wahl + "' WHERE lehrerKrz = '" + istAngemeldetAls(req.cookies) + "';", (err, rows) => { 
                if (err) return next(err)
                
                if(req.body.element){
                    
                    badges.push({type:"success", links:'<i class="fa fa-thumbs-o-up"></i> Sie haben gewählt:', rechts:req.body.element})
                }
                
                dbVerbindung.query("SELECT * FROM lehrer;", (err, rows) => {
                    if (err) return next(err)
                
                    renderWahlen(req.query.w, rows)

                    res.render('wahl.ejs', {                                 
                        badges : renderBadges(badges, true, true, istAngemeldetAls(req.cookies), wahlen[req.query.w].name ,""),                                    
                        index: req.body.index,                            
                        wahl : wahlen[req.body.index],
                        footer : footer    
                    })
                })
            })
        })
    }else{
        res.render('anmelden.ejs', {       
            header : renderHeader(tagesablauf.themaDesTages, "",false, false),  
            lehrerKrz : req.query.lehrerKrz,
            pin : req.query.pin,                                
            footer : footer   
        })
    }
})

app.use((err, req, res, next) => {    
    console.log(err.stack)
    res.render('error.ejs', {  
        header : renderHeader(tagesablauf.themaDesTages, "Fehler", true, false),        
        footer : footer,         
        error:["Das hätte absolut <b>nicht</b> passieren dürfen!", "Try again, Sam!", err.message, "Falls Du nicht automatisch weitergeleitet wirst, dann Startseite neu laden, um fortzufahren."]
    }) 
})

function renderFooter(wahlen){
    let footer = '<footer ><div class="divFooter">\
                    \
                    <a href="/"><i class="fa fa-home" aria-hidden="true"></i></a>\
                    ·\
                    <a href="/Tagesablauf">Tagesablauf</a>\
                    ·\
                    <a href="/workshops">Workshops</a>\
                    ·\
                    <a href="/about">About</a>\
                    ·\
                    <a href="/anmelden">Logout</a>\
                    ·\
                    <a href="mailto:stefan.baeumer@berufskolleg-borken.de"> <i class="fa fa-envelope-o"></i></a></div>\
                    </footer>'
    
    return footer
}

function renderHeader(h1, p, backHome, save){

    renderBackHome = ''
    renderSave = ''

    if(backHome){
        renderBackHome = '<a href="/" class="menuButton" ><i class="fa fa-home"></i> Zurück zur Startseite</a>'
    }

    if(save){
        renderSave = '<label tabindex="0" for="absenden"><i class="fa fa-save"></i><b> Speichern</b></label>'
    }

    return '<div class="header" id="myHeader">' + renderBackHome + renderSave + '</div>'
}

function renderBadges(badges, backHome, save, lehrerKrz, h1, paragraph){
    
    renderBackHome = ''
    renderSave = ''

    if(backHome){
        renderBackHome = '<a href="/" ><i class="fa fa-home"></i> zur Startseite</a>'
    }else{
        renderBackHome = 'Das BKB heißt Sie'
    }

    if(save){
        renderSave = '<label style="border-style: solid;border-radius: 5px;" tabindex="0" for="absenden" > <font color="#969694">---</font>  <i class="fa fa-save"> </i> <font color="#969694">---</font> Speichern <font color="#969694">---</font></label>'
    }else{
        renderSave = '<i class="fa fa-heart" aria-hidden="true"></i>-lich Willkommen, ' + lehrerKrz + "!"
    }

    let renderedBadges = '<div class="double-val-label"><span class="danger">'+ renderBackHome +'</span><span>' + renderSave + '</span></div><p></p>'

    //console.log("1. " + "danger" +  "  " + renderBackHome + " " + renderSave)

    if(h1){        
        renderedBadges += '<h1  align="center">' + h1 + '</h1>'
    }
 
    if(paragraph){        
        renderedBadges += '<p style="font-size:2vh;text-align:justify;">' + paragraph + '</p>'
    }
 

    for(var i=0; i < badges.length; i++){
        //console.log((i+2) + badges[i].type +  " " + badges[i].links + " " + badges[i].rechts)
        renderedBadges += '<div class="double-val-label"><span class="' + badges[i].type + '">'+ badges[i].links +'</span><span>' + badges[i].rechts + '</span></div><p></p>'

        if(badges[i].beschreibung){    
            renderedBadges += '<p style="text-align:center; font-size:2vh">' + badges[i].beschreibung + '</p>' 
        }
    }

    renderedBadges += ''

    return renderedBadges
}


function renderWahlen(w, rows){
 
    for(i = 0; i < wahlen[w].optionen.length; i++){  
        wahlen[w].optionen[i].anzahl = 0
        if(wahlen[w].optionen[i].kapazitaet){
            wahlen[w].optionen[i].ausgebucht = "(belegt: " + wahlen[w].optionen[i].anzahl + "/" + wahlen[w].optionen[i].kapazitaet + ")"
        }
    }

    for(x = 0; x < rows.length; x++){  
        for(i = 0; i < wahlen[w].optionen.length; i++){     
            if(eval('rows[x].' + wahlen[w].dbFeld) == wahlen[w].optionen[i].id){
                if(wahlen[w].optionen[i].kapazitaet >= wahlen[w].optionen[i].anzahl){
                    wahlen[w].optionen[i].anzahl++
                    if(wahlen[w].optionen[i].kapazitaet){
                        wahlen[w].optionen[i].ausgebucht = "(belegt: " + (wahlen[w].optionen[i].anzahl) + "/" + wahlen[w].optionen[i].kapazitaet + ")"
                    }                            
                }else{
                    wahlen[w].optionen[i].ausgebucht = "(ausgebucht)" 
                }
            }
        }
    }
}