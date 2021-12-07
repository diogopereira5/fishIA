const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

ctx.fillStyle = "#84DFFF";
ctx.fillRect(0, 0, canvas.width, canvas.height);

fishes = [
    {
        positonHeadX: 350,
        positonHeadY: 300,
        sizeBody: 50,
        colorBody: "red",
        colorTail: "red",
        speed: 10,
    },
    {
        positonHeadX: 150,
        positonHeadY: 150,
        sizeBody: 35,
        colorBody: "blue",
        colorTail: "blue",
        speed: 10,
    },
    {
        positonHeadX: 450,
        positonHeadY: 123,
        sizeBody: 35,
        colorBody: "orange",
        colorTail: "yellow",
        speed: 10,
    }
];

function drawFish(fishes) {

    fishes.map((fish) => {
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

drawFish(fishes);