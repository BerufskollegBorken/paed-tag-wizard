
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
tagesablauf.push({von:"14:45", bis:"15:00", thema:'<i class="fa fa-group"></i> Plenum', beschreibung: 'Wir wollen per <a href="https://www.menti.com/" style="color:red" target="_blank">Mentimeter</a> evaluieren.'})

let wahlen = []
wahlen.titel = "Bitte wählen Sie!"
wahlen.beschreibung = "Speichern nicht vergessen!"
wahlen.hinweis=''

const beschreibungByod = '<h1>BYOD, Schul.Cloud und Co. – Wie können digitale Medien der SuS in den eigenen Unterricht integriert werden?</h1>\
<p><b>Moderator: </b>Thomas Kottenstede</p>\
<p><b>Beschreibung:</b></p>\
<p>SuS bereiten ein Referat zuhause vor und wollen dazu den eigenen Laptop in der Schule verwenden. Außerhalb des EDV-Raums soll kurz eine Internet-Recherche durchgeführt werden. Eine Lehrerin oder ein Lehrer möchte gerne mit seinem Handy eine Audio-Datei im Fremdsprachenunterricht abspielen.</p>\
<p>Das sind nur einige Beispiele für Anforderungen, die in einem zunehmend digitalisierten Unterricht auf zu zukommen. In diesem Workshop soll solche Fragen aufgegriffen, Lösungen aufgezeigt und praktisch ausprobiert werden.</p>\
<p>Im Workshop werden wir:</p>\
<ul>\
<li>alle Schritte kennenlernen, die notwendig sind, um ein Lehrer- oder Schülerlaptop/Handy/Tablet… in das WLAN der Schule zu integrieren,</li>\
<li>die neuen Lautsprecherboxen für die Klassenräume mit ihren Bluetooth-Möglichkeiten ausprobieren,</li>\
<li>einen ersten Blick auf digitalen Tafeln (Smart-Boards) werfen. (zwei solche Geräte sollen Ende Februar angeliefert und danach am BKB installiert werden, um zu testen, ob diese einen Vorteil im Unterricht bieten)</li>\
<li>einen einfachen Weg kennenlernen, um als LuL von zuhause auf die eigenen Daten in der Schule zugreifen zu können. (Was ich am Abend vorher in die Schule hochgeladen habe, kann ich am nächsten Morgen nicht auf dem Schreibtisch vergessen.)</li>\
<li>bei Bedarf werden wir natürlich auch den konkreten Umgang mit den Dokumentenkameras, der päd. Oberfläche in den EDV-Räumen, dem Webweaver, etc. vertiefend üben.</li>\
</ul></p>\
<p><b>Anmerkung:</b></p>\
<p>Wer den eigenen Laptop, das Tablet, das Handy etc. bisher noch nicht im Schulnetzwerk betrieben hat und dieses evtl. zukünftig möchte, sollte das Gerät mitbringen. Dann können wir am konkreten Fall auf mögliche Fallstricke hinweisen und Lösungen erarbeiten.</p>'

const beschreibungPadlet = '<h1><a href="https://padlet.com/stbaeumer/PaedTag" style="color:red" target="_blank">Padlet</a> – Digitale Tafeln im Unterricht nutzen</h1>\
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
<p>Hier der Link zum Padlet am Pädagogischen Tag: <a href="https://padlet.com/stbaeumer/PaedTag" style="color:red" target="_blank">Padlet</a></p>'

