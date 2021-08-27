const fetch = require('node-fetch');
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
      const { zona } = fields;
      const { quizAnswer } = fields;
      const { id } = req.userToken;
      /**
       * bentuk quizAnswer
       * {
       *   KMK: ['a','c','a'],
       *   UATM: ['b','a','a']
       * }
       */

      const cbUrl = 'https://content.katitb2021.com';

      const dataZona =
        await fetch(`${cbUrl}/json/OHK/Kuis/Minigames%20Zona%20${zona}.json`).then(res => res.json());

      quizAnswer = JSON.parse(quizAnswer);
      let total = 0;
      for (const unit in quizAnswer) {
        total += evaluateQuiz(quizAnswer[unit], dataZona[unit].jawabanBenar);
      }

      const nilaiQuiz = await prisma.nilaiQuiz.create({
        data: {
          zona: +zona,
          nilai: total,
          user: {
            connect: {
              id: +id,
            },
          },
        },
      });

      res.status(201).json({ nilai: nilaiQuiz.nilai });

    } catch(e) {
      console.log(e);
      res.status(500).json({ message: 'Masalah pada server, gagal submit jawaban quiz' });
    }
  },

  async getUserScore(req, res) {
    try {
      const { id } = req.userToken;
      const userId = +id;
      const nilaiRaw = await prisma.nilaiQuiz.findMany({
        where: { userId, },
        select: {
          zona: true,
          nilai: true,
        },
      });
      const nilaiRes = {};
      nilaiRaw.forEach(e => nilaiRes[e.zona] = e.nilai);
      res.status(200).json(nilaiRes);
    } catch (e) {
      console.error(e);
      res.status(500).json({ message: 'Terjadi kesalahan pada server', });
    }
  },

  async getAllScore(req, res) {
    try {
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
    } catch (e) {
      console.error(e);
      res.status(500).json({ message: 'Terjadi kesalahan pada server', });
    }
  },

  async getQuizDone(req, res) {
    const { id } = req.userToken;

    try {
      const doneRaw = await prisma.nilaiQuiz.findMany({
        where: {
          userId: id,
        },
        select: {
          zona: true,
        },
      });

      const done = doneRaw.map(e => e.zona);

      res.status(200).json(done);
    } catch (e) {
      console.error(e);
      res.status(500).json({ message: 'Terjadi kesalahan pada server', });
    }
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
      });

      res.sendStatus(201);
    } catch(e) {
      console.error(e);
      res.status(500).json({ message: 'Masalah pada server, gagal mengupdate status visited' });
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
      res.status(500).json({ message: 'Terjadi kesalahan pada server' });
    }
  },
};
