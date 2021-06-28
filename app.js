const main = document.querySelector("main");
const leftSide = document.querySelector(".left-side");
const rightSide = document.querySelector(".right-side");
const loader = document.querySelector(".loader");
const countryDropBox = document.querySelector("#countryDropBox");
const navbar = document.querySelector(".nav-bar ul");
const chips = document.querySelectorAll(".chip");
const myCanvas = document.querySelector("#myCanvas");
const recoveredChip = document.querySelector("#recoveredChip");
const provinceDropDown = document.querySelector("#provinceDropDown");
const provinceDetails = document.querySelector("#provinceDetails");
const section02 = document.querySelector("#section02");

const formatter = new Intl.NumberFormat("en").format;

//For graph
let myGraph;
let dates;
let regularCases;
let regularRecovered;
let regularDeaths;

let date = new Date();

let yesterday = date.getDate() - 3;
let today = date.getDate() - 2;
let month = date.getMonth() + 1;
let year = date.getFullYear().toString().slice(2);
let dateFormatted = `${month}/${today}/${year}`;
let yesterdayDateFormatted = `${month}/${yesterday}/${year}`;
let dateFormattedState = `${date.getFullYear()}-${month}-${today}`;

let currentCountry;

fetchCovidData();
fetchStateData();
fetchVaccineData();

//Fetch vaccine data
async function fetchVaccineData() {
  try {
    const response = await fetch("https://api.covid19india.org/data.json");
    const vaccineData = await response.json();
    const lastData = vaccineData.tested[vaccineData.tested.length - 1];
    section02.innerHTML = `
      <h3>Vaccine data</h3>
      <hr/>
      <br/>
      <p><b>Daily RTPCR samples collected ICMR Application:</b>${lastData.dailyrtpcrsamplescollectedicmrapplication}</p>
      <p><b>First dose administered:</b>${lastData.firstdoseadministered}</p>
      <p><b>Registration 18-45 years:</b>${lastData["registration18-45years"]}</p>
      <p><b>Registration above 45 years:</b>${lastData.registrationabove45years}</p>
      <p><b>Sample reported today:</b>${lastData.samplereportedtoday}</p>
      <p><b>Second dose administered:</b>${lastData.seconddoseadministered}</p>
      <p><b>Source 1:</b><a href=${lastData.source}>${lastData.source}</a></p>
      <p><b>Source 2:</b><a href=${lastData.source4}>${lastData.source4}</a></p>
      <p><b>Total doses administered:</b>${lastData.totaldosesadministered}</p>
      <p><b>Total individuals registered:</b>${lastData.totalindividualsregistered}</p>
      <p><b>Total individuals vaccinated:</b>${lastData.totalindividualsvaccinated}</p>
      <p><b>Total samples tested:</b>${lastData.totalsamplestested}</p>
    `;
  } catch (error) {
    console.log(error);
  }
}

//fetch State data
async function fetchStateData(country, mainState) {
  country = country || "india";
  mainState = mainState || "Punjab";
  try {
    const stateResponse = await fetch(
      `https://api.covid19api.com/live/country/${country}/status/confirmed/date/${dateFormattedState}T23:50:00Z`
    );
    const stateData = await stateResponse.json();
    let states = "";

    stateData.forEach((state) => {
      states += `<option>${state.Province}</option>`;
    });

    provinceDropDown.innerHTML = states;

    const filteredState = stateData.filter((state) => {
      return state.Province.includes(mainState);
    });

    provinceDropDown.value = mainState;
    provinceDetails.innerHTML = `

    <h3>State: ${mainState}</h3>
    <h4>Confirmed: ${filteredState[0].Confirmed}</h4>
    <h4>Deaths: ${filteredState[0].Deaths}</h4>
    <h4>Recovered: ${filteredState[0].Recovered}</h4>
    <h4>Active: ${filteredState[0].Active}</h4>
    `;
  } catch (error) {
    console.log(error);
  }
}

//Adding countries dynamically in the dropbox
let allCountriesOption = "";
countries.forEach(({ country }) => {
  allCountriesOption += `
        <option value=${country.replaceAll(" ", "%20")}>${country}</option>
    `;
});
countryDropBox.innerHTML = allCountriesOption;

//When user changes the country refresh the data
countryDropBox.addEventListener("change", (e) => {
  fetchCovidData(e.target.value);
  fetchStateData(e.target.value);
  currentCountry = e.target.value;
  countryDropBox.blur();
  activateChip();
});

//When user changes the state refresh the data
provinceDropDown.addEventListener("change", (e) => {
  fetchStateData(currentCountry, e.target.value);
  provinceDropDown.blur();
});

//Adding function to every nav links
Array.from(navbar.children).forEach((nav) => {
  nav.addEventListener("click", activateNavLinks);
});

//Function to activate nav links
function activateNavLinks(e) {
  Array.from(navbar.children).forEach((nav) => {
    nav.classList.remove("active");
  });
  e.target.classList.add("active");
}

//Adding function to activate chips - Graph
Array.from(chips).forEach((chip) => {
  chip.addEventListener("click", activateChip);
});

//Function to activate chip
function activateChip(e) {
  Array.from(chips).forEach((chip) => {
    chip.classList.remove("active-chip");
  });
  let color;
  let data;
  e.target.classList.add("active-chip");
  if (e.target.innerText == "Cases") {
    color = "#3B82F6";
    data = regularCases;
  }
  if (e.target.innerText == "Recovered") {
    color = "#10B981";
    data = regularRecovered;
  }
  if (e.target.innerText == "Deaths") {
    color = "#EF4444";
    data = regularDeaths;
  }
  myGraph.destroy();
  createGraph(e.target.innerText, color, data);
}