const beschreibungZumpad = '<h1>ZUMpad und Classroomscreen - digitale Tools als praktische Alternativen zu Collegeblock und Tafel</h1>\
<p><b>Moderator:</b> Regina Schreiber</p>\
<p><b>Beschreibung:</b></p>\
<p>Das <b>ZUMpad</b> ist eine kollaborative Arbeitsfläche, die kostenfrei von der ZUM (Zentrale für Unterrichtsmedien im Internet e.V.) zur Verfügung gestellt wird. Es handelt sich dabei um eine leere Website, auf der sofort - sogar von mehreren Personen/PCs gleichzeitig - über das Internet geschrieben werden kann. Ein ZUMpad hat eine selbstgewählte, einfache Adresse, die sich auch mündlich mitteilen lässt. So kann es von jedem genutzt werden, der diesen Link besitzt. Die Oberfläche speichert den Text automatisch. Der Pad-Inhalt kann jedoch auch in verschiedenen Formaten exportiert werden. Da es sich um ein kooperatives digitales Medium handelt, werden verschiedene Kompetenzen, z.B. die Strukturierung und Visualisierung von Gedanken, der Schüler gefördert.  Die Einsatzmöglichkeiten sind vielfältig: Verfassen von Protokollen, Festhalten von Gruppenarbeitsergebnissen, Kommunikation von Arbeitsergebnissen u.a.</p>\
<p><b>Classroomscreen</b> ist ein Online-Tool, das wie eine digitale Tafel funktioniert. Die Website ist sehr einfach zu bedienen und kann mit einem interaktiven Whiteboard oder einem Projektor angezeigt werden. Das Tool verfügt über viele Funktionen, die den Unterricht visuell unterstützen und für die Schüler ansprechend machen. Hierzu zählen z.B.</p>\
<ul>\
<li>Stoppuhr, Anzeige der aktuellen Uhrzeit</li> \
<li>Textfelder, in denen z.B. Aufgaben für die Schüler notiert werden können</li>\
<li>Erstellung von QR-Codes für Websites, die während des Unterrichts aufgerufen werden sollen</li> \
<li>Hochladen von Bildern, Anfertigen von Skizzen</li>\
<li>Ampeln, die z.B. den Bearbeitungsstand visualisieren</li>\
<li>Automatische Würfel, die Namen oder Zahlen nach dem Zufallsprinzip auswählen</li>\
<li>Feedback-Funktion etc.</li>\
</ul>\
<p>Im Workshop werden wir </p>\
<ul>\
<li>die Funktionsweisen der beiden Tools kennenlernen</li>\
<li>diese ausprobieren</li>\
<li>Ideen für den Einsatz im Unterricht sammeln und vorstellen</li>\
</ul>\
<p><b>Anmerkung:</b></p>\
<p>ZUMpad und Classroomscreen sind kostenfreie webbasierte Anwendungen, d.h. sie funktionieren ohne Registrierung oder vorherige Anmeldung. Die Tools laufen im Browser (Fierfox, Chrome) und sind sofort startklar.</p>\
<p>Das Tool läuft im Browser (Chrome, Firefox).</p>'

const beschreibungApps = '<h1>LearningApps – Gimmick oder mehr?</h1>\
<p><b>Moderator: </b>Andreas Schraven</p>\
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

const beschreibungEgmond = '<h1>EDMOND NRW – Medien für Schule und Bildung</h1>\
<p><b>Moderator: </b>Michael Hermes (Medienpädagoge - Medienzentrum Kreis Borken)</p>\
<p><b>Beschreibung:</b></p>\
<p>Mit EDMOND NRW steht Lehrkräften eine Plattform für online Medien zur Verfügung, die stetig sowohl technisch optimiert als auch inhaltlich ausgebaut wird. Aktuell werden für den Kreis Borken mehrere Tausend Online-Medien bereitgestellt, die für den Unterricht genutzt und auch an SuS weitergegeben werden können. Über die seit 2018 ergänzten Funktionen des HTML 5 -Paketes (H5P) sind neue Bearbeitungsmöglichkeiten sowie die Option eigenes Filmmaterial hochzuladen hinzugekommen.</p>\
<p>Konkrete Inhalte des Workshops:</p>\
<ul>\
<li>Grundlagen und Bedienung von EDMOND NRW</li>\
<li>Medien suchen und Ergebnisse eingrenzen</li>\
<li>Suchergebnisse in Listen verwalten und verarbeiten</li>\
<li>Medien an SuS weitergeben (EDU-IDs)</li>\
<li>Medienablagen für die Schule  - Lösungsmodelle</li>\
<li>Erstes Kennenlernen von H5P</li>\
</ul></p>\
<p><b>Anmerkung:</b></p>\
<p>EDMOND NRW ist für alle Lehrkräfte / Bildungseinrichtungen kostenlos, da die Kosten vom Land NRW sowie dem jeweiligen  kommunalen Medienzentrum getragen werden. Für die Nutzung ist eine Registrierung  über <a href="https://nrw.edupool.de/home?standort=BOR"" style="color:red" target="_blank"> nrw.edupool.de </a> erforderlich. </p>\
<p>Empfehlung: Da Sie sich mit Ihrer E-Mailadresse registrieren und Ihnen im Verlauf des Verfahrens eine Mail mit einem Link zur Bestätigung geschickt wird, sollten Sie bei der Registrierung auch Zugriff auf Ihre E-Mails haben.</p>'

