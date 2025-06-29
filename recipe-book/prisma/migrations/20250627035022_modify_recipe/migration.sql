-- AddForeignKey
ALTER TABLE "recipe" ADD CONSTRAINT "recipe_recipe_category_id_fkey" FOREIGN KEY ("recipe_category_id") REFERENCES "recipe_category"("recipe_category_id") ON DELETE CASCADE ON UPDATE CASCADE;
