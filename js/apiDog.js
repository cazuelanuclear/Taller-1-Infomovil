const fetchButton = document.getElementById("fetchApiDog");
const dataContainer = document.getElementById("dataContainer")

async function fetchData() {
    const res = await fetch("https://api.thedogapi.com/v1/breeds");
    const data = await res.json();
    dataContainer.innerHTML = '<h2>Resultados de la data:</h2>';

    data.forEach(dog => {
        dataContainer.innerHTML +=`
            <div class="p-4 border-b border-gray-200">
                <h3 class="text-xl font-bold">${dog.name}</h3>
                <p><strong>ID:</strong> ${dog.id}</p>
            </div>`;
    });
}

fetchButton.addEventListener('click', fetchData)