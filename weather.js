const apiKey = "6534b59d2fe1edf4782d48b5627dcf20";
    const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

    const searchBox = document.querySelector(".search input");
    const searchBtn = document.querySelector(".search button");
    const weatherIcon = document.querySelector(".weather-icon");
    
    async function checkWeather(city){
        const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

        if(response.status == 404){
            document.querySelector(".error").style.display = "block";
            document.querySelector(".weather").style.display = "none";
        }
        else{
            var data = await response.json();

        console.log(data);
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

        if(data.weather[0].main == "Clouds"){
            weatherIcon.src="sky.png";
        }
        else if (data.weather[0].main == "Clear"){
            weatherIcon.src="brightness.png";
        }
        else if (data.weather[0].main == "Rain"){
            weatherIcon.src="rain.png";
        }
        else if (data.weather[0].main == "Mist"){
            weatherIcon.src="foggy.png";
        }
        else if (data.weather[0].main == "Drizzle"){
            weatherIcon.src="umbrella.png";
        }
        else if (data.weather[0].main == "Snow"){
            weatherIcon.src="cloud.png";
        }
        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none";
        }
        
    }
    
    searchBtn.addEventListener("click", () => {
        checkWeather(searchBox.value);
    });