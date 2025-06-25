/*
  Warnings:

  - You are about to drop the column `amount` on the `list_item` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "list_category" ALTER COLUMN "color" DROP DEFAULT,
ALTER COLUMN "icon_name" DROP DEFAULT;

-- AlterTable
ALTER TABLE "list_item" DROP COLUMN "amount",
ADD COLUMN     "unit" TEXT NOT NULL DEFAULT 'ml',
ADD COLUMN     "volume" INTEGER NOT NULL DEFAULT 100;
