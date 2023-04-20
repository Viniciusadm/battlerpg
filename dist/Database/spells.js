const spells = [];
const addSpell = (spell) => {
    spells.push(spell);
};
const getSpell = (name) => {
    return spells.find(spell => spell.name === name);
};
export { addSpell, getSpell };
