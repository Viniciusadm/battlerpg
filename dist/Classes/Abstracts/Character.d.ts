import Inventory from "./Inventory";
export type CharacterAttributes = {
    name: string;
    life: number;
    totalLife: number;
};
export default class Character extends Inventory {
    protected attributes: CharacterAttributes;
    constructor(attributes: {
        name: string;
    });
    getName(): string;
    getLife(): number;
    decreaseLife(amount: number): number;
    increaseLife(amount: number): number;
    setLifeInMax(): number;
    isAlive(): boolean;
    isDangerous(): boolean;
}
