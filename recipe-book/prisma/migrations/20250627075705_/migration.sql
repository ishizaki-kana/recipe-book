/*
  Warnings:

  - The primary key for the `list_category` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `category_name` on the `list_category` table. All the data in the column will be lost.
  - You are about to drop the column `icon_name` on the `list_category` table. All the data in the column will be lost.
  - You are about to drop the column `list_category_id` on the `list_category` table. All the data in the column will be lost.
  - The primary key for the `list_item` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `item_id` on the `list_item` table. All the data in the column will be lost.
  - You are about to drop the column `item_name` on the `list_item` table. All the data in the column will be lost.
  - You are about to drop the column `list_category_id` on the `list_item` table. All the data in the column will be lost.
  - You are about to drop the column `recipe_name` on the `list_item` table. All the data in the column will be lost.
  - The primary key for the `recipe` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `img_url` on the `recipe` table. All the data in the column will be lost.
  - You are about to drop the column `recipe_category_id` on the `recipe` table. All the data in the column will be lost.
  - You are about to drop the column `recipe_id` on the `recipe` table. All the data in the column will be lost.
  - The primary key for the `recipe_category` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `category_name` on the `recipe_category` table. All the data in the column will be lost.
  - You are about to drop the column `icon_name` on the `recipe_category` table. All the data in the column will be lost.
  - You are about to drop the column `recipe_category_id` on the `recipe_category` table. All the data in the column will be lost.
  - The primary key for the `user` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `user_id` on the `user` table. All the data in the column will be lost.
  - You are about to drop the column `user_name` on the `user` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "list_item" DROP CONSTRAINT "list_item_list_category_id_fkey";

-- DropForeignKey
ALTER TABLE "recipe" DROP CONSTRAINT "recipe_recipe_category_id_fkey";

-- AlterTable
ALTER TABLE "list_category" DROP CONSTRAINT "list_category_pkey",
DROP COLUMN "category_name",
DROP COLUMN "icon_name",
DROP COLUMN "list_category_id",
ADD COLUMN     "icon" TEXT NOT NULL DEFAULT 'fish',
ADD COLUMN     "id" SERIAL NOT NULL,
ADD COLUMN     "name" TEXT NOT NULL DEFAULT '未分類',
ALTER COLUMN "color" SET DEFAULT '#FFCC00',
ADD CONSTRAINT "list_category_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "list_item" DROP CONSTRAINT "list_item_pkey",
DROP COLUMN "item_id",
DROP COLUMN "item_name",
DROP COLUMN "list_category_id",
DROP COLUMN "recipe_name",
ADD COLUMN     "category_id" INTEGER NOT NULL DEFAULT 1,
ADD COLUMN     "id" SERIAL NOT NULL,
ADD COLUMN     "name" TEXT NOT NULL DEFAULT '未分類',
ADD COLUMN     "recipeName" TEXT,
ADD CONSTRAINT "list_item_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "recipe" DROP CONSTRAINT "recipe_pkey",
DROP COLUMN "img_url",
DROP COLUMN "recipe_category_id",
DROP COLUMN "recipe_id",
ADD COLUMN     "category_id" INTEGER NOT NULL DEFAULT 1,
ADD COLUMN     "id" SERIAL NOT NULL,
ADD COLUMN     "image_url" TEXT,
ALTER COLUMN "recipe_name" SET DEFAULT '未分類',
ADD CONSTRAINT "recipe_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "recipe_category" DROP CONSTRAINT "recipe_category_pkey",
DROP COLUMN "category_name",
DROP COLUMN "icon_name",
DROP COLUMN "recipe_category_id",
ADD COLUMN     "icon" TEXT NOT NULL DEFAULT 'fish',
ADD COLUMN     "id" SERIAL NOT NULL,
ADD COLUMN     "name" TEXT NOT NULL DEFAULT '未分類',
ALTER COLUMN "color" SET DEFAULT '#FFCC00',
ADD CONSTRAINT "recipe_category_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "user" DROP CONSTRAINT "user_pkey",
DROP COLUMN "user_id",
DROP COLUMN "user_name",
ADD COLUMN     "id" TEXT NOT NULL DEFAULT '1',
ADD COLUMN     "name" TEXT NOT NULL DEFAULT 'Anonymous',
ADD CONSTRAINT "user_pkey" PRIMARY KEY ("id");

-- AddForeignKey
ALTER TABLE "recipe" ADD CONSTRAINT "recipe_category_id_fkey" FOREIGN KEY ("category_id") REFERENCES "recipe_category"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "list_item" ADD CONSTRAINT "list_item_category_id_fkey" FOREIGN KEY ("category_id") REFERENCES "list_category"("id") ON DELETE CASCADE ON UPDATE CASCADE;
