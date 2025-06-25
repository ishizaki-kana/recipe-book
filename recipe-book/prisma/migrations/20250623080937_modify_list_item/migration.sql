/*
  Warnings:

  - You are about to drop the column `unit` on the `list_item` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "list_item" DROP COLUMN "unit",
ALTER COLUMN "volume" SET DATA TYPE TEXT;
