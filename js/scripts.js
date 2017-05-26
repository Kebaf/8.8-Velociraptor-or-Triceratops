var text = "Velociraptor is a genus of herbivorous ceratopsid dinosaur that first appeared during the late Maastrichtian stage of the late Cretaceous period.",
	dinosaur = "triceratops";

var dinosaurUpperCased = dinosaur.toUpperCase();
var dinosaurReplaced = text.replace('Velociraptor', dinosaurUpperCased);

console.log(dinosaurReplaced.substr(0, dinosaurReplaced.length/2));