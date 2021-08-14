-- CreateTable
CREATE TABLE `TamuGaleri` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nama` VARCHAR(255) NOT NULL DEFAULT '',
    `email` VARCHAR(255) NOT NULL DEFAULT '',
    `asal` VARCHAR(255) NOT NULL DEFAULT '',
    `fakultas` VARCHAR(255),
    `noKel` SMALLINT,
    `angkatan` INTEGER,
    `fakjur` VARCHAR(255),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
