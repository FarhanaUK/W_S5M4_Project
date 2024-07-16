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

  let widget = document.querySelector('#weatherWidget')
  widget.style.display = "none"
  

  

  let options = document.querySelectorAll('option')
  let select = document.querySelector('#citySelect')
  select.addEventListener('change', evt =>{
  options.forEach(city => {
    if(city.selected)
 console.log(`${city.textContent} was selected`)
try {
evt.target.setAttribute('disabled', 'disabled')
 widget.style.display = "none"
 document.querySelector('.info').textContent = "Fetching weather data..."
}
catch(err) {
console.log("error")
}
  })
  })
   
 

 const weatherURL = 'http://localhost:3003/api/weather'
 axios.get(weatherURL)
 
 .catch(error)
console.log(error.message)
 .finally()

 
 

  // 👆 WORK WORK ABOVE THIS LINE 👆

}

// ❗ DO NOT CHANGE THE CODE  BELOW
// ❗ DO NOT CHANGE THE CODE  BELOW
// ❗ DO NOT CHANGE THE CODE  BELOW
if (typeof module !== 'undefined' && module.exports) module.exports = { moduleProject4 }
else moduleProject4()
