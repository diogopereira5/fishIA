function createFish(width, height) {

    //Math.floor(Math.random() * (max - min + 1) + min)
    var size = Math.round(Math.random() * (20 - 10 + 1) + 10);

    var RBody = Math.round(Math.random() * 254);
    var GBody = Math.round(Math.random() * 254);
    var BBody = Math.round(Math.random() * 254);
    var RTail = Math.round(Math.random() * 254);
    var GTail = Math.round(Math.random() * 254);
    var BTail = Math.round(Math.random() * 254);

    var fish = {
        positonHeadX: Math.round(Math.random() * ((width - (size * 2)) - size + 1) + size),
        positonHeadY: Math.round(Math.random() * ((height - (size * 2)) - size + 1) + size),
        sizeBody: size,
        colorBody: `rgba(${RBody}, ${GBody}, ${BBody},1)`,
        colorTail: `rgba(${RTail}, ${GTail}, ${BTail},1)`,
        speed: Math.round(Math.random() * 10),
        direction: Math.round(Math.random())
    }

    return fish;
}

export function generatePopulation(sizePopulation, width, height) {

    var fishes = [];

    for (let i = 0; i < sizePopulation; i++) {

        fishes.push(createFish(width, height));

    }

    return fishes;
}

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
        ctx.stroke();
        ctx.fill();

        ctx.beginPath();
        ctx.fillStyle = fish.colorTail;
        ctx.moveTo(fish.positonHeadX - fish.sizeBody, fish.positonHeadY);
        ctx.lineTo((fish.positonHeadX - fish.sizeBody) - (fish.sizeBody / 2), fish.positonHeadY - (fish.sizeBody / 2));
        ctx.lineTo((fish.positonHeadX - fish.sizeBody) - (fish.sizeBody / 2), fish.positonHeadY + (fish.sizeBody / 2));
        ctx.stroke();
        ctx.fill();
    })

}