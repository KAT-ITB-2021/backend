-- CreateTable
CREATE TABLE `NilaiQuiz` (
    `userId` INTEGER NOT NULL,
    `zona` TINYINT UNSIGNED NOT NULL,
    `nilai` TINYINT UNSIGNED NOT NULL,

    INDEX `userId`(`userId`),
    INDEX `zona`(`zona`),
    PRIMARY KEY (`userId`, `zona`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `LembagaVisited` (
    `userId` INTEGER NOT NULL,
    `zona` TINYINT UNSIGNED NOT NULL,
    `namaLembaga` VARCHAR(255) NOT NULL,

    INDEX `userId`(`userId`),
    INDEX `zona`(`zona`),
    PRIMARY KEY (`userId`, `namaLembaga`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `NilaiQuiz` ADD FOREIGN KEY (`userId`) REFERENCES `Users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `LembagaVisited` ADD FOREIGN KEY (`userId`) REFERENCES `Users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
