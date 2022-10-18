let zOne = "Epipelagic Zone\n(The Sunlight Zone)";
let zTwo = "Mesopelagic Zone\n(The Twilight Zone)";
let zThree = "Bathypelagic Zone\n(The Midnight Zone)";
let zFour = "Abyssopelagic Zone\n(The Abyss)";
let zFive = "Hadal Zone\n(The Trenches)";

let seaLev = "— Sea Level"
let twoLev = "— 200 m"
let threeLev = "— 1,000 m"
let fourLev = "— 4,000 m"
let fiveLev = "— 10,000 m"
let deeep = "— 11,000 m"

let pos = 0;

let num = 5;

let sunCreatures = [];
let twiCreatures = [];
let nightCreatures = [];
let abyssCreatures = [];
let trenchCreatures = [];

let bools = [];
bools = [false, false, false, false, false];

let bools2 = [];
bools2 = [false, false, false, false, false];

let bools3 = [];
bools3 = [false, false, false, false, false];

let bools4 = [];
bools4 = [false, false, false, false, false];

let bools5 = [];
bools5 = [false, false];


function setGradient(c1, c2) {
  noFill();
  for (var i = 0; i < height; i++) {
    var inter = map(i, 0, height, 0, 1);
    var c = lerpColor(c1, c2, inter);
    stroke(c);
    line(0, i, width, i);
  }
}

function mouseWheel(event) {
  pos += event.delta;
}

// find a better way to do this. 
// another array containing all fish ?
// inheritance... .... ....... ?

function mouseClicked() {
  for (var i = 0; i < sunCreatures.length; i++) {
    if (mouseX < sunCreatures[i].position.x +25 && mouseX > sunCreatures[i].position.x -25)
    {
      if (mouseY < sunCreatures[i].position.y -pos +25 && mouseY > sunCreatures[i].position.y -pos -25)
      {
        bools[i] = true;
      }
    }
    else
    {
      bools[i] = false;
    }
  }

  for (var i = 0; i < twiCreatures.length; i++) {
    if (mouseX < twiCreatures[i].position.x +25 && mouseX > twiCreatures[i].position.x -25)
    {
      if (mouseY < twiCreatures[i].position.y -pos +25 && mouseY > twiCreatures[i].position.y -pos -25)
      {
        bools2[i] = true;
      }
    }
    else
    {
      bools2[i] = false;
    }
  }

  for (var i = 0; i < nightCreatures.length; i++) {
    if (mouseX < nightCreatures[i].position.x +25 && mouseX > nightCreatures[i].position.x -25)
    {
      if (mouseY < nightCreatures[i].position.y -pos +25 && mouseY > nightCreatures[i].position.y -pos -25)
      {
        bools3[i] = true;
      }
    }
    else
    {
      bools3[i] = false;
    }
  }

  for (var i = 0; i < abyssCreatures.length; i++) {
    if (mouseX < abyssCreatures[i].position.x +25 && mouseX > abyssCreatures[i].position.x -25)
    {
      if (mouseY < abyssCreatures[i].position.y -pos +25 && mouseY > abyssCreatures[i].position.y -pos -25)
      {
        bools4[i] = true;
      }
    }
    else
    {
      bools4[i] = false;
    }
  }

  for (var i = 0; i < trenchCreatures.length; i++) {
    if (mouseX < trenchCreatures[i].position.x +25 && mouseX > trenchCreatures[i].position.x -25)
    {
      if (mouseY < trenchCreatures[i].position.y -pos +25 && mouseY > trenchCreatures[i].position.y -pos -25)
      {
        bools5[i] = true;
      }
    }
    else
    {
      bools5[i] = false;
    }
  }

}

function displayInfo(){
  print("TEST");
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  turtle = loadImage('assets/one/turtle.png');
  stingRay = loadImage('assets/one/stringRay.png');
  jelly = loadImage('assets/one/jellyfish.png');
  shark = loadImage('assets/one/shark.png');
  tuna = loadImage('assets/one/tuna.png');

  sunnies = [jelly, tuna, turtle, stingRay, shark];

  octopus = loadImage('assets/two/octopus.png');
  squid = loadImage('assets/two/squid.png');
  bristlemouth = loadImage('assets/two/bristlemouth.png');
  hatchetFish = loadImage('assets/two/hatchetFish.png');
  pelicanEel = loadImage('assets/two/pelicanEel.png');

  twilights = [bristlemouth, squid, hatchetFish, pelicanEel, octopus];

  anglerfish = loadImage('assets/three/anglerfish.png');
  dragonfish = loadImage('assets/three/dragonfish.png');
  lanternfish = loadImage('assets/three/lanternfish.png');
  vampireSquid = loadImage('assets/three/vampiresquid.png');
  viperfish = loadImage('assets/three/viperfish.png');

  midnights = [lanternfish, dragonfish, vampireSquid, viperfish, anglerfish];

  cuskeel = loadImage('assets/four/cuskeel.png');
  dumbooctopus = loadImage('assets/four/dumbooctopus.png');
  pearlfish = loadImage('assets/four/pearlfish.png');
  pseudoliparisSwirei = loadImage('assets/four/pseudoliparisSwirei.png');
  tripodfish = loadImage('assets/four/tripodfish.png');

  abysss = [cuskeel, pseudoliparisSwirei, pearlfish, dumbooctopus, tripodfish];

  hadalsnailfish = loadImage('assets/five/hadalsnailfish.png');
  polynoidworm = loadImage('assets/five/polynoidworm.png');

  trench = [polynoidworm, hadalsnailfish];
  

  for (var i = 0; i < num; i++) {
    sunCreatures[i] = new Creature(0, height*2, "sun", (i+2), sunnies[i]);
    twiCreatures[i] = new Creature(height*2, height*4, "twilight", (i+2), twilights[i]);
    nightCreatures[i] = new Creature(height*4, height*6, "midnight", (i+2), midnights[i]);
    abyssCreatures[i] = new Creature(height*6, height*8, "abyss", (i+2), abysss[i]);
    if (i < 2)
    {
      trenchCreatures[i] = new Creature(height*8, height*10, "trench", (i+2), trench[i]);
    }
  }
}


