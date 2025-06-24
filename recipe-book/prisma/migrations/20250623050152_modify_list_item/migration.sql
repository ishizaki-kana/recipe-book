/*
  Warnings:

  - You are about to drop the column `recipeName` on the `list_item` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "list_item" DROP COLUMN "recipeName",
ADD COLUMN     "is_done" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "recipe_name" TEXT;
