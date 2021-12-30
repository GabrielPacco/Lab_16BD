var express = require('express');
var router = express.Router();
const Noticia = require('../models/noticia');
const Tag = require('../models/tag');

/* GET home page. */
router.get('/', async function(req, res, next) {
  try{
    const arrayNoticias = await Noticia.find();
    const dataTags = await Tag.find();
    res.render('index', { title: 'Noticias con MongoDB',noticias:arrayNoticias,tags:dataTags[0].tags });
  } catch(e){
    console.error("error obteniendo documentos",e);
    res.render('index', { title: 'Noticias con MongoDB',noticias:null });
  }
});
router.get('/noticia/:slug', async function(req, res, next) {
  try{
    const arrayNoticias = await Noticia.find();
    const content = await Noticia.find({ slug: req.params.slug }).exec();
    const dataTags = await Tag.find();
    res.render('items', { title:content[0].titulo,noticias:arrayNoticias,contenido:content[0],tags:dataTags[0].tags });
  } catch(e){
    console.error("error obteniendo documentos",e);
    res.redirect("/");
  }
});
router.get('/tag/:slug', async function(req, res, next) {
  try{
    const arrayNoticias = await Noticia.find({tag: req.params.slug}).exec();
    const dataTags = await Tag.find();
    res.render('tags.jade', { title: 'TAG: '+req.params.slug,noticias:arrayNoticias,tags:dataTags[0].tags });
  } catch(e){
    console.error("error obteniendo documentos",e);
    res.redirect("/");
  }
});

module.exports = router;
