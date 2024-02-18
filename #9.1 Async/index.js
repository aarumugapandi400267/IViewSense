const whereAmI = function (lat, lng) {
    fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`)
        .then(response => {
            if (!response.ok) throw new Error(`Problem with geocoding (${response.status})`);
            return response.json();
        })
        .then(data => {
            console.log(data);
            const city = data.city;
            const country = data.country;
            console.log(`You are in ${city}, ${country}`);
            return fetch(`https://restcountries.com/v3.1/name/${country}`);
        })
        .then(response => {
            if (!response.ok) throw new Error(`Country not found (${response.status})`);
            return response.json();
        })
        .then(data => {
            renderCountry(data[0]);
        })
        .catch(err => console.error(`Something went wrong: ${err.message}`));
};

whereAmI(52.508, 13.381); 
whereAmI(19.037, 72.873); 
whereAmI(-33.933, 18.474); 
