// Add your code here
function submitData(name, email) {
	return fetch("http://localhost:3000/users", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			Accept: "application/json",
		},
		body: JSON.stringify({
			name,
			email,
		}),
	})
		.then(function (response) {
			return response.json();
		})
		.then(function (object) {
			document.body.innerHTML = object["id"];
		})
		.catch(function (error) {
			document.body.innerHTML = error.message;
		});



    fetch("http://localhost:3000/users", config)
    .then(function(response){
        if(!response.ok){
            const error = new Error("Unauthorized Access");
            error.code = response.status;
            throw error;
        }
        return response.json();
    })
    .then(function (data) {
        const createdP = document.createElement('p');
        const body = document.body;
        createdP.textContent = `${data.id}`;
        body.appendChild(createdP);

    }).catch((error) => {
        const createdHeader = document.createElement('p');
        const body = document.body;
        createdHeader.textContent = error.error.message;
        body.appendChild(createdHeader);
    })
}
submitData('Jeff', 'jeffmokua18@gmail.com');