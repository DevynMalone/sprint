const express = require('express');
const {Nfc,Afc} = require('./models')
const app = express();
const PORT = process.env.PORT || 8000;
const layouts = require('express-ejs-layouts');

app.set('view engine', 'ejs'); // for our view (html like pages), we want to use 
app.use(layouts);

app.use(express.urlencoded({ extended: false }));
app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) { 
    res.json({message:'Welcome to NFL SPRINT!'});
});

app.get('/nfc',function(req,res){
    Nfc.findAll()  //===> name of model you want to select 
    .then(function(nfcList){
        console.log('FOUND ALL NFC TEAMS', nfcList);
        res.render('nfcs', { nfcs: nfcList })
    })
    .catch(function(err){
        console.log('ERROR', err);
        res.json({message: 'Error occured, please try again...'})
    })
})

app.get('/afc',function(req,res){
    Afc.findAll()  //===> name of model you want to select 
    .then(function(afcList){
        console.log('FOUND ALL NFC TEAMS', afcList);
        res.render('afcs', { afcs: afcList })
    })
    .catch(function(err){
        console.log('ERROR', err);
        res.json({message: 'Error occured, please try again...'})
    })
})








app.listen(PORT, function() {
    console.log(`Server running on PORT ${PORT}`);
});


module.exports = app;