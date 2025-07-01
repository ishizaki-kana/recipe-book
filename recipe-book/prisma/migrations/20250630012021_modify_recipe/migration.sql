-- AlterTable
ALTER TABLE "recipe" ADD COLUMN     "calories" INTEGER DEFAULT 100,
ADD COLUMN     "shelfLife" TEXT DEFAULT '3日',
ALTER COLUMN "name" DROP DEFAULT;
