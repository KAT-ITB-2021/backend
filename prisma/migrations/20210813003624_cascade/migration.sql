-- DropForeignKey
ALTER TABLE `Mentorings` DROP FOREIGN KEY `mentorings_ibfk_1`;

-- AddForeignKey
ALTER TABLE `Mentorings` ADD FOREIGN KEY (`detail`) REFERENCES `DetailMentorings`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
