const carsSelect = document.getElementById('carSelect');

const getCar = async () => {
    try {
        const response = await fetch('cars.json');
        if (!response.ok) {
            throw new Error('Ошибка сети');
        }
        const data = await response.json();
        carSelect(data.cars);
    } catch (error) {
        console.error('Ошибка получения данных:', error);
    }
}

const carSelect = (cars) => {
    
    cars.forEach(car => {
        const option = document.createElement('option');
        option.value = car.brand;
        option.textContent = `${car.brand} ${car.model}`;
        option.dataset.model = car.model;
        option.dataset.price = car.price;
        carsSelect.appendChild(option);
    });
}

carsSelect.addEventListener('change', function() {
    const selectedOption = this.options[this.selectedIndex];
    const carDetails = document.getElementById('carDetails');
    const carPrice = document.getElementById('carPrice');
    if (selectedOption.value) {
        const model = selectedOption.dataset.model;
        const price = selectedOption.dataset.price;
        carDetails.textContent = `Тачка ${selectedOption.value} ${model}`;
        carPrice.textContent = `Цена: ${price}$`;
    } else {
        carDetails.textContent = '';
        carPrice.textContent = '';
    }
});

getCar();
