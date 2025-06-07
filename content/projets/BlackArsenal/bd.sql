CREATE TABLE utilisateur(
                            id VARCHAR(50),
                            nom VARCHAR(50),
                            email VARCHAR(50),
                            mdp VARCHAR(50),
                            PRIMARY KEY(id)
);

CREATE TABLE arme(
                     id INT,
                     nom VARCHAR(50),
                     prix DOUBLE,
                     description VARCHAR(200),
                     stock INT,
                     image VARCHAR(50),
                     PRIMARY KEY(id)
);

CREATE TABLE armeCorpsACorps(
                                id INT,
                                tranchante LOGICAL,
                                contondante LOGICAL,
                                deLancee LOGICAL,
                                poids VARCHAR(50),
                                longueur DOUBLE,
                                diametre DOUBLE,
                                distanceDeLance DOUBLE,
                                nbLots INT,
                                PRIMARY KEY(id),
                                FOREIGN KEY(id) REFERENCES arme(id)
);

CREATE TABLE arme_a_feu(
                           id INT,
                           modeDeTir VARCHAR(50),
                           portee DECIMAL(15,2),
                           type VARCHAR(50),
                           nbBalles INT,
                           typeMunition VARCHAR(50),
                           PRIMARY KEY(id),
                           FOREIGN KEY(id) REFERENCES arme(id)
);

CREATE TABLE Stand(
                      id INT,
                      types VARCHAR(50),
                      Destructive_Power SMALLINT,
                      Speed SMALLINT,
                      Range_Of_Manifestation SMALLINT,
                      Stamina SMALLINT,
                      Precision_Accuracy SMALLINT,
                      Development_Potential SMALLINT,
                      PRIMARY KEY(id),
                      FOREIGN KEY(id) REFERENCES arme(id)
);

CREATE TABLE Commande(
                         id INT,
                         dateCommande DATE,
                         montant DECIMAL(15,2),
                         statut VARCHAR(50),
                         id_user VARCHAR(50) NOT NULL,
                         PRIMARY KEY(id),
                         FOREIGN KEY(id_user) REFERENCES utilisateur(id)
);

CREATE TABLE concerne(
                         id INT,
                         id_arme INT,
                         PRIMARY KEY(id, id_arme),
                         FOREIGN KEY(id) REFERENCES arme(id),
                         FOREIGN KEY(id_arme) REFERENCES Commande(id)
);