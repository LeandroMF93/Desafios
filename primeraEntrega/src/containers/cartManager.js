import {promises as fs} from "fs";
import ProductManager from "./productManager.js";

const productmanager = new productManager()

export default class cartManager {
  constructor() {
    this.path = './src/models/carts.txt'
  }
  async getCarts() {
    let respuesta = JSON.parse(await fs.readFile(this.path, 'utf-8'))
    return respuesta;
  }
  async createCart() {
    const cartDB = await this.getCarts()
    const id = cartDB.length > 0 ? cartDB[cartDB.length - 1].id + 1 : 1
    cartDB.push({ id: id, products: [] })
    await fs.writeFile(this.path, JSON.stringify(cartDB))
    return id
  }
  async getCartByID(id) {
    const cid = this.getCarts(id)
    const cartDB = await this.getCarts()
    const cartFound = cartDB.find((item) => item.id === cid)
    return cartFound ?? []
}
}