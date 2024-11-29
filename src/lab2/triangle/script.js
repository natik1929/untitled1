document.getElementById('triangleForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const side1 = parseFloat(document.getElementById('side1').value);
    const side2 = parseFloat(document.getElementById('side2').value);
    const side3 = parseFloat(document.getElementById('side3').value);

    if (side1 <= 0 || side2 <= 0 || side3 <= 0) {
        alert('Длины сторон должны быть положительными числами.');
        return;
    }

    const result = checkTriangleExistence(side1, side2, side3);
    document.getElementById('result').textContent = result;
});

function checkTriangleExistence(a, b, c) {
    if (a + b > c && a + c > b && b + c > a) {
        return 'Треугольник существует';
    } else {
        return 'Треугольник не существует';
    }
}
