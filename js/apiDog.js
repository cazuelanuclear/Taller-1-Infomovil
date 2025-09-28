const dataContainer = document.getElementById("dataContainer");
const searchInput = document.getElementById("search");
const sortSelect = document.getElementById("sort");

let data = [];
let filteredData = [];

async function fetchData() {
  const res = await fetch("https://api.thedogapi.com/v1/breeds");
  data = await res.json();
  applyFilters();
}

function applyFilters() {
  const searchValue = searchInput.value.toLowerCase();
  const sortValue = sortSelect.value;

  filteredData = data.filter(dog => dog.name.toLowerCase().includes(searchValue));

  if (sortValue) {
    const [key, order] = sortValue.split("-");
    filteredData.sort((a, b) => {
      let valA, valB;
      if (key === "weight") {
        valA = parseInt(a.weight.metric.split(" - ")[0]) || 0;
        valB = parseInt(b.weight.metric.split(" - ")[0]) || 0;
      } else {
        valA = a[key].toLowerCase();
        valB = b[key].toLowerCase();
      }
      if (valA < valB) return order === "asc" ? -1 : 1;
      if (valA > valB) return order === "asc" ? 1 : -1;
      return 0;
    });
  }

  renderData();
}

function renderData() {
  dataContainer.innerHTML = "";
  filteredData.forEach(dog => {
    dataContainer.innerHTML += `
      <div class="p-4 border border-gray-200 bg-blue-50">
        <h3 class="text-xl font-bold">${dog.name}</h3>
        <p><strong>ID:</strong> ${dog.id}</p>
        <p><strong>Origen:</strong> ${dog.origin || 'Desconocido'}</p>
        <p><strong>Peso:</strong> ${dog.weight.imperial} lbs / ${dog.weight.metric} kg</p>
        <p><strong>Altura:</strong> ${dog.height.imperial} in / ${dog.height.metric} cm</p>
      </div>`;
  });
}

searchInput.addEventListener("input", applyFilters);
sortSelect.addEventListener("change", applyFilters);

fetchData();