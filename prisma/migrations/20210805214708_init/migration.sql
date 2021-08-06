-- CreateTable
CREATE TABLE `DetailMentorings` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `day` INTEGER,
    `judul` VARCHAR(255),
    `deskripsi` VARCHAR(255),
    `start` DATETIME(0),
    `end` DATETIME(0),
    `createdAt` DATETIME(0) NOT NULL,
    `updatedAt` DATETIME(0) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Files` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `materi` INTEGER,
    `name` VARCHAR(255),
    `path` VARCHAR(255),
    `createdAt` DATETIME(0) NOT NULL,
    `updatedAt` DATETIME(0) NOT NULL,

    INDEX `materi`(`materi`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `JadwalPresensis` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `judul` VARCHAR(255),
    `start` DATETIME(0),
    `end` DATETIME(0),
    `createdAt` DATETIME(0) NOT NULL,
    `updatedAt` DATETIME(0) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Materis` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `bagian` VARCHAR(255),
    `judul` VARCHAR(255),
    `deskripsi` TEXT,
    `embed` VARCHAR(255),
    `createdAt` DATETIME(0) NOT NULL,
    `updatedAt` DATETIME(0) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Mentorings` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `kelompok` VARCHAR(255),
    `link` VARCHAR(255),
    `detail` INTEGER,
    `createdAt` DATETIME(0) NOT NULL,
    `updatedAt` DATETIME(0) NOT NULL,

    INDEX `detail`(`detail`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `PresensiPeserta` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `hadir` BOOLEAN,
    `user` INTEGER,
    `jadwal` INTEGER,
    `createdAt` DATETIME(0) NOT NULL,
    `updatedAt` DATETIME(0) NOT NULL,

    INDEX `presensipeserta_ibfk_2`(`jadwal`),
    INDEX `user`(`user`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `SequelizeMeta` (
    `name` VARCHAR(255) NOT NULL,

    UNIQUE INDEX `SequelizeMeta.name_unique`(`name`),
    PRIMARY KEY (`name`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `SubmisiTugas` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `pemilik` INTEGER,
    `tugas` INTEGER,
    `nama` VARCHAR(255),
    `path` VARCHAR(255),
    `createdAt` DATETIME(0) NOT NULL,
    `updatedAt` DATETIME(0) NOT NULL,

    INDEX `pemilik`(`pemilik`),
    INDEX `tugas`(`tugas`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Tugas` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `bagian` VARCHAR(255),
    `judul` VARCHAR(255),
    `deskripsi` VARCHAR(255),
    `createdAt` DATETIME(0) NOT NULL,
    `updatedAt` DATETIME(0) NOT NULL,
    `deadline` DATETIME(0),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Users` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nama` VARCHAR(255),
    `nim` VARCHAR(8),
    `email` VARCHAR(255),
    `kelompok` INTEGER,
    `hashedPassword` VARCHAR(255),
    `salt` VARCHAR(255),
    `role` VARCHAR(255),
    `createdAt` DATETIME(0) NOT NULL,
    `updatedAt` DATETIME(0) NOT NULL,

    UNIQUE INDEX `Users.email_unique`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `webinars` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `ytid` VARCHAR(255),
    `judul` VARCHAR(255),
    `deskripsi` VARCHAR(255),
    `start` DATETIME(0),
    `end` DATETIME(0),
    `createdAt` DATETIME(0) NOT NULL,
    `updatedAt` DATETIME(0) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Files` ADD FOREIGN KEY (`materi`) REFERENCES `Materis`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Mentorings` ADD FOREIGN KEY (`detail`) REFERENCES `DetailMentorings`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `PresensiPeserta` ADD FOREIGN KEY (`jadwal`) REFERENCES `JadwalPresensis`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `PresensiPeserta` ADD FOREIGN KEY (`user`) REFERENCES `Users`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `SubmisiTugas` ADD FOREIGN KEY (`pemilik`) REFERENCES `Users`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `SubmisiTugas` ADD FOREIGN KEY (`tugas`) REFERENCES `Tugas`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
