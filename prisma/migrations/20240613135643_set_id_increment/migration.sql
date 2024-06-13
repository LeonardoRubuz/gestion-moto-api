/*
  Warnings:

  - A unique constraint covering the columns `[id]` on the table `Association` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[id]` on the table `Cotisation` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[id]` on the table `Moto` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[id]` on the table `Notification` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[id]` on the table `Paiement` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[id]` on the table `Permission` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[id]` on the table `Profil_Utilisateur` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[id]` on the table `Programme` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[id]` on the table `Succursale` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[id]` on the table `Type_Cotisation` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
CREATE SEQUENCE association_id_seq;
ALTER TABLE "Association" ALTER COLUMN "id" SET DEFAULT nextval('association_id_seq');
ALTER SEQUENCE association_id_seq OWNED BY "Association"."id";

-- AlterTable
CREATE SEQUENCE cotisation_id_seq;
ALTER TABLE "Cotisation" ALTER COLUMN "id" SET DEFAULT nextval('cotisation_id_seq');
ALTER SEQUENCE cotisation_id_seq OWNED BY "Cotisation"."id";

-- AlterTable
CREATE SEQUENCE moto_id_seq;
ALTER TABLE "Moto" ALTER COLUMN "id" SET DEFAULT nextval('moto_id_seq');
ALTER SEQUENCE moto_id_seq OWNED BY "Moto"."id";

-- AlterTable
CREATE SEQUENCE notification_id_seq;
ALTER TABLE "Notification" ALTER COLUMN "id" SET DEFAULT nextval('notification_id_seq');
ALTER SEQUENCE notification_id_seq OWNED BY "Notification"."id";

-- AlterTable
CREATE SEQUENCE paiement_id_seq;
ALTER TABLE "Paiement" ALTER COLUMN "id" SET DEFAULT nextval('paiement_id_seq');
ALTER SEQUENCE paiement_id_seq OWNED BY "Paiement"."id";

-- AlterTable
CREATE SEQUENCE permission_id_seq;
ALTER TABLE "Permission" ALTER COLUMN "id" SET DEFAULT nextval('permission_id_seq');
ALTER SEQUENCE permission_id_seq OWNED BY "Permission"."id";

-- AlterTable
CREATE SEQUENCE profil_utilisateur_id_seq;
ALTER TABLE "Profil_Utilisateur" ALTER COLUMN "id" SET DEFAULT nextval('profil_utilisateur_id_seq');
ALTER SEQUENCE profil_utilisateur_id_seq OWNED BY "Profil_Utilisateur"."id";

-- AlterTable
CREATE SEQUENCE programme_id_seq;
ALTER TABLE "Programme" ALTER COLUMN "id" SET DEFAULT nextval('programme_id_seq');
ALTER SEQUENCE programme_id_seq OWNED BY "Programme"."id";

-- AlterTable
CREATE SEQUENCE succursale_id_seq;
ALTER TABLE "Succursale" ALTER COLUMN "id" SET DEFAULT nextval('succursale_id_seq');
ALTER SEQUENCE succursale_id_seq OWNED BY "Succursale"."id";

-- AlterTable
CREATE SEQUENCE type_cotisation_id_seq;
ALTER TABLE "Type_Cotisation" ALTER COLUMN "id" SET DEFAULT nextval('type_cotisation_id_seq');
ALTER SEQUENCE type_cotisation_id_seq OWNED BY "Type_Cotisation"."id";

-- CreateIndex
CREATE UNIQUE INDEX "Association_id_key" ON "Association"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Cotisation_id_key" ON "Cotisation"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Moto_id_key" ON "Moto"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Notification_id_key" ON "Notification"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Paiement_id_key" ON "Paiement"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Permission_id_key" ON "Permission"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Profil_Utilisateur_id_key" ON "Profil_Utilisateur"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Programme_id_key" ON "Programme"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Succursale_id_key" ON "Succursale"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Type_Cotisation_id_key" ON "Type_Cotisation"("id");
