class ProductManager {
  constructor() {
    this.products = [];
    this.addId = 1;
  }

  addProduct(title, description, price, thumbnail, code, stock) {
    if (!title && !description && !price && !thumbnail && !code && !stock) {
      console.log("Debe llenar todos los campos!");
      return;
    }
    if (this.products.find((product) => product.code === code)) {
      console.log("Ya existe un producto con este código!");
      return;
    }

    const addProduct = {
      id: this.addId++,
      title,
      description,
      price,
      thumbnail,
      code,
      stock,
    };
    this.products.push(addProduct);
  }

  getProducts() {
    return this.products;
  }

  getProductById(id) {
    const product = this.products.find((product) => product.id === id);
    if (!product) {
      console.log("No se encontró el producto!");
    }
    return product;
  }
}

const productManager = new ProductManager();

productManager.addProduct("Peras", "amarillas", 20, "foto_peras.jpg", 1, 100);
productManager.addProduct("Uvas", "violetas", 25, "foto_uvas.jpg", 2, 150);
productManager.addProduct("Manzanas", "rojas", 18, "foto_manzanas.jpg", 3, 90);

console.log(productManager.getProducts());
