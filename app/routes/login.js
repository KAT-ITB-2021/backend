const express = require('express');
const router = new express.Router();
// const jwt = require('jsonwebtoken');
const formidable = require('formidable');

const ParseURLEncoded = express.urlencoded({extended: false});

router.post('/login', ParseURLEncoded, (req, res, next) => {
  /* Handle Login */
  const form = formidable({multiples: true});
  form.parse(req, (err, fields) => {
    if(err){
      next(err);
    }
    else{
      /* Berhasil parse form */
      res.send(fields);
    }
  });
});

module.exports = router;