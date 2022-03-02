
 import './index.css'

import * as THREE from 'three';


const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 1, 1000);

const scene = new THREE.Scene();

const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector('#bg2')
})

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.setZ(80);
camera.position.setX(14);
camera.position.setY(-2);  
/**
 * Eje x orizontal 
 * Eje y vertical
 * punto 0 es la interseccion de los ejes
 */

renderer.render(scene, camera)


const geometry = new THREE.TorusGeometry(11, 0.8, 10, 21);
const material = new THREE.MeshStandardMaterial({ color: 0x657fd1 });
const torus = new THREE.Mesh(geometry, material);

scene.add(torus);

function onWindowResize() {
  //Responsive
   const width = window.innerWidth;
   const height = window.innerHeight;
 
   camera.aspect = width / height;
   camera.updateProjectionMatrix();
 
   renderer.setSize( width, height );
   scene.add(onWindowResize);
 }

 


function animate() {
  requestAnimationFrame(animate);
  window.addEventListener( 'resize', onWindowResize );
// torus.rotation.x += 0.03;

 torus.rotation.y += 0.005;
torus.rotation.z += 10;

// controls.update(); 
renderer.render(scene, camera);
}

animate();

const pointlight = new THREE.PointLight(0xffffff);

// pointlight.position.set(2, 2, 2);
const ambientlight = new THREE.AmbientLight(0xffffff);

scene.add(pointlight, ambientlight);


const lightHelper =  new THREE.PointLightHelper(pointlight)
scene.add(lightHelper);


const tesxturesBackground = new THREE.TextureLoader().load('https://media.istockphoto.com/photos/powerful-personal-computer-gamer-rig-with-firstperson-shooter-game-on-picture-id1157159213?b=1&k=20&m=1157159213&s=170667a&w=0&h=ZEMTfy6xfTqSyHINzoufS4KoySM1g0TNqQjbekn2SmI=');

scene.background = tesxturesBackground


const m = new THREE.Matrix4();

m.set( 11, 12, 13, 14,
       21, 22, 23, 24,
       31, 32, 33, 34,
       41, 42, 43, 44 );

       scene.add(m);

