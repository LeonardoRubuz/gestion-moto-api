# Documentation API Gestion de Moto

API pour la gestion de motos

## Technologies utilisées
- Express.js
- Node.js
- PostgreSQL

## Prérequis
- La plus récente version de [NodeJS](https://nodejs.org/en/)
- La plus récente version de  [PostgresSQL](https://www.postgresql.org/download/). (En considérant la version 15 comme minimale)

## Variables d'environnement
- Créer un fichier .env à la racine du projet
- Ajouter la variable `DATABASE_URL` par  votre URI Postgres. Par exemple : 

    
        DATABASE_URL = "postgresql://user:password@localhost:5432/databaseName?schema=public"
    

## Installation
Lancer la commande suivante dans le dossier racine :

```bash
    npm install
```

## Schéma de base de données
- Générer la migration du schema
    
    ```
        npx prisma generate
    ``` 

- Synchroniser le schema avec les tables de la base de données
    
    ```
        npx prisma db push
    ```

## Lancement de l'application

    npm run dev