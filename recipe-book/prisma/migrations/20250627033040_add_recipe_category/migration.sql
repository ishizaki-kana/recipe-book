-- AlterTable
ALTER TABLE "recipe" ADD COLUMN     "recipe_category_id" INTEGER NOT NULL DEFAULT 1;

-- CreateTable
CREATE TABLE "recipe_category" (
    "recipe_category_id" SERIAL NOT NULL,
    "category_name" TEXT NOT NULL,
    "icon_name" TEXT NOT NULL,
    "color" TEXT NOT NULL,

    CONSTRAINT "recipe_category_pkey" PRIMARY KEY ("recipe_category_id")
);

-- AddForeignKey
ALTER TABLE "recipe" ADD CONSTRAINT "recipe_recipe_category_id_fkey" FOREIGN KEY ("recipe_category_id") REFERENCES "recipe_category"("recipe_category_id") ON DELETE CASCADE ON UPDATE CASCADE;
