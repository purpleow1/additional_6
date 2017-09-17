module.exports = function zeros(expression) {
	var arrayString = expression.split("*");
	var numberString;
	var number;
	var numberTime;
	var countTwo = 0;
	var countFive = 0;

	for (var i = 0; i < arrayString.length; i++) {
		numberString = arrayString[i];
		number = parseInt(numberString);

		//ordinary factorial
		if (numberString[numberString.length-2] != "!") {
			for (var j = 1; j <= number; j++) {
				numberTime = j;
				while (!(numberTime % 2)) {
					numberTime /= 2;
					countTwo++;
				}
				while (!(numberTime % 5)) {
					numberTime /= 5;
					countFive++;
				}
			}
		}

		//double factorial - odd
		else if (number % 2) {
			for (var j = 1; j <= number; j += 2) {
				numberTime = j;
				while (!(numberTime % 5)) {
					numberTime /= 5;
					countFive++;
				}
			}
		}

		//double factorial - even
		else {
			for (var j = 2; j <= number; j += 2) {
				numberTime = j;
				while (!(numberTime % 2)) {
					numberTime /= 2;
					countTwo++;
				}
				while (!(numberTime % 5)) {
					numberTime /= 5;
					countFive++;
				}
			}
		}
	}

	return Math.min(countTwo, countFive);
}
