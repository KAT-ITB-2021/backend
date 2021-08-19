const { parseForm } = require('../helper/parseform');
const prisma = require('../helper/prisma');

module.exports = {
  async addTamu(req, res) {
    const { fields } = await parseForm(req);
    const { nama, email, asal, fakultas, noKelString, angkatanString, fakjur } = fields;

    const noKel = noKelString ? parseInt(noKelString) : undefined;
    const angkatan = angkatanString ? parseInt(angkatanString) : undefined;

    try{
      await prisma.tamuGaleri.create({
        data: {
          nama, email, asal, fakultas, noKel, angkatan, fakjur
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