function draw() {

  let colorChange = pos/31;

  c1 = color(12-colorChange, 66-colorChange, 125-colorChange);
  c2 = color(2-colorChange, 13-colorChange, 31-colorChange);
  setGradient(c1, c2);

  for (let i = 0; i < sunCreatures.length; i++) 
  {
    sunCreatures[i].update();
    sunCreatures[i].display();
    sunCreatures[i].checkEdges();

    twiCreatures[i].update();
    twiCreatures[i].display();
    twiCreatures[i].checkEdges();

    nightCreatures[i].update();
    nightCreatures[i].display();
    nightCreatures[i].checkEdges();

    abyssCreatures[i].update();
    abyssCreatures[i].display();
    abyssCreatures[i].checkEdges();
  }
  for (let i = 0; i < trenchCreatures.length; i++)
  {
    trenchCreatures[i].update();
    trenchCreatures[i].display();
    trenchCreatures[i].checkEdges();
  }

  textSize(15);
  textFont('Helvetica');
  fill(255);

  if (pos > -200 && pos < 8000)
  {
    textAlign(CENTER);
    text(zOne, windowWidth/2, 40-pos);
    text(zTwo, windowWidth/2, windowHeight*2+20-pos);
    text(zThree, windowWidth/2, windowHeight*4+20-pos);
    text(zFour, windowWidth/2, windowHeight*6+20-pos);
    text(zFive, windowWidth/2, windowHeight*8+20-pos);

    textAlign(LEFT);
    text(seaLev, -2, 20-pos);
    text(twoLev, -2, windowHeight*2+20-pos);
    text(threeLev, -2, windowHeight*4+20-pos);
    text(fourLev, -2, windowHeight*6+20-pos);
    text(fiveLev, -2, windowHeight*8+20-pos);
    text(deeep, -2, windowHeight*10-20-pos);
  }

  // display first layer info
  if (bools[0]==true)
  {
    text("JELLYFISH (Scyphozoa)\nPrehistoric marine creatures that have existed in oceans for\nmillions of years. They have no bones, brains, heart, or eyes.", mouseX, mouseY);
  }
  if (bools[1]==true)
  {
    text("TUNA (Thunnus and Katsuwonus species)\nCan reach up to 10 feet in length. Often migrate across \nentire oceans. One of the most commercially valuable fish.", mouseX, mouseY);
  }
  if (bools[2]==true)
  {
    text("TURTLE (Testudines)\nCan be found on both land and in the sea, there are over 300 different \nspecies of Turtles. Unline other reptiles, turtles do not hibernate.", mouseX, mouseY);
  }
  if (bools[3]==true)
  {
    text("STRINGRAY (Myliobatoidei)\nFound in shallow coastal waters, with coloration that blends in \nwith the ocean floor, camouflaging them from predators.", mouseX, mouseY);
  }
  if (bools[4]==true)
  {
    text("SHARK (Selachimorpha)\nBoneless, ancient creatures that are made mostly of cartilage. \nThere are over 500 living species of sharks.", mouseX, mouseY);
  }

  
  //display second layer info
  if (bools2[0]==true)
  {
    text("BRISTLEMOUTH (Cyclothone)\nSmall, glowing fish that have sharp teeth. Many are smaller \nthan 2 inches, but there are more bristlemoth than any other vertibrate on Earth.", mouseX, mouseY);
  }
  if (bools2[1]==true)
  {
    text("SQUID (Teuthida)\nOver 300 species of squid, and they can be found in every ocean. \nThey range greatly in size and have short lifespans. (Around 1 year)", mouseX, mouseY);
  }
  if (bools2[2]==true)
  {
    text("HATCHETFISH (Argyropelecus Gigas)\nBioluminescent fish that are named due to their \nhatchetlike shape. Typically found in temperate waters.", mouseX, mouseY);
  }
  if (bools2[3]==true)
  {
    text("PELICAN EEL (Eurypharynx pelicanoides)\nVery poor eyesight, and uses a light on its \nrear fins to lure in prey.", mouseX, mouseY);
  }
  if (bools2[4]==true)
  {
    text("OCTOPUS (Octopoda)\nHighly intelligent and skilled at camouflage, with soft \nbodies that allow them to fit into very small crevices.", mouseX, mouseY);
  }

  //display third layer info
  if (bools3[0]==true)
  {
    text("LANTERFISH (Myctophidae)\nA bioluminescent fish that uses light to attract both \nfood and mates. There are over 200 different species of lanternfish.", mouseX, mouseY);
  }
  if (bools3[1]==true)
  {
    text("DRAGONFISH (Pegasidae)\nSometimes refered to as a Sea Moth, the Dragonfish is a \nsmall, armoured fish with winglike fins.", mouseX, mouseY);
  }
  if (bools3[2]==true)
  {
    text("VAMPIRE SQUID (Vampyroteuthidae)\nThe only living creature in its scientific family, \nthe Vampire Squid is actually not a squid at all.", mouseX, mouseY);
  }
  if (bools3[3]==true)
  {
    text("VIPERFISH (Chauliodus)\nA bioluminescent fish that uses light to attract prey.\n Typically small, but with large fangs.", mouseX, mouseY);
  }
  if (bools3[4]==true)
  {
    text("ANGLERFISH (Lophiiformes)\nEquipped with a fishingpole like appendage that has \na glowing light at the end. Anglerfish use this light to attract prety\nclose enough for them to swallow.", mouseX, mouseY);
  }

  //display fourth layer info
  if (bools4[0]==true)
  {
    text("CUSK-EEL (Ophidiidae)\nSome species can grow up to 5 feet long, but the majority \nwill not exceed 2 feet. There are about 30 different species.", mouseX, mouseY);
  }
  if (bools4[1]==true)
  {
    text("Mariana Hadal Snailfish (Pseudoliparis Swirei)\nFound in the Mariana Trench, these fish are \nlight in color and small in size.", mouseX, mouseY);
  }
  if (bools4[2]==true)
  {
    text("PEARLFISH (Carapidae)\nPearlfish are translucent fish that live inside the bodies of \nSea Cucumbers, and can be found at depths up to 2,000 meters.", mouseX, mouseY);
  }
  if (bools4[3]==true)
  {
    text("DUMBO OCTOPUS (Grimpoteuthis)\nThe deepest living species of Octopus, the Dumbo Octopus \nis very rare. They are able to survive in very extreme conditions, \nsurviving near freezing temperatures and darkness.", mouseX, mouseY);
  }
  if (bools4[4]==true)
  {
    text("TRIPOD FISH (Bathypterois Grallator)\nTripod fish are eqiupped with three bony fins that \nthey use to stand. They are near blind in the dark depths of the ocean, \nbut they use their fins to feel vibrations on the ground.", mouseX, mouseY);
  }

  //display fifth layer info
  if (bools5[0]==true)
  {
    text("POLYNOID SCALE WORM (Polynoidae)\nGenerally live on the ocean floor, hiding under rocks when they aren't hunting.", mouseX, mouseY);
  }
  if (bools5[1]==true)
  {
    text("YAP HADAL SNAILFISH (Pseudoliparis Amblystomopsis)\nHas extra genes for reparing its DNA, making survival easier at the extreme depths that they live.\nClosely related to the Mariana Hadal Snailfish.", mouseX, mouseY);
  }
  

}