//Get the flag of the country dynamically
let getCountryFlag = (countryName) => {
  return countries.filter((country) => {
    return country.country === countryName;
  })[0].countryInfo.flag;
};

//Main function to fetch details of covid-19 & displaying them on the web page
async function fetchCovidData(country) {
  main.classList.add("d-none");
  loader.classList.remove("d-none");
  country = country || "all";
  if (country === "Worldwide") country = "all";

  const response = await fetch(
    `https://disease.sh/v3/covid-19/historical/${country}?lastdays=365`
  );

  const covidData = await response.json();

  let dataObj = country === "all" ? covidData : covidData.timeline;
  dates = Object.keys(dataObj.cases).slice(1);
  regularCases = calculateDailyCases(dataObj.cases);
  regularRecovered = calculateDailyCases(dataObj.recovered);
  regularDeaths = calculateDailyCases(dataObj.deaths);

  if (myGraph) {
    myGraph.destroy(); // Graph has to be destroyed before creating another graph on the same area
  }
  recoveredChip.disabled = false;
  recoveredChip.classList.remove("chip-disabled");
  createGraph();

  let flagUrl = getCountryFlag(
    country === "all" ? "Worldwide" : country.replaceAll("%20", " ")
  );

  loader.classList.add("d-none");
  main.classList.remove("d-none");

  //HTML template that will appear on the web
  leftSide.innerHTML = `
  <div class="infobox bg-blue">
    <div class="info-header">
      <div style="display: flex;align-items:center">
            <h3><img src=${flagUrl} class="country-flag" /> ${
    covidData.country ? covidData.country : "Worldwide"
  }</h3>
      </div>
    <small>(Total)</small>
    </div>
    <hr />
      <table>
          <tr>
              <td>
                  Cases:
              </td>
              <td>
                <b>${formatter(dataObj.cases[dateFormatted])}</b>
              </td>
          </tr>
          ${
            dataObj.recovered[dateFormatted] === 0
              ? ""
              : `<tr>
                  <td>Recovered:</td>
                  <td>
                    <b>${formatter(dataObj.recovered[dateFormatted])}</b>
                  </td>
                </tr>`
          }
          <tr>
              <td>
                  Deaths:
              </td>
              <td>
                  <b>${formatter(dataObj.deaths[dateFormatted])}</b>
              </td>
          </tr>
      </table>
    </div>
    
  <div class="infobox bg-blue">
    <div class="info-header">
        <h3><img src=${flagUrl} class="country-flag" /> ${
    covidData.country ? covidData.country : "Worldwide"
  }</h3>
  <small>(Today)</small>
    </div>
    <hr />
      <table>
          <tr>
              <td>
                  Cases:
              </td>
              <td>
                <b>${formatter(
                  dataObj.cases[dateFormatted] -
                    dataObj.cases[yesterdayDateFormatted]
                )}</b>
              </td>
          </tr>
          ${
            dataObj.recovered[dateFormatted] -
              dataObj.recovered[yesterdayDateFormatted] ===
            0
              ? ""
              : `<tr>
                <td>Recovered:</td>
                <td>
                  <b>${formatter(
                    dataObj.recovered[dateFormatted] -
                      dataObj.recovered[yesterdayDateFormatted]
                  )}</b>
                </td>
              </tr>`
          }
          
          <tr>
              <td>
                  Deaths:
              </td>
              <td>
                  <b>${formatter(
                    dataObj.deaths[dateFormatted] -
                      dataObj.deaths[yesterdayDateFormatted]
                  )}</b>
              </td>
          </tr>
      </table>
    </div>
    `;
}

//Calculate daily cases
function calculateDailyCases(cases) {
  let data = Object.values(cases);
  let regularCases = [];
  for (let i = 0; i < data.length; i++) {
    if (data[i + 1] - data[i]) {
      regularCases.push(data[i + 1] - data[i]);
    }
  }
  return regularCases;
}
//Calculate daily recovered
function calculateDailyCases(recovered) {
  let data = Object.values(recovered);
  let regularRecovered = [];
  for (let i = 0; i < data.length; i++) {
    if (data[i + 1] - data[i]) {
      regularRecovered.push(data[i + 1] - data[i]);
    }
  }
  return regularRecovered;
}

//Calculate daily deaths
function calculateDailyCases(deaths) {
  let data = Object.values(deaths);
  let regularDeaths = [];
  for (let i = 0; i < data.length; i++) {
    if (data[i + 1] - data[i]) {
      regularDeaths.push(data[i + 1] - data[i]);
    }
  }
  return regularDeaths;
}

//Line chart
function createGraph(
  label = "Cases",
  borderColor = "#3B82F6",
  data = regularCases
) {
  if (regularRecovered.length < 1) {
    recoveredChip.disabled = true;
    recoveredChip.classList.add("chip-disabled");
  }
  myGraph = new Chart(myCanvas, {
    type: "line",
    data: {
      labels: dates,
      datasets: [
        {
          label,
          borderColor,
          data,
        },
      ],
    },
    options: {
      showLines: false,
      fill: true,
      pointBackgroundColor: "transparent",
      pointBorderColor: "transparent",
      elements: {
        line: {
          tension: 0,
        },
      },
      hover: {
        animationDuration: 0, // duration of animations when hovering an item
      },
      responsiveAnimationDuration: 0, // animation duration after a resize
    },
  });
}
