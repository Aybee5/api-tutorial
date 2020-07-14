const base_url = "https://api.openweathermap.org/data/2.5/"
const api_key = "3a2905bb552cfde3a564bd0548d594a9"

const date = new Date().toDateString()

document.getElementById("date").innerHTML = date

let searchKey = document.getElementsByClassName("search-bar")[0]

let countryName = document.getElementById("country-name")
let countryCode = document.getElementById("country-code")
let temp = document.getElementById("temp")
let weather = document.getElementById("weather")
function apiFetch(event) {
  if (event.key === "Enter") {
    // make API request
    fetch(`${base_url}weather?q=${searchKey.value}&units=metric&APPID=${api_key}`)
      .then(response => {
        return response.json();
      })
      .then(resJSON=>{ 
        countryName.innerHTML = resJSON.name+ ', '
        countryCode.innerHTML = resJSON.sys.country
        temp.innerHTML = Math.floor(resJSON.main.temp) + '°c'
        weather.innerHTML = resJSON.weather[0].main
        if (resJSON.main.temp > 16) {
          document.getElementById('app').className = 'warm'
        }
        else {
          document.getElementById('app').className = ''
        }
      })
    }
}