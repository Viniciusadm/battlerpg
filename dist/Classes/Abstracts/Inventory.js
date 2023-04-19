export default class Inventory {
    constructor() {
        this.inventory = [];
    }
    addInventory(name, quantity) {
        const item = this.inventory.find(item => item.name === name);
        if (item) {
            item.quantity += quantity;
        }
        else {
            this.inventory.push({ name, quantity });
        }
    }
    removeInventory(name, quantity) {
        const item = this.inventory.find(item => item.name === name);
        if (item) {
            item.quantity -= quantity;
            return true;
        }
        return false;
    }
    getInventory() {
        return this.inventory;
    }
    getQuantity(name) {
        const item = this.inventory.find(item => item.name === name);
        if (item) {
            return item.quantity;
        }
        return 0;
    }
}
