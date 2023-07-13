
const loadingElement = document.querySelector("#loading")
const icons = document.querySelector("#icone")
const resultado = document.querySelector("#resultado")
const city = document.querySelector("#city")
const container = document.querySelector("#container")




const abcc = `http://api.openweathermap.org/geo/1.0/direct?q={city name},{state code},{country code}&limit={limit}&appid=2d91a3f866fe412f802f099b419da399`



const submitButton = document.querySelector("#submit")


const form = document.querySelector("form").addEventListener("submit", (event) => {
    event.preventDefault()
    getWeather()

})


function loading() {
    resultado.innerHTML = "Carregando..."
    container.classList.add("loading")
    icons.classList.add("hide")
 
}






async function getWeather() {

    loading()
    let selectedCity = city.value
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${selectedCity != "" ? selectedCity : "bahia"}&appid=2d91a3f866fe412f802f099b419da399&units=metric&lang=pt_br`
    console.log("loading...")

    const response = await fetch(url)
    const data = await response.json()
    

    console.log(data)
    container.classList.remove("loading") 


    if(data.cod == 200){
        let resposta = ` ${data.name} \n  ${data.weather[0].description} \n  ${data.main.feels_like}`
        resultado.innerText = resposta
        selectIcon(data.weather[0].icon,icons)
       
    }

    else{
        resultado.innerText = "Localidade nao encontrada. \n por favor, tente novamente ou informe seu erro pro suporte"
    }

    
}


function selectIcon(icon,img){
    
    
    

         switch(icon){
        case "01d":
            img.src = "icons/sun.png"
        break 
        
        case "01n":
            img.src = "icons/moon.png"
        break

        case "02d":
        case "03d":
            img.src = "icons/Oxygen-Icons.org-Oxygen-Status-weather-few-clouds.256.png"
        break

        case "02n":
        case "03n":
            img.src = "icons/moon-few-clouds.png"
        break
           
        case "04d":
            img.src = "icons/Oxygen-Icons.org-Oxygen-Status-weather-clouds.256.png"
        break

        case "04n":
            img.src = "icons/moon-clouds.png"

        break

        case "09d":
        case "10d":
            img.src = "icons/sun-rain.png"
        break

        case "09n":
        case "10n":
            img.src = "icons/night-rain.png"
        break

        case "11d":
        case "11n":
            img.src = "icons/thunderstorm.png"
        break

        case "13d":
        case "13n":
            img.src = "icons/snow.png"
        break

        case "50d":
        case "50n":
            img.src = "icons/mist.png"
        break

       
            

       



    }
    img.classList.remove("hide")

    
}