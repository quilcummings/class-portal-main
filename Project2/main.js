import { debug } from 'console';
import * as THREE from 'three';

var mouseX = 0;
var mouseY = 0;
var nums = [];
var cubes = [];

var pos = 0;
var clicked = false;

const scene = new THREE.Scene();
const container = document.querySelector('#container');

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.01,
  1000,
);

camera.position.set( 0, 0, 400);
scene.add(camera);

container.appendChild(renderer.domElement);

const globe = new THREE.Group();
var loader = new THREE.TextureLoader();

loader.load('https://images.pexels.com/photos/1205301/pexels-photo-1205301.jpeg' , function ( texture ) {

  scene.background = texture;  

});

loader.load('https://i.imgur.com/MeKgLts.jpeg', function ( texture ) {

  var sphere = new THREE.SphereGeometry( 201, 50, 50 );
  var material = new THREE.MeshBasicMaterial( { map: texture } );
  var mesh = new THREE.Mesh(sphere, material);
  mesh.rotateY(Math.PI);
  globe.add(mesh);

});

const pointLight = new THREE.PointLight(0xFFFFFF);

pointLight.position.x = 10;
pointLight.position.y = 50;
pointLight.position.z = -400;

scene.add(pointLight);

// read in data
const fs = require('fs');
const data = fs.readFileSync('./data/2018.txt').toString();
const myArray = data.split("\n");


// coordToVector3 function from this stackoverflow post
// https://stackoverflow.com/questions/36369734/how-to-map-latitude-and-longitude-to-a-3d-sphere
function coordToVector3(lat, long)
{
  var phi = (90-lat)*(Math.PI/180),
  theta = (long+180)*(Math.PI/180),
  x = -((200) * Math.sin(phi)*Math.cos(theta)),
  z = ((200) * Math.sin(phi)*Math.sin(theta)),
  y = ((200) * Math.cos(phi));

  return new THREE.Vector3(x,y,z);
}


for (var i = 0; i < myArray.length; i++)
{
  if (i % 75 == 0)
  {
    const set = myArray[i].split(";");
    nums[i] = set;
  
    const multi = nums[i][2].split('e')
    if (multi[1].includes('+'))
    {
      multi[1].replace('+', '');
    }
    multi[0] = multi[0] * Math.pow(10, multi[1]);
    nums[i][2] = multi[0];

    if (nums[i][2] > 3000)
    {
      const vect = coordToVector3(nums[i][0], nums[i][1]);

      const geometry = new THREE.BoxGeometry(2, 2, nums[i][2] / 200);
      console.log(nums[i][2]);

      if (nums[i][2]>100000)
      {
        const material = new THREE.MeshBasicMaterial( {color: 0x423F6C} );
        cubes[i] = new THREE.Mesh( geometry, material );

      } else if (nums[i][2]>50000) {
        const material = new THREE.MeshBasicMaterial( {color: 0x5A5895} );
        cubes[i] = new THREE.Mesh( geometry, material );

      } else {
        const material = new THREE.MeshBasicMaterial( {color: 0x685B8C } );
        cubes[i] = new THREE.Mesh( geometry, material );
      }
      
    
      cubes[i].position.x = vect.x;
      cubes[i].position.y = vect.y;
      cubes[i].position.z = vect.z;

      cubes[i].lookAt( new THREE.Vector3(0,0,0) );

      globe.add( cubes[i] );
    }
    
  } 
}

scene.add(globe);
globe.position.z = -300;

document.addEventListener('mousemove', onMouseMove, false);
document.addEventListener('mousedown', onMouseDown, false);
document.addEventListener('mouseup', onMouseUp, false);

function onMouseDown( event ) {
  clicked = true;
}

function onMouseUp( event ) {
  clicked = false;
}

function onMouseMove( event ) {
   mouseX = event.clientX - window.innerWidth/2;
   mouseY = event.clientY - window.innerHeight/2;
}

function loop() {

  camera.position.x += (mouseX - camera.position.x)/20;
  camera.position.y -= (mouseY + camera.position.y)/20;

  camera.lookAt( scene.position );

  if (!clicked)
  {
    globe.rotateY(0.01);
  }

  renderer.render(scene, camera);

  requestAnimationFrame(loop);
}
requestAnimationFrame(loop);