class Creature {
  constructor(min, max, type, size, img) {
    this.position = createVector(random(width),random(min, max));
    this.velocity = createVector();
    this.acceleration = createVector();
    this.topspeed = 2; 
    this.species = type;
    this.size = size;
    this.min = min;
    this.max = max;
    this.image = img;
  }
// REFACTOR THIS TO HAVE LESS NESTED CONDITIONALS
  update() {
    if ((mouseX < this.position.x + 200 && mouseX > this.position.x - 200) && (mouseY < this.position.y + 200 - pos && mouseY > this.position.y - 200 - pos)) 
    {
      if (this.position.y < this.min || this.position.y > this.max)
      { 
        this.velocity.y*=-3;
      }
      else
      {
        var mouseVect = createVector(mouseX,mouseY+pos);
        this.acceleration = p5.Vector.sub(mouseVect,this.position);
        this.acceleration.setMag(0.05);
      }
      this.velocity.add(this.acceleration);
      this.velocity.limit(this.topspeed);
      this.position.add(this.velocity); 
    }
    else
    {
      this.acceleration = (random(0.00), random(0.5));
      this.velocity.add(this.acceleration);
      this.velocity.limit(this.topspeed);
      this.position.add(this.velocity); 
    }   
  }

  display() {
    let angle = Math.atan2(this.velocity.y, this.velocity.x);
    push();

    translate(this.position.x, this.position.y-pos);
    rotate(angle);
    imageMode(CENTER);
    image(this.image, 0, 0, (this.image.width/20)*this.size, (this.image.height/20)*this.size);

    pop();
  }
  checkEdges() {
    if (this.position.x > windowWidth)
    {
      this.position.x = 0;
    }
    if (this.position.x < 0)
    {
      this.position.x = windowWidth;
    }
  }
}

