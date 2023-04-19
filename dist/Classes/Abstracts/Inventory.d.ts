export type InventoryItems = {
    name: string;
    quantity: number;
};
export default class Inventory {
    private inventory;
    addInventory(name: string, quantity: number): void;
    removeInventory(name: string, quantity: number): boolean;
    getInventory(): InventoryItems[];
    getQuantity(name: string): number;
}
