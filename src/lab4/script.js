document.addEventListener("DOMContentLoaded", () => {
    // Загрузка данных (можно заменить на fetch для получения с сервера)
    const data = [
        { id: 1, name: "Продукт A", price: 100, rating: 4.5 },
        { id: 2, name: "Продукт B", price: 200, rating: 3.9 },
        { id: 3, name: "Продукт C", price: 150, rating: 4.8 }
    ];

    const container = document.getElementById("dataContainer");
    const sortField = document.getElementById("sortField");
    const sortAsc = document.getElementById("sortAsc");
    const sortDesc = document.getElementById("sortDesc");

    // Функция для отображения данных в виде таблицы
    function renderTable(data) {
        container.innerHTML = `
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Название</th>
                        <th>Цена</th>
                        <th>Рейтинг</th>
                    </tr>
                </thead>
                <tbody>
                    ${data.map(item => `
                        <tr>
                            <td>${item.id}</td>
                            <td>${item.name}</td>
                            <td>${item.price}</td>
                            <td>${item.rating}</td>
                        </tr>
                    `).join('')}
                </tbody>
            </table>
        `;
    }

    // Функция для сортировки данных
    function sortData(field, direction = "asc") {
        const sorted = [...data].sort((a, b) => {
            if (a[field] > b[field]) return direction === "asc" ? 1 : -1;
            if (a[field] < b[field]) return direction === "asc" ? -1 : 1;
            return 0;
        });
        renderTable(sorted);
    }

    // Слушатели событий
    sortAsc.addEventListener("click", () => {
        sortData(sortField.value, "asc");
    });

    sortDesc.addEventListener("click", () => {
        sortData(sortField.value, "desc");
    });

    // Первоначальное отображение
    renderTable(data);
});
