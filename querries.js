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
                res.redirect('/added');
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

function updateActivity(req, res, next){
    db.none('update ATIVIDADE set nome=$1, ini=$2, fim=$3, cpf=$4 where nome=$5',
    [req.body.nome, req.body.ini, req.body.fim, parseInt(req.body.cpf), req.params.nome])
        .then(function(){
            res.redirect('/atividades');
        })
}

function removeActivity(req, res, next){
    db.result('delete from ATIVIDADE where nome=$1', req.params.nome)
    .then(function(result){
        res.redirect('/atividades');
    })
}



function getAllSuprimentos(req, res, next){
    db.any('select * from SUPRIMENTO')
    .then(function(data){
        res.render('suprimentos', {SUPRIMENTO: data});
    })
    .catch(function(err){
        return next(err);
    })
}

function createSup(req, res, next){
    req.body.quantidade = parseInt(req.body.quantidade);
    req.body.id = parseInt(req.body.id);
    console.log(req.body);
    db.none('insert into SUPRIMENTO(quantidade, descricao, id)' + 
            'values(${quantidade}, ${descricao}, ${id})',
            req.body)
            .then(function(){
                console.log(req.body)
                res.redirect('/added');
            })
            .catch(function(err){
                return next(err);
    });
}
function updateSup(req, res, next){
    db.none('update SUPRIMENTO set id=$1, quantidade=$2, descricao=$3 where id=$4',
    [req.body.id, parseInt(req.body.quantidade), req.body.descricao, req.params.id])
        .then(function(){
            res.redirect('/suprimentos');
        })
}
function removeSup(req, res, next){
    db.result('delete from SUPRIMENTO where id=$1', req.params.id)
    .then(function(result){
        res.redirect('/suprimentos');
    })
}



function getAllRel(req, res, next){
    db.any('select * from SUPRIMENTO')
    .then(function(data){
        res.render('relacoes', {SUPRIMENTO: data});
    })
    .catch(function(err){
        return next(err);
    })
}

function createRel(req, res, next){
    req.body.quantidade = parseInt(req.body.quantidade);
    req.body.id = parseInt(req.body.id);
    console.log(req.body);
    db.none('insert into UTILIZA(quantidade, nome, id)' + 
            'values(${quantidade}, ${nome}, ${id})',
            req.body)
            .then(function(){
                console.log(req.body)
                res.redirect('/added');
            })
            .catch(function(err){
                return next(err);
    });
}
function updateRel(req, res, next){
    db.none('update UTILIZA set id=$1, quantidade=$2, nome=$3 where id=$4',
    [req.body.id, parseInt(req.body.quantidade), req.body.nome, req.params.id])
        .then(function(){
            res.redirect('/relacoes');
        })
}
function removeRel(req, res, next){
    db.result('delete from UTILIZA where id=$1', req.params.id)
    .then(function(result){
        res.redirect('/relacoes');
    })
}



module.exports = {
    createActivity: createActivity,
    getAllAtividades: getAllAtividades,
    updateActivity: updateActivity,
    removeActivity: removeActivity,
    getAllSuprimentos: getAllSuprimentos,
    createSup: createSup,
    updateSup: updateSup,
    removeSup: removeSup,
    getAllRel: getAllRel,
    createRel: createRel,
    updateRel: updateRel,
    removeRel: removeRel
}