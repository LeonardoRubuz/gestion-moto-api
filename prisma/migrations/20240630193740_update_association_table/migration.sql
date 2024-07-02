/*
  Warnings:

  - You are about to drop the column `programme_id` on the `Association` table. All the data in the column will be lost.
  - Added the required column `programme_label` to the `Association` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Association" DROP CONSTRAINT "Association_programme_id_fkey";

-- AlterTable
ALTER TABLE "Association" DROP COLUMN "programme_id",
ADD COLUMN     "programme_label" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "Association" ADD CONSTRAINT "Association_programme_label_fkey" FOREIGN KEY ("programme_label") REFERENCES "Programme"("nom") ON DELETE RESTRICT ON UPDATE CASCADE;
