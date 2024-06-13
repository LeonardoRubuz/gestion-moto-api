-- CreateTable
CREATE TABLE "Association" (
    "id" INTEGER NOT NULL,
    "nom" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "programme_id" INTEGER NOT NULL,

    CONSTRAINT "Association_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Cotisation" (
    "id" INTEGER NOT NULL,
    "label" TEXT NOT NULL,
    "devise" TEXT NOT NULL,
    "date_creation" TIMESTAMP(3) NOT NULL,
    "isActive" BOOLEAN NOT NULL,
    "association_id" INTEGER NOT NULL,
    "type_cotisation_id" INTEGER NOT NULL,

    CONSTRAINT "Cotisation_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Moto" (
    "id" INTEGER NOT NULL,
    "marque" TEXT NOT NULL,
    "modele" TEXT NOT NULL,
    "immatriculation" TEXT NOT NULL,
    "utilisateur_id" TEXT NOT NULL,

    CONSTRAINT "Moto_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Notification" (
    "id" INTEGER NOT NULL,
    "titre" TEXT NOT NULL,
    "message" TEXT NOT NULL,
    "date_creation" TIMESTAMP(3) NOT NULL,
    "date_envoi" TIMESTAMP(3),
    "association_id" INTEGER NOT NULL,

    CONSTRAINT "Notification_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Paiement" (
    "id" INTEGER NOT NULL,
    "reference" TEXT NOT NULL,
    "cotisation_id" INTEGER NOT NULL,
    "utilisateur_id" TEXT NOT NULL,

    CONSTRAINT "Paiement_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Permission" (
    "id" INTEGER NOT NULL,
    "label" TEXT NOT NULL,
    "description" TEXT,

    CONSTRAINT "Permission_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Profil_Utilisateur" (
    "id" INTEGER NOT NULL,
    "label" TEXT NOT NULL,

    CONSTRAINT "Profil_Utilisateur_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Programme" (
    "id" INTEGER NOT NULL,
    "nom" TEXT NOT NULL,
    "portee" TEXT NOT NULL,
    "telephone" TEXT NOT NULL,
    "email" TEXT NOT NULL,

    CONSTRAINT "Programme_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Succursale" (
    "id" INTEGER NOT NULL,
    "nom" TEXT NOT NULL,
    "association_id" INTEGER NOT NULL,

    CONSTRAINT "Succursale_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Type_Cotisation" (
    "id" INTEGER NOT NULL,
    "label" TEXT NOT NULL,

    CONSTRAINT "Type_Cotisation_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Utilisateur" (
    "id" TEXT NOT NULL,
    "nom" TEXT NOT NULL,
    "prenom" TEXT NOT NULL,
    "postnom" TEXT NOT NULL,
    "email" TEXT,
    "password" TEXT NOT NULL,
    "phone1" TEXT NOT NULL,
    "phone2" TEXT,
    "lieu_naissance" TEXT NOT NULL,
    "date_naissance" DATE NOT NULL,
    "association_id" INTEGER,
    "profil_id" INTEGER NOT NULL,

    CONSTRAINT "Utilisateur_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_PermissionToProfil_Utilisateur" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_PermissionToProfil_Utilisateur_AB_unique" ON "_PermissionToProfil_Utilisateur"("A", "B");

-- CreateIndex
CREATE INDEX "_PermissionToProfil_Utilisateur_B_index" ON "_PermissionToProfil_Utilisateur"("B");

-- AddForeignKey
ALTER TABLE "Association" ADD CONSTRAINT "Association_programme_id_fkey" FOREIGN KEY ("programme_id") REFERENCES "Programme"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Cotisation" ADD CONSTRAINT "Cotisation_association_id_fkey" FOREIGN KEY ("association_id") REFERENCES "Association"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Cotisation" ADD CONSTRAINT "Cotisation_type_cotisation_id_fkey" FOREIGN KEY ("type_cotisation_id") REFERENCES "Type_Cotisation"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Moto" ADD CONSTRAINT "Moto_utilisateur_id_fkey" FOREIGN KEY ("utilisateur_id") REFERENCES "Utilisateur"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Notification" ADD CONSTRAINT "Notification_association_id_fkey" FOREIGN KEY ("association_id") REFERENCES "Association"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Paiement" ADD CONSTRAINT "Paiement_cotisation_id_fkey" FOREIGN KEY ("cotisation_id") REFERENCES "Cotisation"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Paiement" ADD CONSTRAINT "Paiement_utilisateur_id_fkey" FOREIGN KEY ("utilisateur_id") REFERENCES "Utilisateur"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Succursale" ADD CONSTRAINT "Succursale_association_id_fkey" FOREIGN KEY ("association_id") REFERENCES "Association"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Utilisateur" ADD CONSTRAINT "Utilisateur_association_id_fkey" FOREIGN KEY ("association_id") REFERENCES "Association"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Utilisateur" ADD CONSTRAINT "Utilisateur_profil_id_fkey" FOREIGN KEY ("profil_id") REFERENCES "Profil_Utilisateur"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PermissionToProfil_Utilisateur" ADD CONSTRAINT "_PermissionToProfil_Utilisateur_A_fkey" FOREIGN KEY ("A") REFERENCES "Permission"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PermissionToProfil_Utilisateur" ADD CONSTRAINT "_PermissionToProfil_Utilisateur_B_fkey" FOREIGN KEY ("B") REFERENCES "Profil_Utilisateur"("id") ON DELETE CASCADE ON UPDATE CASCADE;
