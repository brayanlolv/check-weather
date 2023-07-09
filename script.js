let selectedCity 
const loadingElement = document.querySelector("#loading")
const resultado = document.querySelector("#resultado")
const city =  document.querySelector("#city")




const submitButton = document.querySelector("#submit")

submitButton.addEventListener("click",()=>{
    getWeather()
    console.log("botao,apertado")
})

console.log(city)

async function getWeather() {
    
    
    selectedCity= city.value
    const url2 = `https://api.openweathermap.org/data/2.5/weather?q=${selectedCity!=""?selectedCity:"bahia"}&appid=2d91a3f866fe412f802f099b419da399&units=metric&lang=pt_br`

    

    console.log("loading...")

    const response = await fetch(url2)
    const data = await response.json()
    console.log(data)
    let resposta = ` ${data.name} \n  ${data.weather[0].description} \n  ${data.main.feels_like}`
    resultado.innerText= resposta

    console.log(city.value)
     

 

    






}

