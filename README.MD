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
                "id" : Number
                "titre" : String,
                "message" : String,
                "date_creation" : Datetime
                "date_envoi" : Datetime
                "association_id" : Int
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
            "id" : Number
            "titre" : String,
            "message" : String,
            "date_creation" : Datetime
            "date_envoi" : Datetime
            "association_id" : Int
        }

- #### Modifier une notification
##### Requête
        
    Method : PUT
    URL : {baseUrl}/associations/{id}/notifications/{notif_id}
    Body : 
        {
            "titre" : String,
            "message" : String,
            "date_envoi" : Datetime,
            "association_id" : Int
        }         

##### Réponse

    Status : 200
    Body : "Notification updated"

- #### Supprimer une notification
##### Requête
        
    Method : DELETE
    URL : {baseUrl}/associations/{id}/notifications/{notif_id}
    Body : None        

##### Réponse

    Status : 200
    Body : "Notification  deleted"




### Paiements
- #### Créer un paiement
##### Requête
        
    Method : POST
    URL : {baseUrl}/payments
    Body : 
        {
            "reference" : String,
            "cotisation_id" : Int,
            "utilisateur_id" : String
        }        

##### Réponse

    Status : 201
    Body : "Payment created"

- #### Recupérer la liste des paiements
##### Requête
        
    Method : GET
    URL : {baseUrl}/payments
    Body : None

##### Réponse

    Status : 200
    Body : 
        [
            {
                "id" : Int
                "reference" : String,
                "cotisation_id" : Int,
                "utilisateur_id" : String
            }
        ]

- #### Recupérer un paiement
##### Requête
        
    Method : GET
    URL : {baseUrl}/payments/{id}
    Body :    None     

##### Réponse

    Status : 200
    Body : 
        {
            "id" : Int
            "reference" : String,
            "cotisation_id" : Int,
            "utilisateur_id" : String
        }

- #### Modifier un paiement
##### Requête
        
    Method : PUT
    URL : {baseUrl}/payments/{id}
    Body : 
        {
            "reference" : String,
            "cotisation_id" : Int,
            "utilisateur_id" : String
        }         

##### Réponse

    Status : 200
    Body : "Payment updated"

- #### Supprimer un paiement
##### Requête
        
    Method : DELETE
    URL : {baseUrl}/payments/{id}
    Body : None        

##### Réponse

    Status : 200
    Body : "Payment deleted"




### Permissions

- #### Créer une permission
##### Requête
        
    Method : POST
    URL : {baseUrl}/permissions
    Body : 
        {
            "label" : String,
            "description" : String
        }        

##### Réponse

    Status : 201
    Body : "Payment created"

- #### Recupérer la liste des permissions
##### Requête
        
    Method : GET
    URL : {baseUrl}/permissions
    Body : None

##### Réponse

    Status : 200
    Body : 
        [
            {
                "id" : Int,
                "label" : String,
                "description" : String
            }
        ]

- #### Recupérer une permission
##### Requête
        
    Method : GET
    URL : {baseUrl}/permissions/{id}
    Body :    None     

##### Réponse

    Status : 200
    Body : 
        {
            "id" : Int,
            "label" : String,
            "description" : String
        }

- #### Modifier une permission
##### Requête
        
    Method : PUT
    URL : {baseUrl}/permissions/{id}
    Body : 
        {
            "label" : String,
            "description" : String
        }         

##### Réponse

    Status : 200
    Body : "Permission updated"

- #### Supprimer une permission
##### Requête
        
    Method : DELETE
    URL : {baseUrl}/permissions/{id}
    Body : None        

##### Réponse

    Status : 200
    Body : "Permission deleted"


### Profils d'utilisateurs

- #### Créer un profil
##### Requête
        
    Method : POST
    URL : {baseUrl}/profiles
    Body : 
        {
            "label" : String
        }        

##### Réponse

    Status : 201
    Body : "Payment created"

- #### Recupérer la liste des profils
##### Requête
        
    Method : GET
    URL : {baseUrl}/profiles
    Body : None

##### Réponse

    Status : 200
    Body : 
        [
            {
                "id" : Int,
                "label" : String
            }
        ]

- #### Recupérer un profil
##### Requête
        
    Method : GET
    URL : {baseUrl}/profiles/{id}
    Body :    None     

##### Réponse

    Status : 200
    Body : 
        {
            "id" : Int,
            "label" : String
        }

- #### Modifier un profil
##### Requête
        
    Method : PUT
    URL : {baseUrl}/profiles/{id}
    Body : 
        {
            "label" : String,
            "description" : String
        }         

##### Réponse

    Status : 200
    Body : "Permission updated"

- #### Supprimer une profil
##### Requête
        
    Method : DELETE
    URL : {baseUrl}/profiles/{id}
    Body : None        

##### Réponse

    Status : 200
    Body : "Profile deleted"




### Programmes

- #### Créer un programme
##### Requête
        
    Method : POST
    URL : {baseUrl}/programs
    Body : 
        {
            "label" : String
        }        

##### Réponse

    Status : 201
    Body : "Payment created"

- #### Recupérer la liste des programmes
##### Requête
        
    Method : GET
    URL : {baseUrl}/programs
    Body : None

##### Réponse

    Status : 200
    Body : 
        [
            {
                "id": Int,
                "nom": String,
                "portee": String,
                "telephone": String,
                "email": String
            }
        ]

- #### Recupérer un programme
##### Requête
        
    Method : GET
    URL : {baseUrl}/programs/{id}
    Body :    None     

##### Réponse

    Status : 200
    Body : 
        {
            "id": Int,
            "nom": String,
            "portee": String,
            "telephone": String,
            "email": String
        }

- #### Modifier un programme
##### Requête
        
    Method : PUT
    URL : {baseUrl}/programs/{id}
    Body : 
        {
            "nom": String,
            "portee": String,
            "telephone": String,
            "email": String
        }         

##### Réponse

    Status : 200
    Body : "Program updated"

- #### Supprimer un programme
##### Requête
        
    Method : DELETE
    URL : {baseUrl}/programs/{id}
    Body : None        

##### Réponse

    Status : 200
    Body : "Program deleted"




### Succursales
- #### Créer une succursale
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

- #### Recupérer la liste de succursales 
##### Requête
        
    Method : GET
    URL : {baseUrl}/associations/{id}/notifications
    Body : None

##### Réponse

    Status : 200
    Body : 
        [
            {
                "id" : Number
                "titre" : String,
                "message" : String,
                "date_creation" : Datetime
                "date_envoi" : Datetime
                "association_id" : Int
            }
        ]

- #### Recupérer une succursale
##### Requête
        
    Method : GET
    URL : {baseUrl}/associations/{id}/notifications/{notif_id}
    Body :    None     

##### Réponse

    Status : 200
    Body : 
        {
            "id" : Number
            "titre" : String,
            "message" : String,
            "date_creation" : Datetime
            "date_envoi" : Datetime
            "association_id" : Int
        }

- #### Modifier une succursale
##### Requête
        
    Method : PUT
    URL : {baseUrl}/associations/{id}/notifications/{notif_id}
    Body : 
        {
            "titre" : String,
            "message" : String,
            "date_envoi" : Datetime,
            "association_id" : Int
        }         

##### Réponse

    Status : 200
    Body : "Notification updated"

- #### Supprimer une succursale
##### Requête
        
    Method : DELETE
    URL : {baseUrl}/associations/{id}/notifications/{notif_id}
    Body : None        

##### Réponse

    Status : 200
    Body : "Notification  deleted"



