const dataContainer = document.getElementById("dataContainer");
let allBreeds = [];
async function fetchData() {
    const res = await fetch("https://api.thedogapi.com/v1/breeds");
    const data = await res.json();
    allBreeds = data;  
    displayBreeds(allBreeds);  
    }

function displayBreeds(breeds) {
    dataContainer.innerHTML = "";
    breeds.forEach(dog => {
        dataContainer.innerHTML += `
            <div class="p-4 border border-gray-200 bg-blue-50 rounded-lg shadow-lg">
                <h3 class="text-xl font-bold">${dog.name}</h3>
                <p><strong>Origen:</strong> ${dog.origin || 'Desconocido'}</p>
                <p><strong>Peso:</strong> ${dog.weight.imperial} lbs / ${dog.weight.metric} kg</p>
                <p><strong>Altura:</strong> ${dog.height.imperial} in / ${dog.height.metric} cm</p>
            </div>`;
    });
}

function filterBreeds() {
    const searchQuery = document.getElementById("searchInput").value.toLowerCase();
    const filteredBreeds = allBreeds.filter(dog => dog.name.toLowerCase().includes(searchQuery));
    displayBreeds(filteredBreeds);
}

fetchData();