var promise = require('bluebird');

var options = {
    // initialization options
    promiseLib: promise
};

var pgp = require('pg-promise')(options);
var connectionsString = 'postgres://postgres:postgres@localhost:5432/party';
var db = pgp(connectionsString);

function createActivity(req, res, next){
    req.body.cpf = parseInt(req.body.cpf);
    console.log('----------------------------------------------');    
    db.none('insert into ATIVIDADE(nome, ini, fim, cpf)' + 
    'values(${nome}, ${ini}, ${fim}, ${cpf})',
    req.body)
    .then(function(){
        console.log(req.body)
        res.redirect('/');
    })
    .catch(function(err){
        return next(err);
    });
}

function getAllAtividades(req, res, next){
    db.any('select * from ATIVIDADE')
        .then(function(data){
            res.render('atividades', {ATIVIDADE: data});
        })
        .catch(function(err){
            return next(err);
        })
}

module.exports = {
    createActivity: createActivity,
    getAllAtividades: getAllAtividades
}