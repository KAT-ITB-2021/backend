const { parseForm } = require('../helper/parseform');
const prisma = require('../helper/prisma');

module.exports = {
  async addTamu(req, res) {
    const { fields } = await parseForm(req);
    const { nama, email, asal, fakultas, noKel, angkatan, fakjur } = fields;
    try{
      await prisma.tamuGaleri.create({
        data: {
          nama, email, asal, fakultas,
          noKel: noKel ? parseInt(noKel) : undefined,
          angkatan: angkatan ? parseInt(angkatan) : undefined,
          fakjur
        }
      });
      res.json({message: 'success adding data'});
    }
    catch(err){
      console.log(err);
      res.status(500).json({message: 'fail inserting data'});
    }
  }
};
