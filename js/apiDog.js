const dataContainer = document.getElementById("dataContainer")

async function fetchData() {
    const res = await fetch("https://api.thedogapi.com/v1/breeds");
    const data = await res.json();
    dataContainer.innerHTML = '<h1>Razas de los perritos:</h2>';

    data.forEach(dog => {
        dataContainer.innerHTML +=`
            <div class="p-4 border border-gray-200 bg-blue-50">
                <h3 class="text-xl font-bold">${dog.name}</h3>
                <p><strong>ID:</strong> ${dog.id}</p>
                <p><strong>Origen:</strong> ${dog.origin || 'Desconocido'}</p>
                <p><strong>Peso:</strong> ${dog.weight.imperial} lbs / ${dog.weight.metric} kg</p>
                <p><strong>Altura:</strong> ${dog.height.imperial} in / ${dog.height.metric} cm</p>
            </div>`;
    });
}

fetchData();