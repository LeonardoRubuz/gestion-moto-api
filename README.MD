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

## Ressources
- Associations
- Cotisations
- Motos
- Notifications
- Paiements
- Permissions
- Profils d'utilisateurs
- Programmes
- Succursales
- Types de cotisation
- Utilisateurs


### Associations
- #### Créer une association
##### Requête
        
    Method : POST
    URL : {baseUrl}/associations
    Body : 
        {
            "nom" : String,
            "description" : String,
            "programme" : Int
        }        

##### Réponse

    Status : 201
    Body : "Association created"

- #### Recupérer la liste des associations
##### Requête
        
    Method : GET
    URL : {baseUrl}/associations
    Body : None

##### Réponse

    Status : 200
    Body : 
        [
            {
                "id": Number,
                "nom": String,
                "description": String,
                "programme_id": Number
            },
            {
                "id": Number,
                "nom": String,
                "description": String,
                "programme_id": Number
            }
        ]

- #### Recupérer une association
##### Requête
        
    Method : GET
    URL : {baseUrl}/associations/{id}
    Body :    None     

##### Réponse

    Status : 200
    Body : 
        {
            "id": Number,
            "nom": String,
            "description": String,
            "programme_id": Number
        }

- #### Modifier une association
##### Requête
        
    Method : PUT
    URL : {baseUrl}/associations/{id}
    Body : 
        {
            "nom": String,
            "description": String,
            "programme_id": Number
        }         

##### Réponse

    Status : 200
    Body : "Association updated"

- #### Supprimer une association
##### Requête
        
    Method : DELETE
    URL : {baseUrl}/associations/{id}
    Body : None        

##### Réponse

    Status : 200
    Body : "Association deleted"

### Cotisations
- #### Créer une cotisation
##### Requête
        
    Method : POST
    URL : {baseUrl}/contributions
    Body : 
        {
            "label" : String,
            "devise" : String,
            "isActive" : Boolean,
            "association_id" : Number,
        }        

##### Réponse

    Status : 201
    Body : "Contribution created"

- #### Recupérer la liste des cotisations
##### Requête
        
    Method : GET
    URL : {baseUrl}/contributions
    Body : None

##### Réponse

    Status : 200
    Body : 
        [
            {
                "id" : Number
                "label" : String,
                "devise" : String,
                "isActive" : Boolean,
                "association_id" : Number,
            }
        ]

- #### Recupérer une cotisation
##### Requête
        
    Method : GET
    URL : {baseUrl}/contributions/{id}
    Body :    None     

##### Réponse

    Status : 200
    Body : 
        {
            "id" : Number,
            "label" : String,
            "devise" : String,
            "isActive" : Boolean,
            "association_id" : Number,
        }

- #### Modifier une cotisation
##### Requête
        
    Method : PUT
    URL : {baseUrl}/contributions/{id}
    Body : 
        {
            "label" : String,
            "devise" : String,
            "isActive" : Boolean,
            "association_id" : Number,
        }         

##### Réponse

    Status : 200
    Body : "Contribution updated"

- #### Supprimer une cotisation
##### Requête
        
    Method : DELETE
    URL : {baseUrl}/contributions/{id}
    Body : None        

##### Réponse

    Status : 200
    Body : "Contribution deleted"

### Notifications
- #### Créer une notification
##### Requête
        
    Method : POST
    URL : {baseUrl}/associations/{id}/notifications
    Body : 
        {
            "titre" : String,
            "message" : String,
            "association_id" : Int
        }        

##### Réponse

    Status : 201
    Body : "Notification created"

- #### Recupérer la liste de notifications
##### Requête
        
    Method : GET
    URL : {baseUrl}/associations/{id}/notifications
    Body : None

##### Réponse

    Status : 200
    Body : 
        [
            {
                "id": Number,
                "nom": String,
                "description": String,
                "programme_id": Number
            },
            {
                "id": Number,
                "nom": String,
                "description": String,
                "programme_id": Number
            }
        ]

- #### Recupérer une notification
##### Requête
        
    Method : GET
    URL : {baseUrl}/associations/{id}/notifications/{notif_id}
    Body :    None     

##### Réponse

    Status : 200
    Body : 
        {
            "id": Number,
            "nom": String,
            "description": String,
            "programme_id": Number
        }

- #### Modifier une notification
##### Requête
        
    Method : PUT
    URL : {baseUrl}/associations/{id}/notifications/{notif_id}
    Body : 
        {
            "nom": String,
            "description": String,
            "programme_id": Number
        }         

##### Réponse

    Status : 200
    Body : "Association updated"

- #### Supprimer une notification
##### Requête
        
    Method : DELETE
    URL : {baseUrl}/associations/{id}/notifications/{notif_id}
    Body : None        

##### Réponse

    Status : 200
    Body : "Association deleted"

