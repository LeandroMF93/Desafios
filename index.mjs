// Importacion de la clase ProductManager
import ProductManager from "./productManager.mjs"
// Instancia de la clase ProductManager
const productManager = new ProductManager('DB.json')

// -----------------------------------------------------

async function main(){

    console.log('Test 1 (Obtener todos los productos) : ')
    let products = await productManager.getProducts()
    console.log(products)

    // Test 2 
    console.log('\n\nTest 2 (Agregar un producto al arreglo) : ')
    let testProduct = {
        title: "producto jaguar",
        description: "Este es un producto jaguar",
        price: 4000,
        thumbnail: "Sin imagen",
        code: "abc126",
        stock: 6
    }
    await productManager.addProduct(testProduct)
        // Intentar de nuevo deberia fallar ya que el code ya esta en otro producto

    console.log('\n\nTest 3 (Obtener producto por ID) : ')
    // Producto valido
    let product = await productManager.getProductById(1)
    console.log(product)
    // Producto invalido
    product = await productManager.getProductById(5)
    console.log(product)

    console.log('\n\nTest 4 (Modificar producto existente): ')
    // Producto valido
    product = {
        "title": "producto alfa",
        "description": "Este es un producto prueba modificado",
        "price": 1500,
        "thumbnail": "Sin imagen",
        "code": "abc123",
        "stock": 25,
        "id": 3
    }
    await productManager.updateProduct(product)
    // Producto invalido
    product = {
        "title": "producto alpa",
        "description": "Este es un producto prueba modificado",
        "price": 1200,
        "thumbnail": "Sin imagen",
        "code": "abc123",
        "stock": 25,
        "id": 33
    }
    await productManager.updateProduct(product)

    console.log('\n\nTest 5 (Borrar por ID): ')
    // Producto valido
    await productManager.deletebyId(4)
    // Producto invalido
    await productManager.deletebyId(4)
}
main()