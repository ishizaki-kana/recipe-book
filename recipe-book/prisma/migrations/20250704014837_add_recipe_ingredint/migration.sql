-- CreateTable
CREATE TABLE "recipe_ingredient" (
    "id" SERIAL NOT NULL,
    "recipe_id" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "volume" TEXT,

    CONSTRAINT "recipe_ingredient_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "recipe_ingredient" ADD CONSTRAINT "recipe_ingredient_recipe_id_fkey" FOREIGN KEY ("recipe_id") REFERENCES "recipe"("id") ON DELETE CASCADE ON UPDATE CASCADE;
