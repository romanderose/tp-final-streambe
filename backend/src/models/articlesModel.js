const { prisma } = require('../db/connection');

// Función asincrónica para obtener todos los artículos de la base de datos
async function getAllArticles() {
    const articles = await prisma.Articles.findMany()

    return articles
}

// Función asincrónica para obtener un artículo por su ID
async function getArticleById(id) {

    const article = await prisma.Articles.findUnique({
        where: {
            id: parseInt(id)
        }
    })

    return article
}

// Función asincrónica para buscar artículos por nombre o parte del nombre 
// (insensible a mayúsculas/minúsculas)
async function searchArticle(name_article) {
    const articles = await prisma.Articles.findMany({
        where: {
            name_article: {
                contains: name_article,  /* Busca coincidencias que contengan 
                el texto ingresado */
                mode: "insensitive"      // Ignora mayúsculas y minúsculas
            }
        }
    })

    return articles
}

// Función asincrónica para agregar un nuevo artículo a la base de datos
async function addArticle(name_article, price, image) {

    return await prisma.Articles.create({
        data: {
            name_article: name_article, // Nombre del artículo
            price: parseFloat(price),  //precio
            imageUrl: image ? `uploads/${image}` : null
        }
    })
}

// Función asincrónica para actualizar los datos de un artículo existente
async function updateArticle(id, name_article, price, image) {
    const article = await prisma.Articles.update({
        where: {
            id: parseInt(id) // Identificador del artículo a actualizar
        },
        data: {
            name_article: name_article, // Nuevo nombre
            price: price                // Nuevo precio
        }
    })

    return { mensaje: "Producto actualizado" }
}

// Función asincrónica para eliminar un artículo de la base de datos por su ID
async function deleteArticle(id) {
    const deletedArticle = await prisma.Articles.delete({
        where: {
            id: parseInt(id)  // Se asegura de que el ID sea un número entero
        }
    })

    return { mensaje: "Producto eliminado" }
}


// Exportamos las funciones para que puedan ser utilizadas desde otros módulos
module.exports = { getAllArticles, addArticle, 
updateArticle, getArticleById, searchArticle, deleteArticle };
