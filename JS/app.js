const inputButton = () => {
    document.getElementById('show-display').innerHTML = ''
    const inputField = document.getElementById('input-field')
    const inputvalue = inputField.value;

    const url = `https://openapi.programming-hero.com/api/phones?search=${inputvalue}`
    fetch(url)
        .then(res => res.json())
        .then(data => showDisplay(data.data))
}
inputButton();

const showDisplay = phones => {
    // console.log(phones)

    for (const phone of phones) {
        // console.log(phone)
        let parent = document.getElementById('show-display')
        let div = document.createElement("div");
        div.classList.add('col')
        div.innerHTML = `

                    <div class="card">
                        <img src="${phone.image}" class="card-img-top img-fluid w-100 p-3" alt="...">
                        <div class="card-body">
                            <h5 class="card-title text-info">Brand : ${phone.brand}</h5>
                             <h3 class="card-title">Name : ${phone.phone_name}</h3>
                            <button  onclick="details('${phone.slug}')" class="btn btn-primary">See Details</button>
                        </div>
                    </div>


        `
        parent.appendChild(div);

    }
}

const details = (id) => {
    document.getElementById('search-id').innerHTML = ''
    const url = `https://openapi.programming-hero.com/api/phone/${id}`;
    fetch(url)
        .then((response) => response.json())
        .then((data) => showDetails(data.data));
};
const showDetails = phone => {
    console.log(phone)

    const phoneDetails = document.getElementById('search-id')
    const div = document.createElement('div')
    div.classList.add('col')
    div.innerHTML = `
        <div class="card mb-3">
        <div class="card-body">
        <img src="${phone.image}" class="card-img-top img-fluid w-100 mx-auto p-3" alt="...">
        <p class="card-title">Id : <span class="text-info">  ${phone.slug}</span></p>
        <p class="card-title">Stroage : <span class="text-info">  ${phone.mainFeatures.storage}</span></p>
        <p class="card-title">DisplaySize : <span class="text-info">  ${phone.mainFeatures.displaySize}</span></p>
        <p class="card-title">Memory : <span class="text-info">  ${phone.mainFeatures.memory}</span></p>
        <p  class="card-title">Release Date :  <span class="text-info">${phone.releaseDate}</span></p>
      
        </div>
        </div>
        
        `
    phoneDetails.appendChild(div)

}