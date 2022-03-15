
 import './style.css';
import * as THREE from './js/three.module.js';

const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 1, 1000);

const scene = new THREE.Scene();

let bg = document.getElementById('bg')
// let menu1 = document.getElementById('menu1')
// let menu2 = document.getElementById('menu2')
let bg2 = document.getElementById('bg2')
let knowMenu = document.getElementById('knowMenu')

knowMenu.style.opacity = 0.7;


const renderer = new THREE.WebGLRenderer({
  canvas: bg2
  
})

// menu1.style.display ="none";
// menu2.style.display ="block";


renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.setZ(75);
camera.position.setX(12);
camera.position.setY(-5);  
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

 


const pointlight = new THREE.PointLight(0xffffff);

// pointlight.position.set(2, 2, 2);
const ambientlight = new THREE.AmbientLight(0xffffff);

scene.add(pointlight, ambientlight);


const lightHelper =  new THREE.PointLightHelper(pointlight)
scene.add(lightHelper);


const tesxturesBackground = new THREE.TextureLoader().load('./joaq.jpg"');

scene.background = tesxturesBackground

document.getElementById('rRing').addEventListener('click', handleClick)


async function handleClick() {
  await new Promise((resolve) =>
                    setTimeout(resolve, 100))
                    // const textsToHide = document.getElementById('sectionTexts');
                    //   textsToHide.style.display="none";
                     
                      // async function wait() {
                      //   await new Promise(resolve => setTimeout(resolve, 100));
                      //   return;
                      // }
                      async function wait2(){
                        await new Promise (resolve => setTimeout(resolve, 1500));
                        return;
                        
                        }
                      function f2() {
                        let inter;
                        // shows 10 after 1 second
                        wait2().then(() =>  inter = setInterval(() => {camera.position.setZ(camera.position.z - 0.01), 100})); //meter un for aca?  
              
                      
                      }
                   
                        f2();
                    
                    }


// let goback2 =  document.getElementById('goback');
//   if (goback2){ // check if the element exists before adding the event list
//     goback.addEventListener('click', goback, false);}

// window.onclick=function (){
//   let gobackvariable =  document.getElementById('goback');

//   gobackvariable.addEventListener("click", test);

//   function test(){
//   const textsToHide = document.getElementById('sectionTexts');
//   textsToHide.style.display="none";
 
//   // async function wait() {
//   //   await new Promise(resolve => setTimeout(resolve, 100));
//   //   return;
//   // }
//   async function wait2(){
//     await new Promise (resolve => setTimeout(resolve, 1500));
//     return;
    
//     }
//   function f2() {
//     let inter;
//     // shows 10 after 1 second
//     wait2().then(() =>  inter = setInterval(() => {camera.position.setZ(camera.position.z - 0.01), 100})); //meter un for aca?  
  
//     wait2().then(setTimeout(() => {
//       clearInterval(inter) 
//       bg.style.display="block";
//       bg2.style.display="none";
//       menu1.style.display ="block";
//       menu2.style.display ="none";
//     }, 3000));
//     // wait3().then(() =>{ if(camera.position.z === 0){
//     //   clearInterval(inter) 
//     //   document.getElementById('bg').style.display="none";
//     //   document.getElementById('bg2').style.display="block";}
//     // });
    
  
//   }
//   function fadeOut2(){
//     setTimeout(() => {
      
//       bg.style.opacity = 0.9;
//       bg.style.transition = '1.5s';
   
//   },1000);

// }
 
//     f2();
//     fadeOut2();
//     return;

// }

// }


function animate() {
  requestAnimationFrame(animate);
  window.addEventListener( 'resize', onWindowResize );
// torus.rotation.x += 0.03;

 torus.rotation.y += 0.005;
torus.rotation.z += 10;

// controls.update(); 
renderer.render(scene, camera);
// goback();
}

animate();




// const m = new THREE.Matrix4();

// m.set( 11, 12, 13, 14,
//        21, 22, 23, 24,
//        31, 32, 33, 34,
//        41, 42, 43, 44 );

//        scene.add(m);

