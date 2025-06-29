-- CreateTable
CREATE TABLE "Recipe" (
    "recipe_id" SERIAL NOT NULL,
    "recipe_name" TEXT NOT NULL,
    "img_url" TEXT,

    CONSTRAINT "Recipe_pkey" PRIMARY KEY ("recipe_id")
);