const beschreibungVisualisierung = '<h1>Visualisierung mit digitalen Medien</h1>\
<p><b>Moderatorinnen: </b>Theresa Schroer, Annegret Häming</p>\
<p><b>Beschreibung:</b></p>\
<p>Visualisierungen von Sachverhalten nehmen im Unterricht eine große Rolle ein. In diesem Workshop bieten wir die Möglichkeit, digitale Medien zur Visualisierung kennen zu lernen und zu erproben. </p>\
<p>Ein Fokus wird hierbei auf die digitale Erstellung von Mindmaps, Diagrammen und Wortsammlungen gelegt. Diese können für kollaboratives Arbeiten genutzt werden. Ferner kann die Visualisierung im Unterricht attraktiver und effizienter gestaltet werden.</p>\
<p>Mithilfe verschiedener Tools können</p>\
<ul>\
<li>Sachverhalten strukturiert und veranschaulicht,</li>\
<li>Mitschriften erstellt,</li>\
<li>Projekte geplant,</li>\
<li>Lernstoffe aufbereitet und</li>\
<li>Ideen gesammelt werden.</li>\
</ul></p>\
<p><b>Anmerkung:</b></p>\
<p>Für die Tools ist es teilweise notwendig, sich während des Workshops zu regierstieren. Für die Teilnahme am Workshop wäre ein internetfähiges Smartphone von Vorteil.</p>'

const beschreibungLernvideos = '<h1>Lernvideos – digital, individuell und vielfältig</h1>\
<p><b>Moderatoren: </b>Michael Bauhaus, Dirk Nixdorf</p>\
<p><b>Beschreibung:</b></p>\
<p>„Wie oft muss ich das denn noch erklären?“, „Das ging mir jetzt zu schnell!“ oder „Ich war letzte Woche krank, könnten Sie das nochmal wiederholen“. Das sind alles Sätze, die jeder von uns schonmal gehört oder gedacht hat. </p>\
<p>Eine Möglichkeit seinen Unterricht schrittweise zur individualisieren ist der Einsatz von selbst erstellten Lernvideos, die passgenau auf den eigenen Unterricht zugeschnitten sind. Mit diesen Lernvideos ermöglicht ihr euren Schülern zentrale Unterrichtsinhalte in komprimierter Form zu wiederholen, nachzulernen oder völlig neue Unterrichtsinhalte zeitlich flexibel einzuführen.</p>\
<p>Lernvideos können ein echtes Werkzeug sein, um im Unterrichtsalltag:</p>\
<ul>\
<li>den Umgang mit heterogenen Lerngruppen einfacher zu organisieren,</li>\
<li>die Umsetzung von kompetenzorientierten Lernsituationen zu erleichtern,</li>\
<li>die Lehrverantwortung des Lehrers in die Lernverantwortung des Schülers zu überführen.</li>\
</ul>\
<p>Dazu werden wir in unserem Workshop:</p>\
<ul>\
<li>die Möglichkeiten zur Erstellung von Lernvideos am BK-Borken aufzeigen,</li>\
<li>wichtige Tipps und Erfahrungsberichte bei der Erstellung von Lernvideos vorstellen,</li>\
<li>Ideen und Vorschläge für den Einsatz von Lernvideos zur Unterrichtsgestaltung bzw. Unterrichtsbegleitung sammeln und diskutieren,</li>\
<li>ein Lernvideo erstellen und die Möglichkeiten der Veröffentlichung vorstellen. </li>\
</ul>\
<p><b>Anmerkung:</b></p>\
<p>Für die Arbeit im Workshop solltet ihr eine eigene Idee für den Einsatz eines Lernvideos in bzw. für euren Unterricht mitbringen. Außerdem solltet ihr dazu bereit sein im Rahmen des Workshops zu Übungszwecken ein eigenes Lernvideo zu erstellen. </p>\
<p>Sinnvoll wäre es zudem, wenn ihr auch grundsätzlich mit dem Gedanken zurechtkommt, dass Videos, die ihr erstellt habt, später im Internet veröffentlicht werden.</p>'

let optionen = []        
optionen.titel = "Das Workshop-Angebot für Sie:"
optionen.beschreibung = "Informieren Sie sich hier über die verschiedenen Angebote. Welche beiden Themen wecken Ihr Interesse?"
optionen.push({id:"Laptops", name:"Workshop", label:"BYOD, Schul.Cloud und Co.", beschreibung:beschreibungByod, moderator: "", raum:"N.N.", kapazitaet:25, anzahl:0, ausgebucht: "",checked: ""})
optionen.push({id:"Padlet", name:"Workshop", label:"Padlet", beschreibung:beschreibungPadlet, moderator: "", raum:"4007", kapazitaet:25, anzahl:0, ausgebucht: "",checked: ""})
optionen.push({id:"Egmond",name:"Workshop", label:"Egmond", beschreibung:beschreibungEgmond, moderator: "", raum:"N.N.", kapazitaet:25, anzahl:0, ausgebucht: "",checked: ""})
optionen.push({id:"LearningApps",name:"Workshop", label:"Learning Apps", beschreibung:beschreibungApps, moderator: "", raum:"N.N.", kapazitaet:25, anzahl:0, ausgebucht: "",checked: ""})
optionen.push({id:"Visualisierung",name:"Workshop", label:"Visualisierung mit digitalen Medien", beschreibung:beschreibungVisualisierung, moderator: "", raum:"N.N.", kapazitaet:25, anzahl:0, ausgebucht: "",checked: ""})
optionen.push({id:"Zumpad",name:"Workshop", label:"ZUMpad und Classroomscreen", beschreibung:beschreibungZumpad, moderator: "", raum:"N.N.", kapazitaet:25, anzahl:0, ausgebucht: "",checked: ""})
optionen.push({id:"Lernvideos",name:"Workshop", label:"Lernvideos", beschreibung:beschreibungLernvideos, moderator: "", raum:"N.N.", kapazitaet:25, anzahl:0, ausgebucht: "",checked: ""})

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

