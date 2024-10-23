//your JS code here. If required.
const formGroup = document.querySelector(".form-group");

//const books = [];

formGroup.addEventListener("submit", e => {
	e.preventDefault();
	const title = document.querySelector("#title");
	const author = document.querySelector("#author");
	const isbn = document.querySelector("#isbn");

	/*
	books.push({
		title: title.value, 
		author: author.value, 
		isbn: isbn.value
	});
	console.log(books);
	*/

	const tr = document.createElement("tr");
	const td1 = document.createElement("td");
	td1.innerText= title.value;
	const td2 = document.createElement("td");
	td2.innerText= author.value;
	const td3 = document.createElement("td");
	td3.innerText= isbn.value;
	const td4 = document.createElement("td");
	td4.innerHTML = "<button onclick='deleteRow(event)'>X</button>";

	tr.append(td1, td2, td3, td4);
	const tbody = document.querySelector(".table tbody");
	tbody.append(tr);

	title.value= "";
	author.value= "";
	isbn.value= "";
})

function deleteRow(e) {
	e.target.parentElement.parentElement.remove();
}


