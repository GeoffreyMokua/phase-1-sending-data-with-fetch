// Add your code here
function submitData(name, email){
    console.log("here")
    const config = {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            'Accept': 'application/json',

        },
        body: JSON.stringify({
            name: "Steve",
            email: "steve@steve.com",
        }),
    };


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