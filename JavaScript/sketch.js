var weather;
var input;
var api = 'http://api.openweathermap.org/data/2.5/weather?q=';
var apikey = '&appid=3f82bd2bc53f90b0d339cc8825bc49e1';

function setup() {
    createCanvas(1200, 700);
    var button = select('#submit');
    button.mousePressed(queryWeather);
    input = select('#city');
}

function queryWeather() {
    var url = api + input.value() + apikey;
    loadJSON(url,gotData);
    
}

function gotData(data){
     weather=data; 
}             
             
             
function draw() {
  background(0);
  if(weather){
      ellipse(300,200,weather.main.temp,weather.main.temp);
      ellipse(600,100,weather.main.humidity,weather.main.humidity);
  }
  
}




