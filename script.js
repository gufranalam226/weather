const apiKey = "2870d5956ba141d54d03315c7ea0cb50";
const apiURL = "https://api.openweathermap.org/data/2.5/weather?";
const searchInput = document.querySelector(".search input");
const searchBtn =document.querySelector("#button"); 

async function weather(city){
    const response= await fetch(apiURL + `q=` + city + `&appid=${apiKey}` + `&units=metric`);
    if(response.status==404){
        document.querySelector(".error").style.display="block";
        document.querySelector(".content").style.display="none";
    }
    else{
    var data= await response.json();
    const condition = data.weather[0].main;
    if(condition=="Thunderstorm"){
        document.querySelector(".temp img").src="images/images/sketring.gif"
    }
    else if(condition=="Drizzle"){
        document.querySelector(".temp img").src="images/images/clear rain.gif"
    }
    else if(condition=="Rain"){
        document.querySelector(".temp img").src="images/images/rainy.gif"
    }
    else if(condition=="Snow"){
        document.querySelector(".temp img").src="images/images/fog.gif"
    }
   
    else if(condition=="Clear"){
        document.querySelector(".temp img").src="images/images/clear.png"
    }
    else if(condition=="Clouds"){
        document.querySelector(".temp img").src="images/images/cloud.gif"
    }
    else{
        document.querySelector(".temp img").src="images/images/fog.gif"
    }
    console.log(data);
    document.querySelector(".temp h1 ").innerHTML= Math.round(data.main.temp) + "°c";
    document.querySelector(".city ").innerHTML= data.name ;
    document.querySelector(".humidity div ").innerHTML= data.main.humidity + "%";
    document.querySelector(".wind").innerHTML= data.wind.speed + "k/h";
    document.querySelector(".content").style.display="block";
    document.querySelector(".error").style.display="none";
    
   
}
}

searchBtn.addEventListener("click", function(){
    
    weather(searchInput.value);
    
});
