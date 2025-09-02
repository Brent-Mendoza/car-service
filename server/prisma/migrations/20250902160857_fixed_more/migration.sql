/*
  Warnings:

  - You are about to drop the column `details` on the `quote` table. All the data in the column will be lost.
  - Added the required column `customerId` to the `Quote` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `quote` DROP COLUMN `details`,
    ADD COLUMN `customerId` INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE `Quote` ADD CONSTRAINT `Quote_customerId_fkey` FOREIGN KEY (`customerId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
