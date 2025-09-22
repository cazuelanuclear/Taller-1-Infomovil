const dataContainer = document.getElementById("dataContainer")

async function fetchData() {
    const res = await fetch("https://catfact.ninja/facts?limit=1&max_length=140");
    const data = await res.json();
    dataContainer.innerHTML = '<h1>Curiosidades de los gatitos:</h2>';

    data.forEach(cat => {
        dataContainer.innerHTML +=`
            <div class="p-4 border border-gray-200 bg-blue-50">

            </div>`;
    });
}

fetchData();