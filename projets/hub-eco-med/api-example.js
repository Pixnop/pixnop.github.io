/**
 * Route API REST ECO-voiturage
 * Exemple d'endpoint pour récupérer les données des terrains
 */

const express = require('express');
const app = express();

/**
 * Route pour récupérer les données des terrains.
 * @name get/terrains
 * @function
 * @inner
 * @param {string} path - Path pour la route.
 * @param {callback} middleware - Fonction de middleware Express.
 */
app.get('/terrains', async (req, res) => {
    try {
        const { terrains, dateMiseAJour } = dataProcessor.getProcessedData();
        console.log("getProcessedData = " + dateMiseAJour);
        
        const terrainsData = Array.from(terrains.values()).map(terrain => ({
            affaire: {
                code: terrain.affaire.code,
                nom: terrain.affaire.nom,
                commune: {
                    ville: terrain.affaire.commune.ville,
                    codePostal: terrain.affaire.commune.codePostal,
                    latitude: terrain.affaire.commune.latitude,
                    longitude: terrain.affaire.commune.longitude
                }
            },
            personne: {
                nom: terrain.personne.nom,
                prenom: terrain.personne.prenom,
                profils: terrain.personne.profils,
                agence: terrain.personne.agence,
            },
            quantiteParMois: terrain.quantiteParMois,
            estNuit: terrain.estNuit,
            ligneAffaire: terrain.ligneAffaire,
        }));

        res.json({
            terrains: terrainsData,
            dateMiseAJour: dateMiseAJour.toLocaleString('fr-FR', { 
                dateStyle: 'long', 
                timeStyle: 'short' 
            })
        });
    } catch (error) {
        console.error('Erreur lors de la récupération des terrains :', error);
        res.status(500).json({ error: 'Erreur interne du serveur' });
    }
});

// Exemple d'algorithme de dédoublonnage
function deduplicate(data) {
    const seen = new Map();
    
    return data.filter(item => {
        // Création d'un hash unique basé sur les champs clés
        const key = crypto.createHash('md5')
            .update(item.projet + item.date + item.intervenant)
            .digest('hex');
        
        if (seen.has(key)) {
            return false;
        }
        
        seen.set(key, true);
        return true;
    });
}

module.exports = app;