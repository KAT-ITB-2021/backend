const { parseForm } = require('../helper/parseform');
const prisma = require('../helper/prisma');
const { evaluateQuiz } = require('../helper/evaluatequiz');

module.exports = {
  /**
   * route postSubmisiQuiz, create NilaiQuiz data of a person in a zone
   * fields required: userId, zonaId, quizAnswer
   */
  async postSubmisiQuiz(req, res) {
    try {
      const { fields } = await parseForm(req);
      const { userId, zonaId, quizAnswer } = fields;
      /**
       * Asumsi bentuk quizAnswer
       * {
       *  KMK: ['a','c','a'],
       *  UATM: ['b','a','a']
       * }
       */

      // TODO: Fetch JSON

      const dataZonaTest = {
        KMK: {
          pertanyaan: [
            'Kapan corona muncul?',
            'Kapan angkatan 2019 masuk ITB?',
          ],
          jawaban: [
            { a: '2019', b: '2020', c: '2021' },
            { a: '2018', b: '2019', c: '2020' },
          ],
          jawabanBenar: ['b', 'b'],
        },
        UATM: {
          pertanyaan: [
            'Kapan corona muncul?',
            'Kapan angkatan 2019 masuk ITB?',
          ],
          jawaban: [
            { a: '2019', b: '2020', c: '2021' },
            { a: '2018', b: '2019', c: '2020' },
          ],
          jawabanBenar: ['b', 'b'],
        },
      };

      const unitCount = Object.keys(quizAnswer).length;
      const total = 0;
      for (const unit in quizAnswer) {
        total = total + evaluateQuiz(quizAnswer[unit], dataZonaTest[unit]);
      }
      const nilai = Math.round(total / unitCount);

      const nilaiQuiz = await prisma.nilaiQuiz.create({
        data: {
          zona: zonaId,
          nilai: nilai,
          user: {
            connect: {
              id: +userId,
            },
          },
        },
      });

      res.status(200).json({ nilai: nilaiQuiz.nilai })

    } catch(e) {
      console.log(e);
      res.status(500).json({ message: "Masalah pada server, gagal submit jawaban quiz" });
    }
  },

  async visit(req, res) {
    const { fields } = await parseForm(req);
    const { namaLembaga } = fields;
    const userId = +req.params.id;
    const zona = +req.params.zona;

    try {
      await prisma.lembagaVisited.create({
        data: {
          namaLembaga,
          zona,
          User: {
            connect: {
              id: userId,
            }
          }
        }
      })

      res.sendStatus(200);
    } catch(e) {
      console.error(e);
      res.status(500).json({ message: "Masalah pada server, gagal mengupdate status visited" });
    }
  },

  async getVisited(req, res) {
    const userId = +req.params.id;

    try {
      const hasil = await prisma.user.findUnique({
        where: {
          id: userId,
        },
        select: {
          LembagaVisited: true,
        },
      });

      res.status(200).json({ visited: hasil.LembagaVisited })
    } catch (e) {
      console.error(e);
    }
  }
};
