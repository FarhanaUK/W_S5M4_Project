async function moduleProject4() {

  // 👇 WORK WORK BELOW THIS LINE 👇
  const footer = document.querySelector('footer')
  const currentYear = new Date().getFullYear()
  footer.textContent = `© BLOOM INSTITUTE OF TECHNOLOGY ${currentYear}`

  let descriptions = [
    ["Sunny", "☀️"],
    ["Cloudy", "☁️"],
    ["Rainy", "🌧️"],
    ["Thunderstorm", "⛈️"],
    ["Snowy", "❄️"],
    ["Partly Cloudy", "⛅️"]
  ]

  document.querySelector('#weatherWidget').style.display ='none'
  document.querySelector('#citySelect').addEventListener('change', async evt =>{
    console.log('selection made')
try{
document.querySelector('#citySelect').setAttribute('disabled', 'disabled')
document.querySelector('#weatherWidget').style.display ='none'
document.querySelector('.info').textContent ='Fetching weather data...'


console.log(evt.target.value)
let city = evt.target.value
let url = `http://localhost:3003/api/weather?city=${city}`

const res =await axios.get(url)

document.querySelector('#citySelect').removeAttribute('disabled')
document.querySelector('#weatherWidget').style.display ='block'
document.querySelector('.info').textContent =''



let {data} = res

document.querySelector('#apparentTemp div: nth-child(2)').textContent =`${data.current.apparent_temperature}`
document.querySelector('#todayDescription').textContent = descriptions.find( d=> d[0] === data.current.weather_description)[1]
document.querySelector('#todayStats div:nth-child(1)').textContent = `${data.current.temperature_min}*/${data.current.temperature_max}*`
document.querySelector('#todayStats div:nth-child(2)').textContent = `Percipitation: ${data.current.precipitation_probability * 100}%`
document.querySelector('#todayStats div:nth-child(3)').textContent = `Humidity: ${data.current.humidity}`
document.querySelector('#todayStats div:nth-child(4)').textContent = `wind: ${data.current.wind_speed}`
}catch(err){
  console.log(err.message)
}

  })

  // 👆 WORK WORK ABOVE THIS LINE 👆

}

// ❗ DO NOT CHANGE THE CODE  BELOW
// ❗ DO NOT CHANGE THE CODE  BELOW
// ❗ DO NOT CHANGE THE CODE  BELOW
if (typeof module !== 'undefined' && module.exports) module.exports = { moduleProject4 }
else moduleProject4()
