import './index.css'
import * as THREE from 'three';

// import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls.js';
// import { Texture } from 'three';

// import Swup from 'swup';

const camera = new THREE.PerspectiveCamera(60 , window.innerWidth / window.innerHeight, 1, 1000);

const scene = new THREE.Scene();



let bg = document.getElementById('bg')
let menu1 = document.getElementById('menu1')
let menu2 = document.getElementById('menu2')
let bg2 = document.getElementById('bg2')
let knowMenu  = document.getElementById('knowMenu')



  
bg2.style.display="none";
// menu1.style.display ="block";
menu2.style.display ="none";


const renderer = new THREE.WebGLRenderer({
  canvas: bg

})

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);

/**
 * Eje x orizontal 
 * Eje y vertical
 * punto 0 es la interseccion de los ejes
 */

renderer.render(scene, camera)

// const colour = [{color: 0x5D04ED6, color:0xD04ED6 }];

// const colours = colour.forEach(colour => colour);

// const geometry = new THREE.TorusGeometry(50, 0.7, 15, 20);// primera parte
const geometry = new THREE.TorusGeometry(15, 1, 3, 21);
const material = new THREE.MeshStandardMaterial({ color: 0x657fd1 });
const torus = new THREE.Mesh(geometry, material);

scene.add(torus);
camera.position.setZ(45);
camera.position.setX(0);
camera.position.setY(0);  



// const controls =  new OrbitControls(camera, renderer.domElement);

const pointlight = new THREE.PointLight(0xffffff);

pointlight.position.set(2, 2, 2);
const ambientlight = new THREE.AmbientLight(0xffffff);

scene.add(pointlight, ambientlight);

// function moveCamera(){
//   const t = document.body.getBoundingClientRect().top;

//   camera.position.y = t * -0.01;
//   camera.position.z = t * -0.0002;
//   camera.position.x = t * -0.0002;

// }

// document.body.onscroll = moveCamera;

function addStart(){

  const Ngeometry = new THREE.SphereGeometry(0.25, 10, 10);
  // const texture = new THREE.TextureLoader().load('./assets/img/start.png');
  const Nmaterial = new THREE.MeshStandardMaterial({color: 0xffffff});
   const start = new THREE.Mesh(Ngeometry, Nmaterial);
   
  const [x,y,z] = Array(3).fill().map(() => THREE.MathUtils.randFloatSpread(300));
  start.position.set(x,y,z)
  scene.add(start);
 
  
}
Array(1000).fill().forEach(addStart);


 function onWindowResize() {
  //Responsive
   const width = window.innerWidth;
   const height = window.innerHeight;
    
   camera.aspect = width / height;
   camera.updateProjectionMatrix();
 
   renderer.setSize( width, height );
   scene.add(onWindowResize);
 }


function button(){
  document.getElementById('butoonId').addEventListener('click', () => {
    const textsToHide = document.getElementById('sectionTexts');
    textsToHide.style.display="none";
    // knowMenu.style.opacity = 0;
    // // knowMenu.style.display="none";
    // knowMenu.style.transition = '2.5s';
    
    async function wait() {
      await new Promise(resolve => setTimeout(resolve, 100));
      return;
    }
    async function wait2(){
      await new Promise (resolve => setTimeout(resolve, 1500));
      return;
      
      }
    function f() {
      let inter;
      // shows 10 after 1 second
      wait().then(() => Array(5).fill().forEach(addStart));
      wait2().then(() =>  inter = setInterval(() => {camera.position.setZ(camera.position.z - 0.01), 100})); //meter un for aca?  
      // wait2().then(() =>   knowMenu.style.opacity = 0 , knowMenu.style.transition = '1.5s');
    
      wait2().then(setTimeout(() => {
        clearInterval(inter) 
        bg.style.display="none";
        bg2.style.display ="block";

        menu1.style.display ="none";
        menu2.style.display ="block";
      }, 3000));
     
    }
   
    function fadeOut(){

      bg.style.opacity = 0.5;
      bg.style.transition = '1.5s';
   
      menu1.style.opacity = 0;
      menu1.style.transition = '0.5s';
 
  }
   
      f();
      fadeOut();
  });
  
     
    }
   

function animate() {
  
  requestAnimationFrame(animate);
  window.addEventListener( 'resize', onWindowResize );
torus.rotation.z += 7;

// controls.update(); 

renderer.render(scene, camera);
button();
}


animate();
