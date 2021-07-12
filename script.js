let nameq = document.querySelector(".cityName"),
    deg = document.querySelector(".temperature"),
    weather = document.querySelector(".weather"),
    icons = document.querySelector(".icon"),
searchCity = document.querySelector(".search");

function getTemperature(e) {
    searchCity = e.target.value;
    
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${searchCity}&appid=a0ca64af43c841aa63761fd22e887d7b`)
        .then(function (responce) { return responce.json() })
        .then(function (data) {
            console.log(data)
            nameq.textContent = `Your city is ${data.name}`;
            e.target.value = "";
            deg.innerHTML = Math.floor(data.main.temp) - 273 + '&deg;';
            weather.textContent = data.weather[0]['description'];
            icons.innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png">`;
            
        })
   
    .catch(() => {
searchCity="London"
    });
    
};
const debounce = (fn, ms) => {
    let timeOut;
    return function () {
        const fnCall = () => { fn.apply(this, arguments) }
        clearTimeout(timeOut);
        timeOut = setTimeout(fnCall, ms)
    };
}
onChange = debounce(getTemperature, 1000);
searchCity.addEventListener("input", onChange);




//69e8faa3 - 2fbb - 4bdc - a9db - 16069cdd8f58




















//getTemperature();




// const debounce = (func, ms) => {//
//     let timeout
    
//     return (arg) => {
//         clearTimeout(timeout);
//         timeout = setTimeout(()=> {
//     func(arg)
//         },ms)

//     }
// }

//const onchangeinput = debounce(((event) => getTemperature(event.target.value)), 500)



// const onchangeinput = debounce(((event) => getTemperature(event)), 600)
// function onchangeinput(e) {
//    city=  e.target.value;
// }
// onchangeinput();


// onchangeinput("moscow")
// onchangeinput("london")
// searchCity.addEventListener("input", onchangeinput)