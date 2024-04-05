tabUsers = [];

async function loadJSON() {
	try {
		const response = await fetch('data.json');
		const data = await response.json();
		tabUsers.push(data);

		return data;
	}
	catch(error) {
		console.error('erreur : ', error);
	}
}

function initializeApp() {
	loadJSON();
}

tabUsers.forEach(user => {
	console.log(user)
})

initializeApp();