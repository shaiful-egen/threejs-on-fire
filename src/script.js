import './style.css'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import * as dat from 'dat.gui'
import {sphere} from "./mesh3d/mesh3d";
import {sizes} from "./constant/size";
import {camera} from "./camera/camera";
import {pointLight} from "./light/light";
import {renderer} from "./renderer/renderer";

// Debug
const gui = new dat.GUI();



// Scene
const scene = new THREE.Scene();

scene.add(sphere);
scene.add(camera);
scene.add(pointLight);

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

// Controls
// const controls = new OrbitControls(camera, canvas)
// controls.enableDamping = true

/** Animate */
const clock = new THREE.Clock();

const tick = () => {
    const elapsedTime = clock.getElapsedTime()

    // Update objects
    sphere.rotation.y = .5 * elapsedTime;

    // Update Orbital Controls
    // controls.update()

    // Render
    renderer.render(scene, camera);

    // Call tick again on the next frame
    window.requestAnimationFrame(tick);
}

tick();