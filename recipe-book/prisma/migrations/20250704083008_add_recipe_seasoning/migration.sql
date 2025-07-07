-- CreateTable
CREATE TABLE "recipe_seasoning" (
    "id" SERIAL NOT NULL,
    "step_id" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "volume" TEXT,
    "order" INTEGER,

    CONSTRAINT "recipe_seasoning_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "recipe_seasoning" ADD CONSTRAINT "recipe_seasoning_step_id_fkey" FOREIGN KEY ("step_id") REFERENCES "recipe_step"("id") ON DELETE CASCADE ON UPDATE CASCADE;
