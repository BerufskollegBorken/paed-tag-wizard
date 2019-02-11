var config = {
    development: {        
        url: 'localhost:3000',        
        database: {
            host:   '10.40.38.110',
            port:   '3306',
            user: 'placematman',
            db:     'dbpaedtag',
            password: 'BKB123456!'
        },        
        server: {
            host: 'localhost',
            port: '3000'
        }
    },
    production: {        
        url: 'http://paedtag.herokuapp.com/',        
        database: {
            host: '130.255.124.99',
            port: '3306',
            user: 'placematman',
            db:     'dbpaedtag',
            password: 'BKB123456!'
        },
        //server details
        server: {
            host:   'http://paedtag.herokuapp.com/',
            port:   '80'
        }
    }
    };
    module.exports = config;