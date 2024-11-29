const exponentiation = {
    base: null,
    calculatePower: function(Y) {
        return Math.pow(Y - 2, Y);
    }
};

document.getElementById('exponentForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const numberY = parseFloat(document.getElementById('numberY').value);

    const result = exponentiation.calculatePower(numberY);
    document.getElementById('result').textContent = `Результат: ${result}`;
});
