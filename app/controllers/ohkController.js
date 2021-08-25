const { parseForm } = require('../helper/parseform');
const prisma = require('../helper/prisma');
const { evaluateQuiz } = require('../helper/evaluatequiz');

module.exports = {
  /**
   * route postSubmisiQuiz, create NilaiQuiz data of a person in a zone
   * fields required: zona, quizAnswer
   */
  async postSubmisiQuiz(req, res) {
    try {
      const { fields } = await parseForm(req);
      const {  zona, quizAnswer } = fields;
      const { id } = req.userToken;
      /**
       * Asumsi bentuk quizAnswer
       * {
       *  KMK: ['a','c','a'],
       *  UATM: ['b','a','a']
       * }
       */

      // TODO:
      // - [ ] Fetch JSON

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
      let total = 0;
      for (const unit in quizAnswer) {
        total += evaluateQuiz(quizAnswer[unit], dataZonaTest[unit].jawabanBenar);
      }
      const nilai = Math.round(total / unitCount);

      const nilaiQuiz = await prisma.nilaiQuiz.create({
        data: {
          zona: +zona,
          nilai: nilai,
          user: {
            connect: {
              id: +id,
            },
          },
        },
      });

      res.status(201).json({ nilai: nilaiQuiz.nilai })

    } catch(e) {
      console.log(e);
      res.status(500).json({ message: "Masalah pada server, gagal submit jawaban quiz" });
    }
  },

  async getScore(req, res) {
    const userId = +req.params.id;

    const score = await prisma.nilaiQuiz.findMany({
      where: { userId, },
      select: { nilai: true, zona: true },
    });

    res.status(200).json({ nilai: score })
  },

  async getAllScore(req, res) {
    // const nilai = await prisma.nilaiQuiz.groupBy({
    //   by: ['userId'],
    //   _sum: {
    //     nilai: true,
    //   },
    //   orderBy: {
    //     _sum: {
    //       nilai: 'desc',
    //     },
    //   },
    // });

    const nilai = await prisma.$queryRaw`
      SELECT
        userId,
        nama,
        nim,
        kelompok,
        sum(nilai) AS nilai
      FROM
        NilaiQuiz JOIN Users
      WHERE
        NilaiQuiz.userId = Users.id
      GROUP BY
        userId
      ORDER BY
        nilai DESC;
    `;

    res.status(200).json(nilai);
  },

  async visit(req, res) {
    const { fields } = await parseForm(req);
    const { namaLembaga, zona } = fields;
    const { id } = req.userToken;

    try {
      await prisma.lembagaVisited.create({
        data: {
          namaLembaga,
          zona: +zona,
          User: {
            connect: {
              id: +id,
            }
          }
        }
      })

      res.sendStatus(201);
    } catch(e) {
      console.error(e);
      res.status(500).json({ message: "Masalah pada server, gagal mengupdate status visited" });
    }
  },

  async getVisited(req, res) {
    const { id } = req.userToken;

    try {
      const hasil = await prisma.user.findUnique({
        where: {
          id: +id,
        },
        select: {
          LembagaVisited: true,
        },
      });

      res.status(200).json(hasil.LembagaVisited);
    } catch (e) {
      console.error(e);
    }
  },
};
