# Seedable pseudorandom number generator

- Works as a drop-in for `Math.random`

- Relatively fast (about 2.5 times slower than `Math.random` on my machine)

- Seeds itself from the clock by default

- Tries to be pretty random

## Usage

	var random = require('seedable-random');

	random.seed(123);
	console.log(random());

## As a `Math.random` replacement

	Math.random = require('seedable-random');

