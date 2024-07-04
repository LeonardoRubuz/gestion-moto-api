-- DropForeignKey
ALTER TABLE "Association" DROP CONSTRAINT "Association_programme_label_fkey";

-- AlterTable
ALTER TABLE "Association" ALTER COLUMN "programme_label" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Association" ADD CONSTRAINT "Association_programme_label_fkey" FOREIGN KEY ("programme_label") REFERENCES "Programme"("nom") ON DELETE SET NULL ON UPDATE CASCADE;
