var apikey = "9eddc27cd14b2d9ffebef958b92a6e0e";
var apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
var searchbox = document.querySelector(".search input"); 
var searchbtn = document.querySelector(".search button");

async function showweather(city) {
        var response = await fetch(apiurl + city +`&appid=${apikey}`);
        var data = await response.json();
        console.log(data);
        if (data.cod === "404") {
            alert("OOPS! Enter a valid city name.");
            document.querySelector(".search input").value = "";
            return; 
        }
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".weather").innerHTML = Math.round(data.main.temp)  + " °C";
        document.querySelector(".humidity-detail").innerHTML = data.main.humidity + " %";
        document.querySelector(".wind-detail").innerHTML = Math.round(data.wind.speed * 3.6)  + " km/h";        
        document.querySelector(".condition").innerHTML = data.weather[0].main + " ( "+ data.weather[0].description + " ) ";        
        document.querySelector(".card-details").style.display = "grid";
        document.querySelector(".search input").value = "";
    }

searchbtn.addEventListener("click", ()=>{
    showweather(searchbox.value);
})
