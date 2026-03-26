const axios = require('axios');
const admin = require('firebase-admin');

// Recuperamos la llave maestra desde las variables ocultas de GitHub
const serviceAccount = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT);

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();

async function syncFuel() {
  try {
    const url = "https://sedeaplicaciones.minetur.gob.es/ServiciosRESTCarburantes/PreciosCarburantes/EstacionesTerrestres/FiltroProvincia/04";
    const res = await axios.get(url);
    
    // Filtramos Almería Capital
    const almeria = res.data.ListaEESSPrecio.filter(e => 
      e['Municipio'].toUpperCase() === 'ALMERÍA'
    );

    // Guardamos en Firestore
    await db.collection('market').doc('fuel').set({
      lastUpdate: new Date().toISOString(),
      stations: almeria
    });

    console.log("✅ Hestia Sync: Datos actualizados correctamente");
  } catch (error) {
    console.error("❌ Error en la sincronización:", error);
    process.exit(1);
  }
}

syncFuel();
