// Importamos PrismaClient desde el paquete @prisma/client
const { PrismaClient } = require('@prisma/client');

// Creamos una instancia única de PrismaClient para interactuar con la base de datos
const prisma = new PrismaClient();

const Connection = async () => {
  try {
    console.log('Conectando a la base de datos mediante Prisma...');
    
    // Verificamos la conexión realizando una simple consulta
    await prisma.$queryRaw`SELECT 1`;
    
    console.log('✅ ¡Conectado correctamente a la base de datos con Prisma!');
  } catch (error) {
    console.error('❌ Error al conectar con la base de datos:', error);
    throw error; // Propagamos el error para manejarlo en la capa superior
  }
};

/*
 * prisma      → instancia principal para realizar consultas en los modelos.
 * Connection  → función opcional para probar o inicializar la conexión.
*/
module.exports = { prisma, Connection };
