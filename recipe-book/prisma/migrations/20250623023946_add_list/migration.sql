/*
  Warnings:

  - You are about to drop the column `name` on the `user` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "user" DROP COLUMN "name",
ADD COLUMN     "user_name" TEXT NOT NULL DEFAULT 'test';

-- CreateTable
CREATE TABLE "list_item" (
    "item_id" SERIAL NOT NULL,
    "item_name" TEXT NOT NULL,
    "amount" TEXT NOT NULL,
    "list_category_id" INTEGER NOT NULL,

    CONSTRAINT "list_item_pkey" PRIMARY KEY ("item_id")
);

-- CreateTable
CREATE TABLE "list_category" (
    "list_category_id" SERIAL NOT NULL,
    "category_name" TEXT NOT NULL,

    CONSTRAINT "list_category_pkey" PRIMARY KEY ("list_category_id")
);

-- AddForeignKey
ALTER TABLE "list_item" ADD CONSTRAINT "list_item_list_category_id_fkey" FOREIGN KEY ("list_category_id") REFERENCES "list_category"("list_category_id") ON DELETE CASCADE ON UPDATE CASCADE;
