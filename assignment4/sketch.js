const listTimes = [];

// get data
async function sun() 
{
  const requestURL = 'https://api.sunrise-sunset.org/json?lat=36.7201600&lng=-4.4203400.json';
  const request = new Request(requestURL);

  const response = await fetch(request);
  const data = await response.json();
  console.log(data);

  storeData(data);
}

// store solar times in an array
function storeData(times) 
{
  listTimes[0] = times.results.civil_twilight_begin;
  listTimes[1] = times.results.sunrise;
  listTimes[2] = times.results.solar_noon;
  listTimes[3] = times.results.sunset;
  listTimes[4] = times.results.civil_twilight_end;

  trimStrings(listTimes);
}

// trim off letters (AM and PM)
function trimStrings(listTimes)
{
  for (var i = 0; i < listTimes.length; i++)
  {
    stringy = listTimes[i].slice(0, 7);
    listTimes[i] = stringy;
  }
}

sun()

// draw with p5.js
function setup() 
{
  createCanvas(windowWidth, windowHeight);
  background(0);
}

function draw() 
{
  // stop after 1000 frames
  if (frameCount < 1000)
  {
    noFill();
    strokeWeight(0.2);

    for (let i = 0; i < listTimes.length; i++)
    { 
      stroke(random(230)+10, random(200)+10, random(240)+15);

      // seperate noon because the string had different indices
      if (i===2)
      {
        // split up hours and minutes into strings that can be cast as ints
        let letter = listTimes[i].charAt(3);
        let letter2 = listTimes[i].charAt(4);
        let minutes = letter.concat(letter2);
        let letter3 = listTimes[i].charAt(0);
        let letter4 = listTimes[i].charAt(1);
        let hour = letter3.concat(letter4);
        
        // draw noon at center of screen
        circle(windowWidth/2, (windowHeight/2)*Math.random(1, minutes*20), minutes*20);
      }
      else 
      { 
        let letter = listTimes[i].charAt(2);
        let letter2 = listTimes[i].charAt(3);
        let minutes = letter.concat(letter2);
        let hour = listTimes[i].charAt(0);
        
        // draw other times of day in sequence
        var offset = windowWidth/6;
        circle(offset*(i+1), (windowHeight/2)*Math.random(1, minutes*20), minutes*20)
      } 
    }
  } 
}