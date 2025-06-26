function Calculator() {
	this.operationHistory = [];
}

Calculator.prototype.calculate = function (a, b, sign) {
	if (isNaN(a) || isNaN(b)) return 'Niepoprawne wartości. Podaj liczbę.';
	switch (sign) {
		case '+':
			return a + ' + ' + b + ' = ' + (a + b);
		case '-':
			return a + ' - ' + b + ' = ' + (a - b);
		case '*':
			return a + ' * ' + b + ' = ' + a * b;
		case '/': {
			if (b === 0) return 'Nie można dzielić przez 0';
			return a + ' / ' + b + ' = ' + a / b;
		}
		default:
			return 'Nieobsługiwana operacja.';
	}
};

Calculator.prototype.addToHistory = function (operation) {
	this.operationHistory.push(operation);
};

Calculator.prototype.printHistory = function () {
	this.operationHistory.forEach((operation, index) => {
		console.log('Operacja nr ' + (index + 1) + ': ' + operation);
	});
};

Calculator.prototype.run = function () {
	do {
		var val1 = Number(prompt('Podaj pierwszą liczbę'));
		var val2 = Number(prompt('Podaj drugą liczbę'));
		var operation = prompt('Podaj znak (+, -, *, /).');

		var result = this.calculate(val1, val2, operation);
		console.log(result);
		this.addToHistory(operation);

		var choice = prompt('Jak chcesz zakończyć wpisz N');
	} while (choice !== 'N');

	this.printHistory();
};

var calculator = new Calculator();
calculator.run();

// var calculator2 = new Calculator();
// calculator2.run();
