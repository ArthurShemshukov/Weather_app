const apiKey = 'cf0d8dfaef89914bf7aa203a9083d9bc';
		const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?units=metric&q=';

		const searchBox = document.querySelector('.search input');
		const searchBtn = document.querySelector('.search button');
		const weatherIcon = document.querySelector('.weather-icon')


		async function checkWeather(city) {
			const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

			if(response.status == 404) {
				document.querySelector('.error').style.display ='block';
				document.querySelector('.weather').style.display ='none';
			}else{
				let data = await response.json();


			document.querySelector('.city').innerHTML = data.name;
			document.querySelector('.temprature').innerHTML = Math.round(data.main.temp) + '°c';
			document.querySelector('.humidity').innerHTML = data.main.humidity + '%';
			document.querySelector('.wind_speed').innerHTML = data.wind.speed + 'км/ч';

			if(data.weather[0].main == 'Clouds'){
				weatherIcon.src = 'images/cloudy.png'
			}
			else if (data.weather[0].main == 'Sunny'){
				weatherIcon.src = 'images/sunny.png';
			}
			else if (data.weather[0].main == 'Rainy'){
				weatherIcon.src = 'images/rainy.png';
			}
			else if (data.weather[0].main == 'Fog-Mist'){
				weatherIcon.src = 'images/fog_mist.png';
			}
			else if (data.weather[0].main == 'Snow'){
				weatherIcon.src = 'images/snow.png';
			}
			else if (data.weather[0].main == 'Sunny-With-Rain'){
				weatherIcon.src = 'images/sunny_with_rain.png';
			}

			document.querySelector('.weather').style.display = 'block';
			document.querySelector('.error').style.display = 'none';
			}


	}
		searchBtn.addEventListener('click', ()=> {
			checkWeather(searchBox.value);
		})
