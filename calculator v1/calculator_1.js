const operationHistory = [];
let choice;

function calculate(a, b, sign) {
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
}

function printHistory(arr) {
	arr.forEach((el, index) => {
		console.log('Operacja nr ' + (index + 1) + ': ' + el);
	});
}

do {
	let val1 = Number(prompt('Podaj pierwszą liczbę'));
	let val2 = Number(prompt('Podaj drugą liczbę'));
	let operation = prompt('Podaj znak (+, -, *, /).');

	let result = calculate(val1, val2, operation);
	console.log(result);
	operationHistory.push(result);

	choice = prompt('Jak chcesz zakończyć wpisz N');
} while (choice !== 'N');

printHistory(operationHistory);
