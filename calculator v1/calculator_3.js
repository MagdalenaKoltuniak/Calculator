class Calculator {
	#operationHistory = [];

	calculate(a, b, sign) {
		if (isNaN(a) || isNaN(b)) return 'Niepoprawne wartości. Podaj liczbę.';

		switch (sign) {
			case '+':
				return `${a} + ${b} = ${a + b}`;
			case '-':
				return `${a} - ${b} = ${a - b}`;
			case '*':
				return `${a} * ${b} = ${a * b}`;
			case '/': {
				if (b === 0) return 'Nie można dzielić przez 0';
				return `${a} / ${b} = ${a / b}`;
			}
			default:
				return 'Nieobsługiwana operacja.';
		}
	}

	addToHistory(operation) {
		this.#operationHistory.push(operation);
	}

	printHistory() {
		this.#operationHistory.forEach((operation, index) => {
			console.log(`Operacja nr ${index + 1}: ${operation}`);
		});
	}

	run() {
		let choice;
		do {
			const val1 = Number(prompt('Podaj pierwszą liczbę'));
			const val2 = Number(prompt('Podaj drugą liczbę'));
			const operation = prompt('Podaj znak (+, -, *, /).');

			const result = this.calculate(val1, val2, operation);
			console.log(result);
			this.addToHistory(operation);

			choice = prompt('Jak chcesz zakończyć wpisz N');
		} while (choice !== 'N');

		this.printHistory();
	}
}

const calculator = new Calculator();
console.log(calculator);
calculator.run();
