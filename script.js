let baseURL = "https://api.covid19api.com/country";
//https://api.covid19api.com/country/south-africa/status/confirmed?from=2020-03-01T00:00:00Z&to=2020-04-01T00:00:00Z
let url;

const search = document.querySelector('.search');
const startDate = document.querySelector('.start-date');
const endDate = document.querySelector('.end-date');
const submitButton = document.querySelector('.submit');
const searchForm = document.querySelector('form');
const resultContainer = document.getElementById('content');

searchForm.addEventListener('submit', fetchResults);
function fetchResults(e) {
    e.preventDefault();

    url = `${baseURL}/${search.value}/status/confirmed?from=${startDate.value}&to=${endDate.value}`;
    
    //console.log(`${baseURL}/${search.value}`)

    /*if (search.value !== '') {
        console.log(url.value)
        url += search.value;
        console.log('URL:', url);
    */

    fetch(url)
        .then(result => result.json())
        .then(json => {
            console.log(json);
            displayResults (json);
        })
        
}

function displayResults(total) {
    total.forEach(t => {
        let total = document.createElement('p');
        total.innerText = t.Cases;
        resultContainer.appendChild(total);
    
        /*while (resultContainer.firstChild) {
            resultContainer.removeChild;
        }*/

    })
}