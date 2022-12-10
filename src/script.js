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
import  "./control/control";
import  "./debug/debug";

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
});




let targetX = 1.5;
let targetY = 1.5;
let mouseX = 1.5;
let mouseY = 1.5;


const windowHalfX = window.innerWidth / 2;
const windowHalfY = window.innerHeight / 2;

const tick = () => {

    targetX = mouseX * 0.001;
    targetY = mouseY * 0.001;

    const elapsedTime = clock.getElapsedTime()

    // Update objects
   // sphere.rotation.y = .5 * elapsedTime;
    sphere.rotation.y += .5 * (targetX - sphere.rotation.y);
    sphere.rotation.x += .5 * (targetY - sphere.rotation.x);
    sphere.position.z += -1 * (targetY - sphere.rotation.x);

    // Update Orbital Controls
    // controls.update()

    renderer.render(scene, camera);

    // Call tick again on the next frame
    window.requestAnimationFrame(tick);
}

tick();