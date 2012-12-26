function sandwichMaker(magicIngredient) {
    function function(filling) {
        return magicIngredient + " and " + filling;
    };
}

var hamAnd = sandwichMaker("ham");
hamAnd("cheese");       // "ham and cheese"
hamAnd("mustard");      // "ham and mustard"

var turkeyAnd = sandwichMaker("turkey");
turkeyAnd("Swiss");     // "turkey and Swiss"
turkeyAnd("Provolone"); // "turkey and Provolone"
