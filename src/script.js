import './style.css'
import * as THREE from 'three'
import * as dat from 'dat.gui'
import {sphere} from "./mesh3d/mesh3d";
import {sizes} from "./constant/size";
import {camera} from "./camera/camera";
import {renderer} from "./renderer/renderer";
import {scene} from "./scene/scene";
import {clock} from "./animation/animation";
import {pointLight, pointLight2} from "./light/light";

const gui = new dat.GUI();
const lightFolder1 = gui.addFolder('Light 1');
lightFolder1.add(pointLight.position, 'x').min(-100).max(100).step(0.1);
lightFolder1.add(pointLight.position, 'y').min(-100).max(100).step(0.1);
lightFolder1.add(pointLight.position, 'z').min(-100).max(100).step(0.1);
lightFolder1.add(pointLight, 'intensity').min(-0).max(10).step(0.1);

const lightFolder2 = gui.addFolder('Light 2');
lightFolder2.add(pointLight2.position, 'x').min(-100).max(100).step(0.1);
lightFolder2.add(pointLight2.position, 'y').min(-100).max(100).step(0.1);
lightFolder2.add(pointLight2.position, 'z').min(-100).max(100).step(0.1);
lightFolder2.add(pointLight2, 'intensity').min(-0).max(10).step(0.1);
lightFolder2.addColor({ color:0xff0000 }, 'color').onChange(() => {   pointLight2.color.set(lightFolder2.color)  })

scene.add(new THREE.PointLightHelper(pointLight, 1.5));
scene.add(new THREE.PointLightHelper(pointLight2, 1.5));

window.addEventListener('resize', () => {
    // Update sizes
    sizes.width = window.innerWidth;
    sizes.height = window.innerHeight;

    // Update camera
    camera.aspect = sizes.width / sizes.height;
    camera.updateProjectionMatrix();

    // Update renderer
    renderer.setSize(sizes.width, sizes.height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
})



let mouseX = 0;
let mouseY = 0;
let targetX = 0;
let targetY = 0;

const windowHalfX = window.innerWidth / 2;
const windowHalfY = window.innerHeight / 2;

const onDocumentMouseMove = (event) =>{
    mouseX = (event.clientX - windowHalfX);
    mouseY = (event.clientX - windowHalfY);
}

document.addEventListener('mousemove',onDocumentMouseMove);



document.addEventListener("keydown", (event) => {
    var keyCode = event.which;
    console.log(keyCode);
}, false);
document.addEventListener("click", (event) =>{
    console.log(event)
}, false);
document.addEventListener("mousedown", (event) => {    console.log(event)   });





const tick = () => {

    targetX = mouseX * 0.001;
    targetY = mouseY * 0.001;

    const elapsedTime = clock.getElapsedTime()

    // Update objects
   // sphere.rotation.y = .5 * elapsedTime;
    sphere.rotation.y += .5 * (targetX - sphere.rotation.y);
    sphere.rotation.x += .5 * (targetY - sphere.rotation.x);
    sphere.position.z += -0.5 * (targetY - sphere.rotation.x);


    // Update Orbital Controls
    // controls.update()

    // Render
    renderer.render(scene, camera);

    // Call tick again on the next frame
    window.requestAnimationFrame(tick);
}


tick();