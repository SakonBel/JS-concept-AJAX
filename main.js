const showCountries = document.querySelector(".show-countries");
console.log(showCountries);

showCountries.addEventListener("click", () => {
  const xhr = new XMLHttpRequest();

  // Initialize the request
  xhr.open("GET", "https://restcountries.com/v3.1/all", true);

  // Set method to handle response before sending.
  xhr.onload = function () {
    if (xhr.status == 200) {
      // We got JSON objects as response so we need to use JSON.parse to turn it to JS object.
      const countries = JSON.parse(this.response);
      console.log("Success");
      console.log(countries);
      countries.forEach((country) => {
        const countryCard = document.createElement("div");
        const countryCardImage = document.createElement("img");
        countryCard.innerHTML = country.name.common;
        countryCardImage.src = country.flags.svg;
        countryCard.className = "country-card";
        countryCardImage.width = "150";
        document.querySelector(".feed").appendChild(countryCard);
        document.querySelector(".feed").appendChild(countryCardImage);
      });
    }
  };

  // Send the request
  xhr.send();
});
