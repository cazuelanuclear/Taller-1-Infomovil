const dataContainer = document.getElementById("dataContainer");
var numPaginaActual = 1;
const paginaActual = document.getElementById("paginaActual");
const paginaAnterior = document.getElementById("paginaAnterior");
const paginaSiguiente = document.getElementById("paginaSiguiente");
const contenedorBotones = document.getElementById("contenedorBotones");
const randomBtn = document.getElementById("randomBtn");

async function fetchData() {
    var res = await fetch("https://catfact.ninja/facts?page="+numPaginaActual);
    var data = await res.json();
	dataContainer.innerHTML = "";
    data.data.forEach(cat => {
        dataContainer.innerHTML +=`
            <div class="p-4 border border-gray-200 bg-blue-50 rounded-lg shadow-lg">
                <h3 class="text-xl font-bold">Fact:</h3>
                <p>${cat.fact}</p>
            </div>`;
    });
}

function mostarBotones(){
	paginaAnterior.innerText = numPaginaActual - 1;
	paginaActual.innerText = numPaginaActual;
	paginaSiguiente.innerText = numPaginaActual + 1;
	
	if (numPaginaActual == 1){
		paginaAnterior.classList.add("hidden");
		paginaSiguiente.classList.remove("hidden");
	} else if (numPaginaActual == 34){
		paginaAnterior.classList.remove("hidden");
		paginaSiguiente.classList.add("hidden");
	} else {
		paginaAnterior.classList.remove("hidden");
		paginaSiguiente.classList.remove("hidden");
	}
}

async function showRandomFact() {
    const res = await fetch("https://catfact.ninja/fact");
    const data = await res.json();

    dataContainer.innerHTML = `
      <div class="p-4 border border-gray-200 bg-yellow-100 rounded-lg shadow-lg">
        <h3 class="text-xl font-bold mb-2">Random Fact:</h3>
        <p class="text-gray-700">${data.fact}</p>
      </div>
    `;
}

randomBtn.addEventListener('click', showRandomFact);

paginaSiguiente.addEventListener("click", () => {
    numPaginaActual += 1;
    fetchData();
    mostarBotones();
});

paginaAnterior.addEventListener("click", () => {
    numPaginaActual -= 1;
    fetchData();
    mostarBotones();
});

fetchData();