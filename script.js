function getApiData(countryName) {
    fetch(`https://api.covid19api.com/live/country/${countryName}/status/confirmed`)
    .then(res => res.json())
    .then(data => {
    if (data == "") {
        document.getElementById('error').innerText = 'Enter The Correct Country Name';
    }
    else{
    const datas = data[67];
    document.getElementById('country-name').innerText = datas.Country;
    document.getElementById('cases').innerText = datas.Confirmed;
    document.getElementById('death').innerText = datas.Deaths;
    document.getElementById('recoverd').innerText = datas.CountryCode;
    document.getElementById('poster').style.display = "none";
    document.getElementById('subscribe').style.display = "block";
    }

})
}

document.getElementById('search-button').addEventListener('click', getInputData);

function getInputData() {
    const getValueFromInput = document.getElementById('input').value;
    const empty = '';
    if (getValueFromInput == empty) {
       document.getElementById('error').innerText = 'Enter The Correct Country Name';
    }
    else{
        document.getElementById('error').innerText = '';
        getApiData(getValueFromInput);
    }
}

