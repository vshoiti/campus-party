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

module.exports = router;
