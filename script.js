
const loadingElement = document.querySelector("#loading")
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
}






async function getWeather() {

    loading()
    let selectedCity = city.value
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${selectedCity != "" ? selectedCity : "bahia"}&appid=2d91a3f866fe412f802f099b419da399&units=metric&lang=pt_br`
    console.log("loading...")

    const response = await fetch(url)
    const data = await response.json()
    container.classList.remove("loading") 

    let resposta = ` ${data.name} \n  ${data.weather[0].description} \n  ${data.main.feels_like}`
    resultado.innerText = resposta













}

