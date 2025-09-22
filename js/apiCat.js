const dataContainer = document.getElementById("dataContainer")

async function fetchData() {
    var res = await fetch("https://catfact.ninja/facts");
    var data = await res.json();

    data.data.forEach(cat => {
        dataContainer.innerHTML +=`
            <div class="p-4 border border-gray-200 bg-blue-50">
                <h3 class="text-xl font-bold">Fact:</h3>
                <p><strong>ID:</strong> ${cat.fact}</p>
            </div>`;
    });


    res = await fetch("https://catfact.ninja/facts?page=2");
    data = await res.json();

    data.data.forEach(cat => {
        dataContainer.innerHTML +=`
            <div class="p-4 border border-gray-200 bg-blue-50">
                <h3 class="text-xl font-bold">Fact:</h3>
                <p><strong>ID:</strong> ${cat.fact}</p>
            </div>`;
    });


}

fetchData();