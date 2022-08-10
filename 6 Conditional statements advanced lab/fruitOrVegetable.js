function fruitOrVegatable(input) {

    let fruitVegetable = input[0];
    let word = "";
    switch(fruitVegetable) {
        case "banana":
        case "apple":
        case "kiwi":
        case "cherry":
        case "lemon":
        case "grapes":
           word = "fruit";
            break;
        case "tomato":
        case "cucumber":
        case "pepper":
        case "carrot":
            word = "vegetable";
            break;
        default:
            word = "unknown";
            break;
    }
    console.log(word)
}
fruitOrVegatable(["banana"])