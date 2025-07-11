class Calculator {
	//abstract
	run() {
		console.log('NOT IMPLEMENTED, ANY CLASS MUST IMPLEMENT run()');
	}

	calculate(a, b, sign) {
		console.log('NOT IMPLEMENTED, ANY CLASS MUST IMPLEMENT calculate(a, b, sign)');
	}

	addToHistory(operation) {
		console.log('NOT IMPLEMENTED, ANY CLASS MUST IMPLEMENT addToHistory(operation)');
	}

	printHistory() {
		console.log('NOT IMPLEMENTED, ANY CLASS MUST IMPLEMENT printHistory()');
	}
}

class DecimalCalculator extends Calculator {
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

class BinaryCalculator extends Calculator {
	#operationHistory = [];

	calculate(a, b, sign) {
		const aDec = this.bin2dec(a);
		const bDec = this.bin2dec(b);

		if (isNaN(a) || isNaN(b)) return 'Niepoprawne wartości. Podaj liczbę.';

		switch (sign) {
			case '+':
				return `${a} + ${b} = ${this.dec2bin(aDec + bDec)}`;
			case '-':
				return `${a} - ${b} = ${this.dec2bin(aDec - bDec)}`;
			case '*':
				return `${a} * ${b} = ${this.dec2bin(aDec * bDec)}`;
			case '/': {
				if (bDec === 0) return 'Nie można dzielić przez 0';
				return `${a} / ${b} = ${this.dec2bin(aDec / bDec)}`;
			}
			default:
				return 'Nieobsługiwana operacja.';
		}
	}

	bin2dec(val) {
		return parseInt(val, 2);
	}

	dec2bin(val) {
		return val.toString(2);
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
			const val1 = prompt('Podaj pierwszą liczbę w systemie dwójkowym');
			const val2 = prompt('Podaj drugą liczbę w systemie dwójkowym');
			const operation = prompt('Podaj znak (+, -, *, /).');

			const result = this.calculate(val1, val2, operation);
			console.log(result);
			this.addToHistory(operation);

			choice = prompt('Jak chcesz zakończyć wpisz N');
		} while (choice !== 'N');

		this.printHistory();
	}
}

const decimalCalculator = new DecimalCalculator();
// decimalCalculator.run();

const binaryCalculator = new BinaryCalculator();
binaryCalculator.run();
