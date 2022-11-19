

async function getDog() {
    const response = await axios.get("https://dog.ceo/api/breeds/image/random");
    console.log(response.data)
    const img = document.querySelector("#dog");
    img.src = response.data.message;
}

async function getDogByBreed(breed){
    try{
        breed = document.getElementById("breed").value
        const response = await axios.get(`https://dog.ceo/api/breed/${breed}/images/random`);
        console.log(response.data)
        const img = document.querySelector("#dog");
        img.src = response.data.message;
    }
    catch(e){
        alert("breed not found!");
        getDog();
    }
}

// function renderList(places){
//     const ul = document.querySelector("#ghibspots")
//     for (let place of places) {
//         const newLI = document.createElement("LI");
//         newLI.classList.toggle("mild");
//         newLI.innerHTML = `In <b>${place.name} </b> it is ${place.climate}.`;
//         ul.append(newLI)
//     }

// }

const btn = document.querySelector("#puptime")
btn.addEventListener("click",getDogByBreed)


// async function getData() {
//     const response = await axios.get("https://ghibliapi.herokuapp.com/locations/");
//     for (let place of response.data) {console.log(place.name)}
//     const {name,climate,residents} = response.data; //destructure the response to variables
//     console.log(response);
//     // for (let place of name) {console.log(place)}
//     const res2 = await axios.get(response.data[1].residents[1]) //gets the second resident in the second place
//     console.log(res2) // logs the object of the data about the first person
// }