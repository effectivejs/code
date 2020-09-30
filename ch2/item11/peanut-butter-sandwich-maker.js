//making a peanut butter sandwich simply by using function
function sandwichMaker() {
    //creating a variable magicIngredient and take a requaired string 
    var magicIngredient = "peanut butter";
    function make(filling) {
        return magicIngredient + " and " + filling;
    }
    return make;
}
var f = sandwichMaker();
f("jelly");        // "peanut butter and jelly"
f("bananas");      // "peanut butter and bananas"
f("marshmallows"); // "peanut butter and marshmallows"
