-- CreateTable
CREATE TABLE "recipe_step" (
    "id" SERIAL NOT NULL,
    "recipe_id" INTEGER NOT NULL,
    "step_number" INTEGER NOT NULL,
    "text" TEXT NOT NULL,

    CONSTRAINT "recipe_step_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "recipe_step_recipe_id_step_number_key" ON "recipe_step"("recipe_id", "step_number");

-- AddForeignKey
ALTER TABLE "recipe_step" ADD CONSTRAINT "recipe_step_recipe_id_fkey" FOREIGN KEY ("recipe_id") REFERENCES "recipe"("id") ON DELETE CASCADE ON UPDATE CASCADE;
