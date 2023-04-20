type Dices = 4 | 6 | 8 | 10 | 12;
export type Spell = {
    name: string;
    energyCost: number;
    dices: Dices[];
    type: 'attack' | 'heal';
};
declare const addSpell: (spell: Spell) => void;
declare const getSpell: (name: string) => Spell | undefined;
export { addSpell, getSpell };
