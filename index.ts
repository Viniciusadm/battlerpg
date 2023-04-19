import Player from "./src/Classes/Player";

const Kazuma = new Player({ name: 'Kazuma' }, { strength: 16, dexterity: 14, constitution: 13, intelligence: 10, wisdom: 8, charisma: 8 });

console.log(Kazuma.getResumedSkills());