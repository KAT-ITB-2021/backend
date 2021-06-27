const formidable = require('formidable');

function parseForm(req){
  const form = new formidable({multiples: true});
  return new Promise((resolve, reject) => {
    form.parse(req, (err, fields, files) => {
      if(err) reject(err);
      else resolve({ fields, files });
    });
  });
}

module.exports = { parseForm };