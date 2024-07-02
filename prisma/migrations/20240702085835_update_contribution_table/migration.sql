/*
  Warnings:

  - You are about to drop the column `type_cotisation_id` on the `Cotisation` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[label]` on the table `Type_Cotisation` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `type_cotisation_label` to the `Cotisation` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Cotisation" DROP CONSTRAINT "Cotisation_type_cotisation_id_fkey";

-- AlterTable
ALTER TABLE "Cotisation" DROP COLUMN "type_cotisation_id",
ADD COLUMN     "type_cotisation_label" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Type_Cotisation_label_key" ON "Type_Cotisation"("label");

-- AddForeignKey
ALTER TABLE "Cotisation" ADD CONSTRAINT "Cotisation_type_cotisation_label_fkey" FOREIGN KEY ("type_cotisation_label") REFERENCES "Type_Cotisation"("label") ON DELETE RESTRICT ON UPDATE CASCADE;
