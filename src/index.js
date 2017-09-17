module.exports = function zeros(expression) {
	var arrayString = expression.split("*");
	var numberString;
	var number;
	var countTwo = 0;
	var countFive = 0;

	for (var i = 0; i < arrayString.length; i++) {
		numberString = arrayString[i];
		number = parseInt(numberString);

		//ordinary factorial
		if (numberString[numberString.length-2] != "!") {
			for (var j = 1; j <= number; j++) {
				countTwo += countOfDivisors(j, 2);
				countFive += countOfDivisors(j, 5);
			}
		}

		//double factorial - odd
		else if (number % 2) {
			for (var j = 1; j <= number; j += 2) {
				countFive += countOfDivisors(j, 5);
			}
		}

		//double factorial - even
		else {
			for (var j = 2; j <= number; j += 2) {
				countTwo += countOfDivisors(j, 2);
				countFive += countOfDivisors(j, 5);
			}
		}
	}

	return Math.min(countTwo, countFive);
}

function countOfDivisors(numberTime, divisor) {
	var count = 0;
	while (!(numberTime % divisor)) {
		numberTime /= divisor;
		count++;
	}
	return count;
}
