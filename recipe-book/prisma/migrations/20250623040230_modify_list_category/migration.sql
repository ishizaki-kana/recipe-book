-- AlterTable
ALTER TABLE "list_category" ADD COLUMN     "color" TEXT NOT NULL DEFAULT '#000',
ADD COLUMN     "icon_name" TEXT NOT NULL DEFAULT 'icon';

-- AlterTable
ALTER TABLE "user" ALTER COLUMN "user_name" DROP DEFAULT;
