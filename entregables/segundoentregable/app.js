const fs = require("fs").promises;

class ProductManager {
  constructor() {
    this.productsFile = "entregables/segundoentregable/DB.json";
    this.products = [];
  }

  //load
  async uploadProducts() {
    try {
      const data = await fs.readFile(this.productsFile, "utf8");
      return JSON.parse(data);
    } catch (error) {
      if (error.code === "ENOENT") {
        return [];
      } else {
        throw error;
      }
    }
  }

  //add
  async addFile(product) {
    try {
      let products = await this.products();
      products.push(product);
      await fs.writeFile(this.productsFile, JSON.stringify(products, null, 2));
      console.log("Producto agregado correctamente");
    } catch (error) {
      console.log("Error al agregar el producto", error);
    }
  }

  addProduct (title, description, price, thumbnail, code, stock){
    if (!title && !description && !price && !thumbnail && !code && !stock){
        console.log("Debe ingresar todos los campos")
        return
    }
    if(this.products.find((product) => product.code === code)){
        console.log("El producto ya existe")
        return
    }

    const id = this.products++
    const product = {
        id,
        title,
        description,
        price,
        thumbnail,
        code,
        stock
    }
    this.products.push(product)
  }
  //consult
  async consProduct() {
    try{
        return await this.products()
    } catch(error){
        console.log("Error al consultar producto")
        return []
    }
  }

  getProducts(){
    return this.products
  }

  getProductsById(){
    const product =  this.products.find((prod) => prod.id === id)
    if(!product){
        console.log("No se encontró el producto segun el ID indicado")
    } return product
  }

  //mod
  async modProduct(id, prudctMod) {
    const indexProd = this.products.findIndex((product) => product.id === id)

    if(!indexProd){
        console.error("No se encontro el producto por ID")
        return
    }

    const dataExtra = ""
    try{
        fs.appendFile('productsFile.json', dataExtra)
        console.log("Se ha agregado correctamente")
    } catch(error){
        console.log("Hubo un problema al actualizar", error)
    }
  }

  //delete
  async delProduct() {}

}
