function summerOutfit(input) {
   let degrees = Number(input[0]);
   let timeOfDay = input[1];
   let clothing = "";
   let shoes = "";

   switch(timeOfDay) {

    case "Morning":
        if (degrees >= 25) {
            clothing = "T-Shirt";
            shoes ="Sandals";
        }else if (degrees > 18){
            clothing = "Shirt";
            shoes = "Moccasins";

        }else if (degrees >= 10) {
            clothing = "Sweatshirt";
            shoes = "Sneakers"
        }
        break;
    case "Afternoon":
        if (degrees >= 25) {
            clothing = "Swim Suit";
            shoes ="Barefoot";

        }else if (degrees > 18){
            clothing = "T-Shirt";
            shoes ="Sandals";

        }else if (degrees >= 10) {
            clothing = "Shirt";
            shoes = "Moccasins";
        }

        break;
    case "Evening":
        if (degrees >= 25) {
            clothing = "Shirt";
            shoes = "Moccasins";
        }else if (degrees > 18){
            clothing = "Shirt";
            shoes = "Moccasins";

        }else if (degrees >= 10) {
            clothing = "Shirt";
            shoes = "Moccasins";
        }
        break;

   }
   console.log(`It's ${degrees} degrees, get your ${clothing} and ${shoes}.`)
}