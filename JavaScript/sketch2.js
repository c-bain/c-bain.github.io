var issX = 0;
var issY = 0;
var lineX = 0;
var url = 'http://api.open-notify.org/iss-now.json';
function setup() {
    createCanvas(1200, 700);
    setInterval(askISS,1000);
   
}


function askISS (){ 
     loadJSON(url, gotData, 'jsonp');
}


function gotData(data) {
    var lat = data.iss_position.latitude;
    var long = data.iss_position.longitude;
    issX = map(lat, -90, 90, 0, width);
    issY = map(long, -90, 90, 0, height);
    //issX=(width/360)*(180+long);
    //issY=(height/180)*(90-lat);
    alert("The International Space station is currently at: "+ issX +","+ issY);
}
             
             
function draw() {
    background(51);
    
    fill(255);
    ellipse(issX+50, issY+50, 50, 50);
    
    stroke(255);
    line(lineX, 0, lineX, height);
    lineX = lineX + 5;
    if (lineX > width) {
        lineX = 0;
    }
}




