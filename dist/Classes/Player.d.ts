import Character from "./Abstracts/Character";
export type PlayerSkills = {
    strength: number;
    dexterity: number;
    constitution: number;
    intelligence: number;
    wisdom: number;
    charisma: number;
};
export default class Player extends Character {
    private readonly skills;
    private readonly armor;
    constructor(attributes: {
        name: string;
    }, skills: PlayerSkills);
    getExpecifiedSkill(skill: keyof PlayerSkills): number;
    getResumedSkills(): string;
    tryToHit(target: Player): boolean;
    attack(): number;
    heal(): number;
    private getInitialLife;
    private getCalculatedArmor;
}
