"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.d100 = exports.d20 = exports.d12 = exports.d10 = exports.d8 = exports.d6 = exports.d4 = void 0;
const Dice_1 = require("../Classes/Dice");
exports.d4 = new Dice_1.default(4);
exports.d6 = new Dice_1.default(6);
exports.d8 = new Dice_1.default(8);
exports.d10 = new Dice_1.default(10);
exports.d12 = new Dice_1.default(12);
exports.d20 = new Dice_1.default(20);
exports.d100 = new Dice_1.default(100);
