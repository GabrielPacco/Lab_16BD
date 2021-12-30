const mongoose = require('mongoose');
const { Schema } = mongoose;

const noticiaSchema = new Schema({
  titulo:  String,
  descripcion: String,
  contenido: String,
  slug: String,
  autor: String,
  img: String,
  tag: String,
});

const Noticia = mongoose.model('Noticia',noticiaSchema);
module.exports = Noticia;