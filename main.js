class ProductManager {
    constructor () {
        this.producto =[]
    }

    static id = 0

    addProduct (nombre, descripcion, precio, imagen, codigo, stock) {
        for (let i = 0; i < this.producto.length; i++){
            if (this.producto[i].code === code) {
                console.log('El codigo ${code} esta repetido');
                break;
            }
        }

        const neWPrduct = {
            nombre,
            descripcion,
            precio,
            imagen,
            codigo,
            stock,
        };

        if (!Object.values(neWPrduct).includes(undefined)){
            ProductManager.id++;
            this.producto.push({
                ...newProduct,
                id: ProductManager.id,
            });
        } else {
            console.log("Todos los campos son requeridos");
        }
    }

    getProduct(){
        return this.Producto;
    }

    existe(id){
        return this.producto.find((productos) => productos.id === id);
    }

    getProductById(id){
        !this.existe(id) ? console.log("No encontrado") : console.log(this.existe(id));
    }
}

const productos = new ProductManager
console.log(productos.getProduct());

productos.addProduct('titulo1', 'descripcion1', 1000, 'imagen1', "qwe123", 12);
productos.addProduct('titulo2', 'descripcion2', 4000, 'imagen2', "qwe124", 8);
productos.addProduct('titulo3', 'descripcion3', 3500, 'imagen3', "qwe125", 19);

//validacion de codigo repetido
productos.addProduct('titulo3', 'descripcion3', 3500, 'imagen3', "qwe125", 19)

//busqueda por id
productos.getProductById(1);