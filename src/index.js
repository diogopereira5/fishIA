import { generatePopulation, drawFish } from "./models/fishes.js";

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

const width = canvas.width;
const height = canvas.height;

ctx.fillStyle = "#84DFFF";
ctx.fillRect(0, 0, width, height);

const fishes = generatePopulation(10, width, height);

drawFish(fishes, ctx);