var env = process.env.NODE_ENV || 'development';
var config = require('./config')[env];

const server = app.listen(process.env.PORT || 3000, () => {
    console.log('Server lauscht auf Port %s', server.address().port)
})

const mysql = require('mysql')
const dbVerbindung = mysql.createConnection({
    host: config.database.host,
    user: config.database.user,
    password: config.database.password,
    database: config.database.db
})

dbVerbindung.connect()

function istAngemeldetAls(cookies){
    return cookies["istAngemeldetAls"]     
}

app.get('/',(req, res, next) => {
    if(istAngemeldetAls(req.cookies)){        
        let lehrerKrz = istAngemeldetAls(req.cookies)
        dbVerbindung.query("SELECT * from lehrer WHERE lehrerkrz = '" + lehrerKrz + "';", (err, rows) => {    
            if (err) return next(err)
            if(rows[0] === undefined){
                console.log("Cookies wird gelöscht .")
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
                
                for(i = 0; i < wahlen.length; i++){ 
                    let rechts = "nichts gewählt"
                    let color = "red"
                    let icon = "close"
                    let label = "Bitte " + wahlen[i].name + " wählen!"

                    if(eval('rows[0].' + wahlen[i].dbFeld)){

                        let x = eval('rows[0].' + wahlen[i].dbFeld);

                        rechts = x                       
                        color="green"
                        icon="check"
                        
                        label = wahlen[i].name + " gewählt"

                        for(o = 0; o < wahlen[i].optionen.length; o++){                                
                            if(x == (wahlen[i].optionen[o].id)){               
                                label = wahlen[i].name + ": " +  wahlen[i].optionen[o].id + "<br>(um " + wahlen[i].von + " im Raum " + wahlen[i].optionen[o].raum +")"                                             
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
        console.log("Cookies wird gelöscht ......")
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
            console.log("Cookies wird gelöscht ....")
            res.cookie('istAngemeldetAls', '')
            res.render('anmelden.ejs', {      
                badges : renderBadges([], false, false, lehrerKrz, "",""),                    
                lehrerKrz : req.query.lehrerKrz,
                pin : req.query.pin,
                footer : footer            
            })
        }else{     
            res.cookie('istAngemeldetAls', lehrerKrz.toUpperCase())
            
            let lehrerWahlen = []
            let badges = []            
            
            for(i = 0; i < wahlen.length; i++){ 
                let rechts = "nichts gewählt"
                let color = "red"
                let icon = "" //"close"
                let label = "Bitte " + wahlen[i].name + " wählen!"

                if(eval('rows[0].' + wahlen[i].dbFeld)){

                    let x = eval('rows[0].' + wahlen[i].dbFeld)

                    rechts = eval('rows[0].' + wahlen[i].dbFeld)
                    color="green"
                    icon="check"       
                    label = wahlen[i].name + " gewählt."               

                    for(o = 0; o < wahlen[i].optionen.length; o++){                           
                        if(x == (wahlen[i].optionen[o].id)){               
                            label = wahlen[i].name + ": " +  wahlen[i].optionen[o].id + "<br>(um " + wahlen[i].von + " im Raum " + wahlen[i].optionen[o].raum +")"                                               
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
            badges : [],
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

            let lehrerIndex = 0

            for(i = 0; i < rows.length; i++){                                              
                if(rows[i].lehrerKrz === istAngemeldetAls(req.cookies)){                    
                    lehrerIndex = i
                    break
                }                
            }

            badges = []

            let rechts = '<i class="fa fa-meh-o"></i> nichts gewählt'
            
            console.log('rows[' + lehrerIndex + '].' + wahlen[req.query.w].dbFeld)

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
        renderSave = '<i class="fa fa-heart" aria-hidden="true"></i>-lich Willkommen, ' + lehrerKrz.toUpperCase() + "!"
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