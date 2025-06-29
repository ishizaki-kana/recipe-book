/*
  Warnings:

  - You are about to drop the `Recipe` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Recipe";

-- CreateTable
CREATE TABLE "recipe" (
    "recipe_id" SERIAL NOT NULL,
    "recipe_name" TEXT NOT NULL,
    "img_url" TEXT,

    CONSTRAINT "recipe_pkey" PRIMARY KEY ("recipe_id")
);
