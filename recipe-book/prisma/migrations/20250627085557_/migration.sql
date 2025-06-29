/*
  Warnings:

  - You are about to drop the column `recipe_name` on the `recipe` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "list_category" ALTER COLUMN "color" DROP DEFAULT,
ALTER COLUMN "icon" DROP DEFAULT,
ALTER COLUMN "name" DROP DEFAULT;

-- AlterTable
ALTER TABLE "list_item" ALTER COLUMN "category_id" DROP DEFAULT,
ALTER COLUMN "name" DROP DEFAULT;

-- AlterTable
ALTER TABLE "recipe" DROP COLUMN "recipe_name",
ADD COLUMN     "name" TEXT NOT NULL DEFAULT '',
ALTER COLUMN "category_id" DROP DEFAULT;

-- AlterTable
ALTER TABLE "recipe_category" ALTER COLUMN "color" DROP DEFAULT,
ALTER COLUMN "icon" DROP DEFAULT,
ALTER COLUMN "name" DROP DEFAULT;

-- AlterTable
ALTER TABLE "user" ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "name" DROP DEFAULT;
