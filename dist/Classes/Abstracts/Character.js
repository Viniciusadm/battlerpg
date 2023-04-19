import Inventory from "./Inventory";
export default class Character extends Inventory {
    constructor(attributes) {
        super();
        this.attributes = Object.assign(Object.assign({}, attributes), { life: 10, totalLife: 10 });
    }
    getName() {
        return this.attributes.name;
    }
    getLife() {
        if (!this.attributes.totalLife)
            return 0;
        return Number(this.attributes.life / this.attributes.totalLife * 100);
    }
    decreaseLife(amount) {
        this.attributes.life -= amount;
        return this.attributes.life;
    }
    increaseLife(amount) {
        this.attributes.life += amount;
        return this.attributes.life;
    }
    setLifeInMax() {
        this.attributes.life = this.attributes.totalLife;
        return this.attributes.life;
    }
    isAlive() {
        return this.attributes.life > 0;
    }
    isDangerous() {
        return this.attributes.life < (this.attributes.totalLife / 2);
    }
}
