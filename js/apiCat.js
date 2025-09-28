const dataContainer = document.getElementById("dataContainer");
const sortSelect = document.getElementById("sort");
const randomBtn = document.getElementById("randomBtn");

let facts = [];

async function fetchData() {
  const res = await fetch("https://catfact.ninja/facts?limit=300");
  const data = await res.json();
  facts = data.data;

  renderData();
}
function getRandomFacts(n) {
  const shuffled = [...facts].sort(() => 0.5 - Math.random()); // mezcla el array
  return shuffled.slice(0, n);
}

function renderData() {
  const value = sortSelect.value;

  let count;
  if (value === "all") count = facts.length;
  else if (value === "10") count = Math.min(10, facts.length);
  else if (value === "100") count = Math.min(100, facts.length);
  else count = facts.length;
  let randomFacts = [];
  if (value === "all") randomFacts = facts;
  else randomFacts = getRandomFacts(count);

  dataContainer.innerHTML = "";
  randomFacts.forEach((cat, index) => {
    dataContainer.innerHTML += `
      <div class="p-4 border border-gray-200 bg-blue-50 rounded shadow">
        <h3 class="text-xl font-bold mb-2">Fact #${index + 1}</h3>
        <p>${cat.fact}</p>
      </div>
    `;
  });
}

function showRandomFact() {
  if (facts.length === 0) return;
  const randomIndex = Math.floor(Math.random() * facts.length);
  const cat = facts[randomIndex];

  dataContainer.innerHTML = `
    <div class="p-4 border border-gray-200 bg-yellow-100 rounded shadow">
      <h3 class="text-xl font-bold mb-2">Random Fact:</h3>
      <p>${cat.fact}</p>
    </div>
  `;
}

sortSelect.addEventListener("change", renderData);
randomBtn.addEventListener("click", showRandomFact);

fetchData();