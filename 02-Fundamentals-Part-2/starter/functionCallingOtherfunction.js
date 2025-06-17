function cutFruitPieces(fruit) {
    return fruit * 4;
}


function fruitPrecessor (apples, oranges) {

    // calling cutFruitPieces function inside the fruitPrecessor function
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);

    const juice = `juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange`;
    console.log(juice);
    return juice;
}
fruitPrecessor(6,8);