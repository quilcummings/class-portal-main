import * as THREE from 'three';

const scene = new THREE.Scene();

var shape = [];
var shapes = [];

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// var loader = new THREE.TextureLoader();
// loader.load('https://images.unsplash.com/photo-1454117096348-e4abbeba002c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80' , function ( texture ) {
//   scene.background = texture; 
// });


for (var i = 0; i < 7; i++)
{
    const radius = 20;
    const geometry = new THREE.TetrahedronGeometry(radius);
    var basicMaterial = new THREE.MeshLambertMaterial({
        color: 0xD0B2F8  
    });
    
    shape[i] = new THREE.Mesh(geometry, basicMaterial);
    
    shape[i].position.x = -100;
    shape[i].position.x += i*30;
    shape[i].position.y += i*10;
    scene.add( shape[i] );
}

for (var i = 0; i < 15; i++)
{
    const radius = 20;
    const geometry = new THREE.TetrahedronGeometry(radius);
    var basicMaterial = new THREE.MeshLambertMaterial({
        color: 0x6032CC 

    });
    
    shapes[i] = new THREE.Mesh(geometry, basicMaterial);
    
    shapes[i].position.x = -500;
    shapes[i].position.y = 100;
    shapes[i].position.z = -200;

    shapes[i].position.x += i*60;
    shapes[i].position.y -= i*20;
    shapes[i].position.z += i*10;
    scene.add( shapes[i] );
}

var light = new THREE.HemisphereLight(0xD0B2F8 , 0x404040, 1);
scene.add(light);

const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.01,
    1000,
);

camera.position.set( 0, 0, 200);

scene.background = new THREE.Color( 0x000 );
scene.add(camera);

function loop() {
    renderer.render(scene, camera);

    for (var i = 0; i < 15; i++)    
    {
        shapes[i].rotation.x -= 0.001*(i+1);
        shapes[i].rotation.y -= 0.001*(i+1);
    }

    for (var i = 0; i < 7; i++)
    {
        shape[i].rotation.x += 0.001*(i+1);
        shape[i].rotation.y += 0.001*(i+1);
    }

    requestAnimationFrame(loop);
  }
  requestAnimationFrame(loop);

