module.exports = {
  // Nombre del servidor SQL al que nos vamos a conectar (en este caso, un nombre de máquina local)
  server: 'DESKTOP-AQD5UIO',

  // Nombre de la base de datos a la que queremos acceder
  database: 'tpfinalstreambe',

  // Usuario SQL Server que se utiliza para autenticarse
  user: 'roman',       // Usuario creado en el servidor SQL Server

  // Contraseña correspondiente al usuario SQL Server
  password: 'roman123',  // Contraseña del usuario 'roman'

  options: {
    // 'encrypt: false' indica que no estamos utilizando cifrado en la conexión
    encrypt: false,

    // 'trustServerCertificate: true' permite que se confíe en el certificado del servidor
    // Sin esta opción, si el servidor SQL tiene un certificado no verificado, la conexión fallaría
    trustServerCertificate: true,
  }
}

