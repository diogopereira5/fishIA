import { fishes } from "./models/fishes.js";
import { drawFish } from "./utils/drawFish.js";

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

ctx.fillStyle = "#84DFFF";
ctx.fillRect(0, 0, canvas.width, canvas.height);

drawFish(fishes, ctx);