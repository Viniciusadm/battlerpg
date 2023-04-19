type Increments = number | number[];
type roll = {
    value: number;
    dice: number;
    increment: number;
};
export default class Dice {
    private readonly sides;
    constructor(sides: number);
    roll(increments?: Increments, min?: number | undefined): roll;
}
export {};
