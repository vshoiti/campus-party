var express = require('express');
var router = express.Router();
var db = require('../querries');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/add/act', function(req, res){
  res.render('addAct');
});
router.post('/add/act', db.createActivity);
router.get('/atividades', db.getAllAtividades);
router.get('/added', function(req, res){
  res.render('added');
})
router.get('/edit/act/:nome', function(req, res, next){
  res.render('addAct');
})
router.post('/edit/act/:nome', db.updateActivity);
router.get('/delete/act/:nome', db.removeActivity);




router.get('/suprimentos', db.getAllSuprimentos);
router.get('/add/sup', function(req, res){
  res.render('addSup');
});
router.post('/add/sup', db.createSup);
router.get('/edit/sup/:id', function(req, res, next){
  res.render('addSup');
})
router.post('/edit/sup/:id', db.updateSup);
router.get('/delete/sup/:id', db.removeSup);




router.get('/utiliza', db.getAllRel);
router.get('/add/rel', function(req, res){
  res.render('addRel');
});
router.post('/add/rel', db.createRel);
router.get('/edit/rel/:id', function(req, res, next){
  res.render('addRel');
})
router.post('/edit/rel/:id', db.updateRel);
router.get('/delete/rel/:id', db.removeRel);

router.get('/info', function(req, res){
  res.render('info');
})

module.exports = router;
