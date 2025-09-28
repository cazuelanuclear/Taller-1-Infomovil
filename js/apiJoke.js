
    const dataContainer = document.getElementById('dataContainer');
    const button = document.getElementById('refreshBtn');

    async function fetchQuote() {
      try {
        const response = await fetch('https://v2.jokeapi.dev/joke/Any?lang=es&type=single');
        if (!response.ok) throw new Error('Error al obtener la frase');
        const data = await response.json();

        dataContainer.innerHTML = `
            <div class="p-4 border border-gray-200 bg-blue-50">
                <p><strong> ${data.joke} </p>
            </div>`;

      } catch (error) {
        dataContainer.innerHTML = `
	    <div class="p-4 border border-gray-200 bg-blue-50">
                <p><strong> ${data.joke} </p>
            </div>`;
        console.error(error);
      }
    }

    fetchQuote();

    button.addEventListener('click', fetchQuote);