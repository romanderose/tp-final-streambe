const sql = require('mssql');
const dbConfig = require('../config/dbConfig');

// Definir pool fuera de la función para que sea accesible globalmente
let pool;

// Función asincrónica para conectar a la base de datos
const Connection = async () => {
  try {
    console.log('Conectando a SQL Server...');

    // Intentamos conectar usando la configuración de la base de datos
    pool = await sql.connect(dbConfig);

    console.log('✅ ¡Conectado a la base de datos correctamente!', {
      server: dbConfig.server,
      database: dbConfig.database,
      instanceName: dbConfig.instanceName,
      port: dbConfig.port
    });

    console.log('⚾ Pool de conexión creado.');

    // Realizamos una consulta simple para probar la conexión
    const result = await pool.request().query('SELECT 1 as test');
    
    console.log("⚙ Query de prueba exitosa: ", result.recordset);

    // Retorna el pool para usarlo en otros lugares
    return pool;
  } catch (error) {
    console.error('❌ Error al conectar:', error);
    throw error;  // Lanzamos el error para que se maneje en el controlador o en otro lugar
  }
};

// Exportar sql y Connection para que estén disponibles en otros módulos
module.exports = { sql, Connection };
