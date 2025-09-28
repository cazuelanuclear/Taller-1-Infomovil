const dataContainer = document.getElementById('dataContainer');
const button = document.getElementById('refreshBtn');

async function fetchQuote() {
	try {
		const response = await fetch('https://api.kanye.rest');
		if (!response.ok) throw new Error('Error al obtener la frase');
		const data = await response.json();

		dataContainer.innerHTML = `
			<div>
				<p>${data.quote}</p>
			</div>
			`;
	} catch (error) {
		dataContainer.textContent = 'Ocurrió un error al obtener el chiste.';
		console.error(error);
	}
}

fetchQuote();
button.addEventListener('click', fetchQuote);
