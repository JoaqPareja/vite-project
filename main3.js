import './index.css'

import * as THREE from 'three';

import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls.js';
import { Texture } from 'three';

import Swup from 'swup';

const camera = new THREE.PerspectiveCamera(60 , window.innerWidth / window.innerHeight, 1, 1000);

const scene = new THREE.Scene();

const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector('#bg')

})


// window.addEventListener( 'resize', onWindowResize );

document.querySelector('#bg2').style.display="none";

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
    
      wait2().then(setTimeout(() => {
        clearInterval(inter) 
        document.getElementById('bg').style.display="none";
        document.getElementById('bg2').style.display="block";
      }, 3000));
      // wait3().then(() =>{ if(camera.position.z === 0){
      //   clearInterval(inter) 
      //   document.getElementById('bg').style.display="none";
      //   document.getElementById('bg2').style.display="block";}
      // });
      
    }
    const bg = document.getElementById('bg')
   
    function fadeOut(){
      setTimeout(() => {
        
        bg.style.opacity = 0.5;
        bg.style.transition = '1.5s';
     
    },1000);
    // const bg2 = document.getElementById('bg2')
    // bg2.style.opacity = 0;
    // setTimeout(() => {
      
    //   bg2.style.opacity = 1;
    //   bg2.style.transition = '2s';
    // }, 2000);
    }
   
      f();
      fadeOut();
  });
  
     
    }
    // f(camera.position.z === 0){
    //   clearInterval(inter) 
    //   document.getElementById('bg').style.display="none";
    //   document.getElementById('bg2').style.display="block";}
    
    // async function wait2() {
    //   await new Promise(resolve => setTimeout(resolve, 1000));
    
    //   // return 1;
    // }
    
    
    // function f2() {
    //   // shows 10 after 1 second

    //   wait2().then(() => camera.position.setZ(camera.position.z - 0.01));
    // //   wait(f()).then(
    // //     setInterval(() => {
    // //       camera.position.setZ(camera.position.z - 0.01), 100}),
    // //       setTimeout(() => {  
    // //         document.getElementById('bg').style.display="none";
    // // document.getElementById('bg2').style.display="block";}, 3000)
    // //   );
    // }
    

   
    // f2();
   
//     const inter = setInterval(() => {
//       camera.position.setZ(camera.position.z - 0.01), 100});
//       setTimeout(() => {  clearInterval(inter) 
//         document.getElementById('bg').style.display="none";
// document.getElementById('bg2').style.display="block";}, 2000);

           
  

 
 


function animate() {
  requestAnimationFrame(animate);
  window.addEventListener( 'resize', onWindowResize );
torus.rotation.z += 7;

// controls.update(); 

renderer.render(scene, camera);
button();
}


animate();
