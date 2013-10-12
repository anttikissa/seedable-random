var seed = 0.5;

function random() {
	return seed;
}

random.seed = function(newSeed) {
	seed = newSeed;
}

module.exports = random;

