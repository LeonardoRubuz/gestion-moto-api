/*
  Warnings:

  - You are about to drop the column `profil_id` on the `Utilisateur` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[label]` on the table `Profil_Utilisateur` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `profil_label` to the `Utilisateur` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Utilisateur" DROP CONSTRAINT "Utilisateur_profil_id_fkey";

-- AlterTable
ALTER TABLE "Utilisateur" DROP COLUMN "profil_id",
ADD COLUMN     "profil_label" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Profil_Utilisateur_label_key" ON "Profil_Utilisateur"("label");

-- AddForeignKey
ALTER TABLE "Utilisateur" ADD CONSTRAINT "Utilisateur_profil_label_fkey" FOREIGN KEY ("profil_label") REFERENCES "Profil_Utilisateur"("label") ON DELETE RESTRICT ON UPDATE CASCADE;
