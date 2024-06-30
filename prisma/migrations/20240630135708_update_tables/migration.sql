/*
  Warnings:

  - You are about to drop the column `cotisation_id` on the `Paiement` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[label]` on the table `Cotisation` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[nom]` on the table `Programme` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `cotisation_label` to the `Paiement` table without a default value. This is not possible if the table is not empty.
  - Added the required column `devise` to the `Paiement` table without a default value. This is not possible if the table is not empty.
  - Added the required column `montant` to the `Paiement` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Paiement" DROP CONSTRAINT "Paiement_cotisation_id_fkey";

-- AlterTable
ALTER TABLE "Paiement" DROP COLUMN "cotisation_id",
ADD COLUMN     "cotisation_label" TEXT NOT NULL,
ADD COLUMN     "devise" TEXT NOT NULL,
ADD COLUMN     "montant" DOUBLE PRECISION NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Cotisation_label_key" ON "Cotisation"("label");

-- CreateIndex
CREATE UNIQUE INDEX "Programme_nom_key" ON "Programme"("nom");

-- AddForeignKey
ALTER TABLE "Paiement" ADD CONSTRAINT "Paiement_cotisation_label_fkey" FOREIGN KEY ("cotisation_label") REFERENCES "Cotisation"("label") ON DELETE RESTRICT ON UPDATE CASCADE;
