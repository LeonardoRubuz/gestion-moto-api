/*
  Warnings:

  - You are about to drop the column `association_id` on the `Cotisation` table. All the data in the column will be lost.
  - You are about to drop the column `association_id` on the `Notification` table. All the data in the column will be lost.
  - You are about to drop the column `association_id` on the `Utilisateur` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[nom]` on the table `Association` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `association_label` to the `Cotisation` table without a default value. This is not possible if the table is not empty.
  - Added the required column `association_label` to the `Notification` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Cotisation" DROP CONSTRAINT "Cotisation_association_id_fkey";

-- DropForeignKey
ALTER TABLE "Notification" DROP CONSTRAINT "Notification_association_id_fkey";

-- DropForeignKey
ALTER TABLE "Utilisateur" DROP CONSTRAINT "Utilisateur_association_id_fkey";

-- AlterTable
ALTER TABLE "Cotisation" DROP COLUMN "association_id",
ADD COLUMN     "association_label" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Notification" DROP COLUMN "association_id",
ADD COLUMN     "association_label" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Utilisateur" DROP COLUMN "association_id",
ADD COLUMN     "association_label" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "Association_nom_key" ON "Association"("nom");

-- AddForeignKey
ALTER TABLE "Cotisation" ADD CONSTRAINT "Cotisation_association_label_fkey" FOREIGN KEY ("association_label") REFERENCES "Association"("nom") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Notification" ADD CONSTRAINT "Notification_association_label_fkey" FOREIGN KEY ("association_label") REFERENCES "Association"("nom") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Utilisateur" ADD CONSTRAINT "Utilisateur_association_label_fkey" FOREIGN KEY ("association_label") REFERENCES "Association"("nom") ON DELETE SET NULL ON UPDATE CASCADE;
