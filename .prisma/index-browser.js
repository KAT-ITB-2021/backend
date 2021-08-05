
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal
} = require('./runtime/index-browser')


const Prisma = {}

exports.Prisma = Prisma

/**
 * Prisma Client JS version: 2.28.0
 * Query Engine version: 89facabd0366f63911d089156a7a70125bfbcd27
 */
Prisma.prismaVersion = {
  client: "2.28.0",
  engine: "89facabd0366f63911d089156a7a70125bfbcd27"
}

Prisma.PrismaClientKnownRequestError = () => {
  throw new Error(`PrismaClientKnownRequestError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  throw new Error(`PrismaClientUnknownRequestError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientRustPanicError = () => {
  throw new Error(`PrismaClientRustPanicError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientInitializationError = () => {
  throw new Error(`PrismaClientInitializationError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientValidationError = () => {
  throw new Error(`PrismaClientValidationError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */

Prisma.sql = () => {
  throw new Error(`sqltag is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.empty = () => {
  throw new Error(`empty is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.join = () => {
  throw new Error(`join is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.raw = () => {
  throw new Error(`raw is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.validator = () => (val) => val

/**
 * Enums
 */
// Based on
// https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275
function makeEnum(x) { return x; }

exports.Prisma.DetailMentoringsScalarFieldEnum = makeEnum({
  id: 'id',
  day: 'day',
  judul: 'judul',
  deskripsi: 'deskripsi',
  start: 'start',
  end: 'end',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
});

exports.Prisma.FilesScalarFieldEnum = makeEnum({
  id: 'id',
  materi: 'materi',
  name: 'name',
  path: 'path',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
});

exports.Prisma.JadwalPresensisScalarFieldEnum = makeEnum({
  id: 'id',
  judul: 'judul',
  start: 'start',
  end: 'end',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
});

exports.Prisma.MaterisScalarFieldEnum = makeEnum({
  id: 'id',
  bagian: 'bagian',
  judul: 'judul',
  deskripsi: 'deskripsi',
  embed: 'embed',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
});

exports.Prisma.MentoringsScalarFieldEnum = makeEnum({
  id: 'id',
  kelompok: 'kelompok',
  link: 'link',
  detail: 'detail',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
});

exports.Prisma.PresensiPesertaScalarFieldEnum = makeEnum({
  id: 'id',
  hadir: 'hadir',
  user: 'user',
  jadwal: 'jadwal',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
});

exports.Prisma.SequelizeMetaScalarFieldEnum = makeEnum({
  name: 'name'
});

exports.Prisma.SubmisiTugasScalarFieldEnum = makeEnum({
  id: 'id',
  pemilik: 'pemilik',
  tugas: 'tugas',
  nama: 'nama',
  path: 'path',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
});

exports.Prisma.TugasScalarFieldEnum = makeEnum({
  id: 'id',
  bagian: 'bagian',
  judul: 'judul',
  deskripsi: 'deskripsi',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  deadline: 'deadline'
});

exports.Prisma.UsersScalarFieldEnum = makeEnum({
  id: 'id',
  nama: 'nama',
  nim: 'nim',
  email: 'email',
  kelompok: 'kelompok',
  hashedPassword: 'hashedPassword',
  salt: 'salt',
  role: 'role',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
});

exports.Prisma.WebinarsScalarFieldEnum = makeEnum({
  id: 'id',
  ytid: 'ytid',
  judul: 'judul',
  deskripsi: 'deskripsi',
  start: 'start',
  end: 'end',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
});

exports.Prisma.SortOrder = makeEnum({
  asc: 'asc',
  desc: 'desc'
});


exports.Prisma.ModelName = makeEnum({
  DetailMentorings: 'DetailMentorings',
  Files: 'Files',
  JadwalPresensis: 'JadwalPresensis',
  Materis: 'Materis',
  Mentorings: 'Mentorings',
  PresensiPeserta: 'PresensiPeserta',
  SequelizeMeta: 'SequelizeMeta',
  SubmisiTugas: 'SubmisiTugas',
  Tugas: 'Tugas',
  Users: 'Users',
  webinars: 'webinars'
});

/**
 * Create the Client
 */
class PrismaClient {
  constructor() {
    throw new Error(
      `PrismaClient is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
    )
  }
}
exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
