export function drawFish(fishes, ctx) {

    fishes.map((fish) => {

        if (fish.direction == 0) {
            fish.sizeBody = fish.sizeBody * -1;
        }

        ctx.beginPath();
        ctx.fillStyle = fish.colorBody;
        ctx.moveTo(fish.positonHeadX, fish.positonHeadY); //cabeça
        ctx.lineTo(fish.positonHeadX - fish.sizeBody, fish.positonHeadY - fish.sizeBody); //nadadeira cima
        ctx.lineTo(fish.positonHeadX - fish.sizeBody, fish.positonHeadY + fish.sizeBody); //nadadeira de baixo
        ctx.fill();

        ctx.beginPath();
        ctx.fillStyle = fish.colorTail;
        ctx.moveTo(fish.positonHeadX - fish.sizeBody, fish.positonHeadY);
        ctx.lineTo((fish.positonHeadX - fish.sizeBody) - (fish.sizeBody / 2), fish.positonHeadY - (fish.sizeBody / 2));
        ctx.lineTo((fish.positonHeadX - fish.sizeBody) - (fish.sizeBody / 2), fish.positonHeadY + (fish.sizeBody / 2));
        ctx.fill();
    })

}