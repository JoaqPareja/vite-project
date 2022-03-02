
 import './style.css'

 import * as THREE from 'three';

 import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls.js';

 const camera = new THREE.PerspectiveCamera(100, window.innerWidth / window.innerHeight, 0.1, 1000);

 const scene = new THREE.Scene();

 const renderer = new THREE.WebGLRenderer({
   canvas: document.querySelector('#bg')
 })

 renderer.setPixelRatio(window.devicePixelRatio);
 renderer.setSize(window.innerWidth, window.innerHeight);
 camera.position.setZ(60);
 camera.position.setX(0);
  camera.position.setY(-5);  
  // camera.position.setY(50);

 renderer.render(scene, camera)

//  const colour = [, 0xD04ED6];

//  const colours = colour.forEach(colour => {colour});


const geometry = new THREE.RingGeometry(50, 5, 32);
 const material = new THREE.MeshBasicMaterial({ color: 0x323f66  , opacity: 0.5, transparent: true });
 const torus = new THREE.Mesh(geometry, material);

 scene.add(torus);

// const gridHelper = new THREE.GridHelper(200, 50);
// scene.add(gridHelper);

const controls =  new OrbitControls(camera, renderer.domElement);


function animate() {
  requestAnimationFrame(animate);

 torus.rotation.x += 0.01; //RAP{IDOOOOO CTM O LENTO

 
// torus.rotation.z += 0.005;

torus.rotation.y += 0.005;

// torus.rotation.y += 0.005;
torus.rotation.z += 5;
controls.update();
renderer.render(scene, camera);
}

animate();

  const pointlight = new THREE.PointLight(0xffffff);

  pointlight.position.set(5, 5, 5);
  const ambientlight = new THREE.AmbientLight(0xffffff);

  scene.add(pointlight, ambientlight);


  const lightHelper =  new THREE.PointLightHelper(pointlight)
  scene.add(lightHelper);

function addStart(){
  const geometry = new THREE.SphereGeometry(0.25, 16, 16);
  const material = new THREE.MeshStandardMaterial({color: 0xffffff});
  const start = new THREE.Mesh(geometry, material);

  const [x,y,z] = Array(3).fill().map(() => THREE.Math.randFloatSpread(200));
  start.position.set(x,y,z);
  scene.add(start);
}

Array(200).fill().forEach(addStart);


const spaceTexture = new THREE.TextureLoader().load('31115.jpg');
// const tesxturesBackground2 = new THREE.TextureLoader().load('630x355.jpg');

scene.background = spaceTexture


// const background = new THREE.Mesh(
//   new THREE.TorusGeometry(3, 32, 32),
//   new  THREE.MeshStandardMaterial({
//     map:tesxturesBackground,
//     normalMap: tesxturesBackground2
//   })
// );
// scene.add(background);